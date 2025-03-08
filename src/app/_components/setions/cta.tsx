import Icon from "@/assets/icons";
import Link from "next/link";


export default function CTA() {


  return (
    <>
      <section className="flex flex-col items-center justify-center text-center pt-20 pb-10">
        <div className="w-[85vw]">
          <Icon.ShellPrompt className="stroke-accent-green-light sm:size-15 size-10 mx-auto" />
          <h3 className="text-lg sm:text-2xl font-bold">Unlock the Power of <span className="bg-primary text-accent-green-light">.bat</span> Scripts — Start Exploring Now!</h3>
          <p className="text-xs sm:text-base font-bold"> Contribute your best .bat scripts, gain insights, and join a growing community of batchers 🦇!</p>

          <div className="flex flex-col items-center justify-center sm:flex-row gap-2 mt-3">
            <div className="flex flex-col items-center justify-center sm:flex-row gap-2 mt-3">
              <Link href="/auth/login" className="flex items-center justify-center gap-3 text-xs font-bold bg-accent-green-light text-primary px-3 py-2 rounded-md w-[80vw] sm:w-fit sm:text-lg sm:font-medium group hover:scale-110 transition-all duration-150 sm:mr-4">
                <Icon.Upload className="size-5 group-hover:rotate-10 transition-all duration-200" />
                Upload Your Scripts
              </Link>

              <Link href="/feed" className="flex items-center justify-center gap-3 text-xs font-bold bg-accent-green-dark/30 px-3 py-2 rounded-md border border-accent-green-light text-accent-green-light w-[80vw] sm:w-fit sm:text-lg sm:font-medium group hover:scale-110 transition-all duration-150">
                <Icon.SearchCode className="size-5 group-hover:rotate-10 transition-all duration-200" />
                Explore Scripts
              </Link>
            </div>
          </div>
        </div>
      </section >
    </>
  );
}