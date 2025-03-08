"use client";
import Icon from "@/assets/icons";
import { useState, useRef, useEffect } from "react";

export default function Accordion({
  question,
  answer
}: {
  question: string;
  answer: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded]);

  const accordionClickHandler = () => {
    setIsExpanded((prev) => !prev);
  }

  return (
    <div className="bg-gradient-to-b from-transparent from-10% via-accent-green-dark/40 via-100% rounded-md overflow-hidden transition-all duration-300 border border-accent-green-light py-3 w-[85vw] font-medium text-xs sm:text-base sm:w-[600px] md:w-[700px] px-2">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={accordionClickHandler}
      >
        <p className="text-accent-green-light">{question}</p>
        <Icon.ChevronRight 
          className={`stroke-accent-green-light size-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} 
        />
      </div>

      <div 
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: `${contentHeight}px` }}
      >
        <p className="px-3 pt-2">{answer}</p>
      </div>
    </div>
  );
}