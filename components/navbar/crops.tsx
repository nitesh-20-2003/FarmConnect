
import { Button } from "@/components/ui/button";
import { PiPlantFill } from "react-icons/pi";
import Link from "next/link";
async function stats() {
  // temp
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link href="/statistics">
        <PiPlantFill />
      </Link>
    </Button>
  );
}
export default stats;
