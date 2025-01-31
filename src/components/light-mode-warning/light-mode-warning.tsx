"use client";
import { useState } from "react";
import warningData from "@/data/light-mode-warning-data";
import Modal from "../modal/modal";
import { Sun } from "@/app/assets/images/svg";


export default function LightModeWarning() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const handleSunClick = () => {
    const randomIndex = Math.floor(Math.random() * warningData.length);
    setWarningMessage(warningData[randomIndex]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleSunClick}
        className="p-2 rounded-full transition-colors hover:bg-brand-tertiary"
        aria-label="Toggle light mode"
      >
        <Sun className="size-6 text-white" />
      </button>

      <Modal
        content={warningMessage}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}