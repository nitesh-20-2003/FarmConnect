import Hero from "@/components/home/Hero";
import LoadingContainer from "@/components/global/LoadingContainer";
import { Suspense } from "react";
import MajorCrops from '@/components/home/MajorCrops'
function HomPage() {
  return (
    <div>
      <Hero />

      <Suspense fallback={<LoadingContainer />}>
        <MajorCrops />
      </Suspense>
    </div>
  );
}
export default HomPage;
