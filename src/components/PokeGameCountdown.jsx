"use client";

import { useState, useEffect } from "react";

export default function PokeGameCountdown({ initialTime = 15, selectedPokemon, resetGame }) {
  const [time, setTime] = useState(initialTime);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    let countdownInterval;

    if (isCounting && time > 0) {
      countdownInterval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time <= 0 && isCounting) {
      clearInterval(countdownInterval);
      setIsCounting(false);
    }

    return () => clearInterval(countdownInterval);
  }, [isCounting, time]);

  const handleRestart = () => {
    setTime(initialTime);
    setIsCounting(true);
    resetGame();
  };

  return (
    <div className="mt-4 text-2xl font-bold">
      {isCounting && <div>{time}초 남았다!!!</div>}

      {!isCounting && (
        <div>
          {selectedPokemon ? (
            <button
              className="bg-[#BC99FF] w-24 h-10 
                    border border-[#1C1D1F] rounded-3xl font-bold text-base"
              onClick={handleRestart}
            >
              다시시작
            </button>
          ) : (
            <button
            className="bg-[#BC99FF] w-24 h-10 
                  border border-[#1C1D1F] rounded-3xl font-bold text-base"
            onClick={handleRestart}
          >
            다시시작
          </button>
          )}
        </div>
      )}
    </div>
  );
}