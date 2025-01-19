
import { fetchAllCrops } from "@/utils/action";
import { formatCurrency } from "@/utils/format";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
async function CropsContainer() {
  const crops = await fetchAllCrops();
  
 
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {crops.map((crop) => {
        const { name,MSP, image } = crop;

        const productId = crop.id;
        const INR = formatCurrency(MSP);
        return (
          <article key={productId} className="group relative">
            <Link href={`/crops/${productId}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-4">
                  <div className="relative h-64 md:h-48 rounded overflow-hidden ">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                      priority
                      className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="text-lg  capitalize">{name}</h2>
                    <Button variant={"link"}>
                        Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-7 right-7 z-5">
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default CropsContainer;
