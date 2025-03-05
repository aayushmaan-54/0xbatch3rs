"use client";
import { useRef, useState } from "react";
import Icon from "@/assets/icons";
import warningData from "@/data/light-mode-warning-data";
import GlitchText from "../glitch-text/glitch-text";
import useOnClickOutside from "@/hooks/use-on-click-outside";

export default function LightModeWarning() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedWarning, setSelectedWarning] = useState<string>("");
  const modalRef = useRef<HTMLDivElement>(null);

  const handleToggleMode = () => {
    const randomIndex = Math.floor(Math.random() * warningData.length);

    setIsModalOpen(true);
    setSelectedWarning(warningData[randomIndex]);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useOnClickOutside(modalRef, () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  });

  return (
    <>
      <button className="cursor-pointer" onClick={handleToggleMode}>
        <Icon.DarkMode className="size-5 sm:size-7" />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center">
          <aside 
            ref={modalRef} 
            className="relative bg-secondary p-3 pb-4 rounded-lg w-[90vw] sm:w-[400px] sm:pl-4"
          >
            {/* CRT Lines Effect */}
            <div className="absolute top-0 left-0 size-full pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/[0.15] bg-[size:100%_4px] z-10 rounded-lg" />
            <button 
              onClick={handleCloseModal} 
              className="absolute top-2 right-2 z-50 p-2 -m-2 cursor-pointer"
            >
              <Icon.X className="size-5 fill-text-light z-50" />
            </button>
            <div className="mt-1 relative z-20 flex flex-col font-medium">
              <GlitchText 
                text="⚠️ Alert"
                className="font-[vt323] text-3xl font-bold mb-2"
              />
              {selectedWarning}
            </div>
          </aside>
        </div>
      )}
    </>
  );
}