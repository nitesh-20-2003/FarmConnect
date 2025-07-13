"use client";

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

// External image URLs
const hero1 =
  "https://zshltlhkhqapqjmibacn.supabase.co/storage/v1/object/public/FarmConnect/image1.jpg";
const hero2 =
  "https://zshltlhkhqapqjmibacn.supabase.co/storage/v1/object/public/FarmConnect/image2.jpg";
const hero3 =
  "https://zshltlhkhqapqjmibacn.supabase.co/storage/v1/object/public/FarmConnect/image3.jpg";
const hero4 =
  "https://zshltlhkhqapqjmibacn.supabase.co/storage/v1/object/public/FarmConnect/image4.jpg";
const hero5 =
  "https://zshltlhkhqapqjmibacn.supabase.co/storage/v1/object/public/FarmConnect/image5.jpg";
const hero6 =
  "https://zshltlhkhqapqjmibacn.supabase.co/storage/v1/object/public/FarmConnect/image6.jpg";

const carouselEquipments = [hero1, hero2, hero3, hero4, hero5, hero6];

export function CarouselSize() {
  return (
    <Carousel className="mt-20">
      <CarouselContent>
        {carouselEquipments.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="p-0">
                  <div className="relative w-full h-64 rounded-md overflow-hidden">
                    <Image
                      src={image}
                      alt={`hero-${index}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
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
