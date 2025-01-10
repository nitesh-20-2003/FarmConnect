import { Button } from "@/components/ui/button";
import { MdQueryStats } from "react-icons/md";
import Link from "next/link";
async function stats() {
  // temp
  const numItemsInCart = 9;
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link href="/statistics">
        <MdQueryStats />
      </Link>
    </Button>
  );
}
export default stats;
