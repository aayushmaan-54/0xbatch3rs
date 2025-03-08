import Link from "next/link";
import AsciiBat from "../ascii-bat/ascii-bat";
import AsciiFooterName from "../ascii-footer-name/ascii-footer-name";
import Icon from "@/assets/icons";



export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="border-t border-accent-green-dark/30 mt-10 px-[5%]">
        <div className="flex justify-between md:justify-around mt-6">
          <div className="text-accent-green-light font-bold text-base font-vt323">
            <AsciiBat />
            <p>[&copy;] Copyright {currentYear}</p>
            <p>VER 1.0.0</p>
          </div>

          <div className="flex gap-3 sm:gap-5">
            <Link href="https://github.com/aayushmaan-54">
              <Icon.GitHub className="stroke-accent-green-light hover:scale-110 transition-all duration-200 hover:rotate-10" />
            </Link>

            <Link href="https://www.linkedin.com/in/aayushmaan54">
              <Icon.LinkedIn className="stroke-accent-green-light hover:scale-110 transition-all duration-200 hover:-rotate-10" />
            </Link>

            <Link href="https://x.com/aayushmaan54">
              <Icon.TwitterX className="fill-accent-green-light size-6 hover:scale-110 transition-all duration-200 hover:rotate-10" />
            </Link>

            <Link href="mailto:aayushmaan.soni54@gmail.com">
              <Icon.Mail className="stroke-accent-green-light hover:scale-110 transition-all duration-200 hover:-rotate-10" />
            </Link>

            <Link href="https://aayushmaan-soni.vercel.app">
              <Icon.Globe className="stroke-accent-green-light hover:scale-110 transition-all duration-200 hover:rotate-10" />
            </Link>
          </div>
        </div>

        <AsciiFooterName />
      </footer>
    </>
  );
}