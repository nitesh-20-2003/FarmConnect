/**
 * direct payment from front end to stripe is not so secure so i am going to use an routing intead
 * instead of direct sending request ill send it first to my route defined than it to the stripe API
 * +--------+    Fetch clientSecret    +--------+   Request        +---------+
| Client | -----------------------> | Server | ---------------> | Stripe  |
|        |                          |        |                  |  API    |
|        |                          |        | <--------------- |         |
|        | <----------------------- |        |   clientSecret   |         |
|        |  clientSecret response   |        |                  |         |
+--------+                          +--------+                  +---------+
 */
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
import { type NextRequest } from "next/server";
import db from "@/utils/db";

export const POST = async (req: NextRequest) => {
  const requestHeaders = new Headers(req.headers);
  const origin = requestHeaders.get("origin");

  const { orderId, cartId } = await req.json();
//*grabbing order and and cart on base of their id
  const order = await db.order.findUnique({
    where: {
      id: orderId,
    },
  });

  const cart = await db.cart.findUnique({
    where: {
      id: cartId,
    },
    include: {
      cartItems: {
        include: {
          product: true,
        },
      },
    },
  });

  if (!order || !cart) {
    return Response.json(null, {
      status: 404,
      statusText: "Not Found",
    });
  }
// if no order or cartid surely the payment gonna fail so return amigo :)
  const line_items = cart.cartItems.map((cartItem) => {
    return {
      quantity: cartItem.amount,
      price_data: {
        currency: "inr", 
        product_data: {
          name: cartItem.product.name,
          images: [cartItem.product.image],
        },
        unit_amount: cartItem.product.price * 100, 
        // price converted into paisa bcoz stripe is looking for the smallest unit in currency during the payment :)
      },
    };
  });

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      metadata: { orderId, cartId },
      line_items: line_items,
      mode: "payment",
      return_url: `${origin}/api/confirm?session_id={CHECKOUT_SESSION_ID}`,
    });

    return Response.json({ clientSecret: session.client_secret });
  } catch (error) {
    console.log(error);

    return Response.json(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
    //* payment wasn't succesfull maybe some reason send 500
  }
};

/**
 * stripe is looking in this way but we have array of cart items so we iterate over everything 
 * return {
  quantity: 1,
  price_data: {
    currency: 'usd',
    product_data: {
      name: 'product name',
      images: ['product image url'],
    },
    unit_amount: cartItem.product.price * 100, 
  },
};
 */