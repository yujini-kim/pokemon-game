"use client";

import { useState, useEffect } from 'react';

export default function Countdown() {
  const [time, setTime] = useState(30);
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
    setTime(30); 
    setIsCounting(true); 
  };

  return (
    <div className="CenteredFlex mt-4 text-2xl font-bold">
      {isCounting && <div>{time}초 남았다!!!</div>} 
      {!isCounting && <Restart onClick={handleRestart} />} 
    </div>
  );
}

function Restart({ onClick }) {
  return (
    <div 
      className="CenteredFlex w-20 h-10 bg-[#00FFF2] rounded-3xl desktop:w-36 desktop:h-14 cursor-pointer"
      onClick={onClick}
    >
      <span className="text-base text-black font-extrabold desktop:text-2xl">다시시작</span>
    </div>
  );
}