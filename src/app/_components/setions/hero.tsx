import { BinaryBackground } from "@/components/binary-background/binary-background";
import Badge from "../ui/badge";
import GlitchText from "@/components/glitch-text/glitch-text";
import Icon from "@/assets/icons";
import Link from "next/link";


export default function Hero() {


  return (
    <section className="overflow-hidden flex flex-col justify-center pb-[10vw]">
      {/* Blured Background Circles */}
      <div className="relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-green/20 rounded-full blur-3xl z-0 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-green/20 rounded-full blur-3xl z-0 pointer-events-none" />
        <BinaryBackground />
      </div>


      <div className="z-10 flex flex-col justify-center items-center mt-10">
        <Badge text="Automate. Share. Execute." />
        <GlitchText text="Batchers: " className="text-5xl font-vt323 sm:text-7xl md:text-8xl font-bold mt-5" />

        <p className="text-3xl sm:text-5xl md:text-6xl font-bold text-center mt-2">
          <span className="bg-gradient-to-b from-text-light to-text-light/60 bg-clip-text text-transparent">Share, Discover, </span>
          <br /> 
          <span className="bg-gradient-to-b from-accent-green-light to-accent-green-dark bg-clip-text text-transparent">Power of .bat</span>
        </p>

        <p className="mt-4 text-text-light/85 text-center text-xs sm:text-base md:text-lg font-medium px-2">The go-to hub for <span className="text-accent-green-light">batch script enthusiasts</span>. Share, discover, and automate with ease</p>

        <div className="flex flex-col sm:flex-row gap-5 mt-3">
          <Link href="/auth/login" className="flex items-center justify-center gap-3 text-xs font-bold bg-accent-green-light text-primary px-3 py-2 rounded-md w-[80vw] sm:w-fit sm:text-lg sm:font-medium group hover:scale-110 transition-all duration-150">
            <Icon.Share className="size-5 group-hover:rotate-10 transition-all duration-200" />
            Share Your Scripts
          </Link>

          <Link href="/feed" className="flex items-center justify-center gap-3 text-xs font-bold bg-accent-green-dark/30 px-3 py-2 rounded-md border border-accent-green-light text-accent-green-light sm:w-fit sm:text-lg sm:font-medium group hover:scale-110 transition-all duration-150">
            <Icon.SearchCode className="size-5 group-hover:rotate-10 transition-all duration-200" />
            Explore Scripts
          </Link>
        </div>
      </div>
    </section>
  );
}