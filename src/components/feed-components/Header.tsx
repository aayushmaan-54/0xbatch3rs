"use client";
import { Bell, TerminalLogo } from "@/app/assets/images/svg";
import React, { useState, useRef, useEffect } from "react";
import GlitchText from "../glitch-text/glitch-text";
import LightModeWarning from "../light-mode-warning/light-mode-warning";

const tabs = [
  { id: "Newest", label: "Newest" },
  { id: "Trending", label: "Trending" },
  { id: "Following", label: "Following" },
];


const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeStyles, setActiveStyles] = useState<React.CSSProperties>({});
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);


  useEffect(() => {
    const activeButton = buttonRefs.current.find(
      (ref) => ref?.dataset.id === activeTab
    );
    if (activeButton) {
      setActiveStyles({
        width: `${activeButton.offsetWidth}px`,
        transform: `translateX(${activeButton.offsetLeft}px)`,
      });
    }
  }, [activeTab]);


  return (
    <>
      <header>
        <div className="flex items-center space-x-1">
          <TerminalLogo className="size-8" />
          <GlitchText text="0xbatch3rs" className="text-4xl pl-1 font-bold font-vt323" />
        </div>
          <div className="bg-accent-green-dark/40 border border-accent-green-light w-fit rounded-full px-2 py-2">
            <div className="relative">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  ref={(el) => { buttonRefs.current[index] = el }}
                  data-id={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="text-text-light relative px-5 py-2 rounded-full font-bold text-sm z-10"
                >
                  <span>{tab.label}</span>
                </button>
              ))}
              <div
                className="absolute top-0 bottom-0 rounded-full bg-accent-green -z-10 transition-all duration-300 ease-in-out"
                style={activeStyles}
              />
            </div>
          </div>
          <LightModeWarning />
          <Bell className="text-text-light" />
          <div className="size-12 bg-white rounded-full" />
      </header>
    </>
  );
};

export default Header;