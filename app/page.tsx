import Hero from "@/components/home/Hero";
import LoadingContainer from "@/components/global/LoadingContainer";
import { Suspense } from "react";
import {AccordionDemo} from '@/components/home/Accordation'
import MajorCrops from '@/components/home/MajorCrops'
function HomPage() {
  return (
    <div>
      <Hero />

      <Suspense fallback={<LoadingContainer />}>
        <MajorCrops />
      </Suspense>
      <AccordionDemo />
    </div>
  );
}
export default HomPage;
