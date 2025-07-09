import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroCarousel from "./HeroCarousel";

const farmSong = "/audio_agri.mpeg";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We are Connecting Farmers to Retailers
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          FarmConnect bridges the gap between farmers and retailers through a
          secure and easy-to-use platform. We empower farmers to sell their
          fresh produce directly to trusted buyers, ensuring fair prices, better
          profits, and a stronger farming community.
        </p>

        {/* Button and Audio Player in one row */}
        <div className="flex items-center gap-4 mt-10">
          <Button asChild size="lg">
            <Link href="/products">Our Products</Link>
          </Button>

          {/* Small Audio Player */}
          <audio controls className="w-43  rounded-full">
            <source src={farmSong} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
      <HeroCarousel />
    </section>
  );
}

export default Hero;
