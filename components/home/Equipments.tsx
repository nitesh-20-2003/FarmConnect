import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


import hero1 from "@/public/equipments/image1.jpg";
import hero2 from "@/public/equipments/image2.jpg";
import hero3 from "@/public/equipments/image3.jpg";
import hero4 from "@/public/equipments/image4.jpg";
import hero5 from "@/public/equipments/image5.jpg";
import hero6 from "@/public/equipments/image6.jpg";

const carouselEquipments = [hero1, hero2, hero3, hero4, hero5, hero6];

export function CarouselSize() {
  return (
    <Carousel
      className=" mt-20"
    >
      <CarouselContent>
        {carouselEquipments.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-2">
                  <Image
                    src={image}
                    alt={`hero-${index}`}
                    className="w-full h-64 rounded-md object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
