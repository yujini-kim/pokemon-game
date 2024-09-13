"use client";

import { useState, useEffect } from 'react';
import Button from './Button';

export default function Countdown({ initialTime = 30 }) {
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
  };

  return (
    <div className="CenteredFlex mt-4 text-2xl font-bold">
      {isCounting && <div>{time}초 남았다!!!</div>} 
      {!isCounting && <Button onClick={handleRestart} text="다시시작" />} 
    </div>
  );
}
