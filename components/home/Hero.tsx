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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque et
          voluptas saepe in quae voluptate, laborum maiores possimus illum
          reprehenderit aut delectus veniam cum perferendis unde sint doloremque
          non nam.
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
