"use client";

import { useState, useEffect } from 'react';

export default function Countdown() {
  const [time, setTime] = useState(10);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    if (time <= 0) {
      setTime('끝이다!!');
    }
  }, [time]);

  return (
    <div id="countdown" className="CenteredFlex mt-4 text-2xl font-bold">
      {time}초 남았다!!!
    </div>
  );
}