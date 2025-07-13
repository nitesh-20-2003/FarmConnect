"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

const hero1 =
  "https://zshltlhkhqapqjmibacn.supabase.co/storage/v1/object/public/FarmConnect//image-1.jpg";
import hero2 from "@/public/images/image-2.jpg";
import hero3 from "@/public/images/image-3.jpg";
import hero4 from "@/public/images/image-4.jpg";
import hero5 from "@/public/images/image-5.jpg";
import hero6 from "@/public/images/image-6.jpg";





const carouselImages: (string | StaticImageData)[] = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
];

function HeroCarousel() {
  return (
    <div className="hidden lg:block">
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="p-2">
                  <div className="relative w-full h-[24rem] rounded-md overflow-hidden">
                    <Image
                      src={image}
                      alt={`hero-${index + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
