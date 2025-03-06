import Icon from "@/assets/icons";
import GlitchText from "../glitch-text/glitch-text";
import LightModeWarning from "./light-mode-warning";
import Link from "next/link";


export default function Navbar() {
  return (
    <>
      <header className="py-4 px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <Link href={'/'} className="flex items-center gap-1">
            <Icon.Logo className="fill-accent-green-light size-5 sm:size-7" />
            <GlitchText
              text="0xbatch3rs"
              className="font-[vt323] text-3xl hidden sm:block"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="">
          <input
            type="text"
            placeholder="Search..."
            className="w-[50vw] text-xs sm:text-lg font-medium focus:outline-none border border-accent-green-light px-2 py-1 rounded-sm sm:w-[]"
          />
        </div>

        {/* Toggle Mode and Sign In / User Account */}
        <div className="flex items-center space-x-2">
          <LightModeWarning />
          <Link
            href={'/sign-in'}
            className="bg-accent-green-dark/30 text-accent-green-light px-2 py-1 border border-accent-green-light rounded-md font-medium text-xs sm:text-lg">
            Sign In
          </Link>
        </div>
      </header>
    </>
  );
}