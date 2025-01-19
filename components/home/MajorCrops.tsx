import { fetchAllCrops } from "@/utils/action";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { PiPlantFill } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import CropsContainer from "../crops/CropsContanier";
import Link from "next/link";
import { Suspense } from "react";
async function MajorCrops() {
  const crops=fetchAllCrops();
  return (
    <section className="pt-24">
      <div className="mb-4">
        <div className="flex justify-between">
          <div className="flex text-3xl font-medium tracking-wider capitalize mb-8">
            <h2 className="">Major Crops Of India</h2>
            <span className="ml-2">
              <PiPlantFill />
            </span>
          </div>
          <Button asChild>
            <Link className="flex" href={`/crops`}>
              View All
              <span className="ml-1">
                <FaArrowRightLong />
              </span>
            </Link>
          </Button>
        </div>
      <CropsContainer />
      </div>
    
    </section>
  );
}

export default MajorCrops;
