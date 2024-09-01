"use client";

import Button from "@/_components/button";
import React, { useState } from "react";
import Confetti from "react-confetti";

export function useConfettiAnimation() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleButtonClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 9000); // Stop confetti after 9 seconds
  };

  return {
    showConfetti,
    handleButtonClick,
  };
}

export const ConfettiAnimation = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleButtonClick = () => {
    setShowConfetti(true);
    // setTimeout(() => setShowConfetti(false), 3000); // Stop confetti after 3 seconds
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>Celebrate!</Button>
      {showConfetti && (
        <div className="relative">
          <Confetti />
        </div>
      )}
    </div>
  );
};
