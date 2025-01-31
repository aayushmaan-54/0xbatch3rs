"use client";
import { X } from "@/app/assets/images/svg";
import cn from "@/lib/cn";
import GlitchText from "../glitch-text/glitch-text";

interface ModalPropsTypes {
  content: string;
  isOpen: boolean;
  onClose: () => void;
}


export default function Modal({ content, isOpen, onClose }: ModalPropsTypes) {
  
  return (
    <>
      <div
        className={cn(
          "modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-toggle-background rounded-lg bg-brand-primary text-light-primary hidden animate-scanlines w-[90vw] sm:w-[500px] z-50",
          isOpen && "block"
        )}
        style={{
          background: "linear-gradient(to top, #000000, #000000, #333333, #333333)",
          backgroundSize: "100% 3px",
        }}
      >
        <div className="relative">
          <div className="p-4">
            <div>
              <GlitchText text="⚠️Alert" className="text-4xl font-vt323 font-bold pt-2" />
            </div>
            <button
              onClick={onClose}
              className="absolute top-2 right-2 p-1 rounded-full cursor-pointer transform hover:rotate-180 transition-transform duration-500 hover:bg-brand-tertiary"
              aria-label="Close modal"
            >
              <X className="size-4 stroke-text-light" />
            </button>
            <div className="mt-4 font-sans font-semibold pb-2 pt-3 text-text-light">{content}</div>
          </div>
        </div>
      </div>
    </>
  );
}