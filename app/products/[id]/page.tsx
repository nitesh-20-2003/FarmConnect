import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import { fetchSingleProduct } from "@/utils/action";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-product/AddtoCart";
import ProductRating from "@/components/single-product/ProductRating";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
type tParams = Promise<{ id: string }>;
async function SingleProductPage(props: { params: tParams }) {
  const {id}=await props.params
  const product = await fetchSingleProduct(id);
  const {  image, company, description, price,category,clerkId } = product;
  const dollarsAmount = formatCurrency(price);
// console.log(clerkId)
  return (
    <section>
      <BreadCrumbs name={product.company} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={company}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
            priority
            className="w-full rounded-md object-cover"
          />
        </div>
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{category}</h1>
            <FavoriteToggleButton />
          </div>
          <ProductRating productId={id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <div className="flex gap-x-4 mt-6 flex-col md:flex-row">
            <AddToCart productId={id} />
            <Button asChild>
              <Link href={`/products/${id}/${clerkId}`}>Contact Farmer</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;
