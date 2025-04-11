
import { fetchsingleCrop } from "@/utils/action";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import { Component } from "./chart";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import ProductRating from "@/components/single-product/ProductRating";
type tParams = Promise<{ id: string }>;
async function SingleProductPage(props: { params: tParams }) {
  const { id } = await props.params;
  const product = await fetchsingleCrop(id);
  const { name, image, MSP, description} = product;
  const dollarsAmount = formatCurrency(MSP);

  return (
    <section>
      
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
            priority
            className="w-full rounded-md object-cover"
          />
        </div>
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoriteToggleButton />
          </div>
          <ProductRating productId={id} />
          <h4 className="text-xl mt-2">Nitesh Sharma</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
         
        </div>
        <Component />
      </div>
    </section>
  );
}

export default SingleProductPage;
