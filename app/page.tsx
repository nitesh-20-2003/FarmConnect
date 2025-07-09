import Hero from "@/components/home/Hero";
import LoadingContainer from "@/components/global/LoadingContainer";
import { Suspense } from "react";
import {AccordionDemo} from '@/components/home/Accordation'
import MajorCrops from '@/components/home/MajorCrops'
import {ChartAreaInteractive} from "@/components/home/Chart";
import {CarouselSize} from "@/components/home/Equipments";
function HomPage() {
  return (
    <div>
      <Hero />
      <ChartAreaInteractive />
      <CarouselSize />
      <Suspense fallback={<LoadingContainer />}>
        <MajorCrops />
      </Suspense>
      <AccordionDemo />
    </div>
  );
}
export default HomPage;
