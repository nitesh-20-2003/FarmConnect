"use server"
import { redirect } from "next/navigation";
import db from "@/utils/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { productSchema, validateWithZodSchema, imageSchema } from "./schemas";
import { uploadImage } from "./supabase";
import { Cart } from "@prisma/client";
const getUser = async () => {
  const user = await getAuthUser();// get the authenticated user
  if (!user||!user.id) redirect("/");
  return user;
};
import { revalidatePath } from "next/cache";
// !current user dashboard,
export const deleteProductAction = async (prevState: { productId: string }) => {
  const { productId } = prevState;
  // await getAdminUser();
const user = await getUser();
  try {
    await db.product.delete({
      where: {
        id: productId,
        clerkId:user.id,
      },
    });

    revalidatePath("/admin/products");
    return { message: "product removed" };
  } catch (error) {
    return renderError(error);
  }
};
export const fetchAdminProducts = async () => {
  // await getAdminUser();
  const user = await getUser();
  const products = await db.product.findMany({
    where:{
      clerkId:user.id,
    },
    orderBy: {
      createdAt: "desc",

    },
  });
  return products;
};
export const fetchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    
  });
  return products;
};

export const  fetchAllProducts = async({ search = "" }: { search: string }) => {
  return db.product.findMany({
    where: {
      OR: [
        { category: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    redirect("/products");
  }
  return product;
};

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
};
// to get the current user ,if no user redirect and go to home page
const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to access this route");
  }
  return user;
};
export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {

  const user = await getAuthUser();
  try {
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;
    const validatedFields = validateWithZodSchema(productSchema, rawData);
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFile.image);

    await db.product.create({
      data: {
        ...validatedFields,
        image: fullPath,
        clerkId: user.id,
      },
    });
  } catch (error) {
    return renderError(error);
  }
  redirect("/admin/products");
};
export const fetchAdminProductDetails = async (productId: string) => {
 const user= await getUser();
  const product = await db.product.findUnique({
    where: {
      id: productId,
      clerkId:user.id,
    },
  });
  if (!product) redirect("/admin/products");
  return product;
};

export const updateProductAction = async (
  prevState: any,
  formData: FormData
) => {

 const user= await getUser();
  try {
    const productId = formData.get("id") as string;
    const rawData = Object.fromEntries(formData);

    const validatedFields = validateWithZodSchema(productSchema, rawData);

    await db.product.update({
      where: {
        id: productId,
        clerkId:user.id,
      },
      data: {
        ...validatedFields,
      },
    });
    revalidatePath(`/admin/products/${productId}/edit`);
    return { message: "Product updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};
export const updateProductImageAction = async (
  prevState: any,
  formData: FormData
) => {
  return { message: "Product Image updated successfully" };
};
export const fetchCartItems = async () => {
  const { userId } = await auth();

  const cart = await db.cart.findFirst({
    where: {
      clerkId: userId ?? "",
    },
    select: {
      numItemsInCart: true,
    },
  });
  return cart?.numItemsInCart || 0;
};

const fetchProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};
const includeProductClause = {
  cartItems: {
    include: {
      product: true,
    },
  },
};

export const fetchOrCreateCart = async ({
  userId,
  errorOnFailure = false,
}: {
  userId: string;
  errorOnFailure?: boolean;
}) => {
  let cart = await db.cart.findFirst({
    where: {
      clerkId: userId,
    },
    include: includeProductClause,
  });

  if (!cart && errorOnFailure) {
    throw new Error("Cart not found");
  }

  if (!cart) {
    cart = await db.cart.create({
      data: {
        clerkId: userId,
      },
      include: includeProductClause,
    });
  }

  return cart;
};

const updateOrCreateCartItem = async ({
  productId,
  cartId,
  amount,
}: {
  productId: string;
  cartId: string;
  amount: number;
}) => {
  let cartItem = await db.cartItem.findFirst({
    where: {
      productId,
      cartId,
    },
  });

  if (cartItem) {
    cartItem = await db.cartItem.update({
      where: {
        id: cartItem.id,
      },
      data: {
        amount: cartItem.amount + amount,
      },
    });
  } else {
    cartItem = await db.cartItem.create({
      data: { amount, productId, cartId },
    });
  }
};

export const updateCart = async (cart: Cart) => {
  const cartItems = await db.cartItem.findMany({
    where: {
      cartId: cart.id,
    },
    include: {
      product: true, // Include the related product
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  let numItemsInCart = 0;
  let cartTotal = 0;

  for (const item of cartItems) {
    numItemsInCart += item.amount;
    cartTotal += item.amount * item.product.price;
  }
  const tax = cart.taxRate * cartTotal;
  const shipping = cartTotal ? cart.shipping : 0;
  const orderTotal = cartTotal + tax + shipping;

  const currentCart = await db.cart.update({
    where: {
      id: cart.id,
    },

    data: {
      numItemsInCart,
      cartTotal,
      tax,
      orderTotal,
    },
    include: includeProductClause,
  });
  return { currentCart, cartItems };
};

export const addToCartAction = async (prevState: any, formData: FormData) => {
  const user = await getAuthUser();
  try {
    const productId = formData.get("productId") as string;
    const amount = Number(formData.get("amount"));
    await fetchProduct(productId);
    const cart = await fetchOrCreateCart({ userId: user.id });
    await updateOrCreateCartItem({ productId, cartId: cart.id, amount });
    await updateCart(cart);
  } catch (error) {
    return renderError(error);
  }
  redirect("/cart");
};

export const removeCartItemAction = async (
  prevState: any,
  formData: FormData
) => {
  const user = await getAuthUser();
  try {
    const cartItemId = formData.get("id") as string;
    const cart = await fetchOrCreateCart({
      userId: user.id,
      errorOnFailure: true,
    });
    await db.cartItem.delete({
      where: {
        id: cartItemId,
        cartId: cart.id,
      },
    });

    await updateCart(cart);
    revalidatePath("/cart");
    return { message: "Item removed from cart" };
  } catch (error) {
    return renderError(error);
  }
};
export const updateCartItemAction = async ({
  amount,
  cartItemId,
}: {
  amount: number;
  cartItemId: string;
}) => {
  const user = await getAuthUser();

  try {
    const cart = await fetchOrCreateCart({
      userId: user.id,
      errorOnFailure: true,
    });
    await db.cartItem.update({
      where: {
        id: cartItemId,
        cartId: cart.id,
      },
      data: {
        amount,
      },
    });
    await updateCart(cart);
    revalidatePath("/cart");
    return { message: "cart updated" };
  } catch (error) {
    return renderError(error);
  }
};


//* Orders action
export const createOrderAction = async (prevState: any, formData: FormData) => {
  const user = await getAuthUser();
  let orderId: null | string = null;
  let cartId: null | string = null;
  // their maybe issue in creating/obtaining the order and cartId so to be on safe side i use it null here initial value
  try {
    const cart = await fetchOrCreateCart({
      userId: user.id,
      errorOnFailure: true,
    });
    cartId = cart.id;
    // from null now it is equal to cart id
    await db.order.deleteMany({
      where: {
        clerkId: user.id,
        isPaid: false,
      },
    });
      // remove all existing instances where isPaid is false
    const order = await db.order.create({
      data: {
        clerkId: user.id,
        products: cart.numItemsInCart,
        orderTotal: cart.orderTotal,
        tax: cart.tax,
        shipping: cart.shipping,
        email: user.emailAddresses[0].emailAddress,
      },
    });
    orderId = order.id;
  } catch (error) {
    return renderError(error);
  }
  redirect(`/checkout?orderId=${orderId}&cartId=${cartId}`);
  // dynamic page redirecting
};
export const fetchUserOrders = async () => {
  const user = await getAuthUser();
  const orders = await db.order.findMany({
    where: {
      clerkId: user.id,
      isPaid: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return orders;
};

export const fetchAdminOrders = async () => {
  const user = await getUser();

  const orders = await db.order.findMany({
    where: {
      isPaid: true,
      clerkId:user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return orders;
};

//* crops section
export const fetchAllCrops = async () => {
  return db.crops.findMany();
};
export const fetchsingleCrop = async (cropId: string) => {
  const crop = await db.crops.findUnique({
    where: {
      id: cropId,
    },
  });
  if (!crop) {
    redirect("/crops");
  }
  return crop;
};

// filters

export const fetchCategorie = async () => {
  return db.product.findMany({
    distinct: ["category"],
    select: {
      category: true,
    },
  });
};
/**
 * 
export const  fetchAllProducts = async({ search = "" }: { search: string }) => {
  return db.product.findMany({
    where: {
      OR: [
        { category: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

 */