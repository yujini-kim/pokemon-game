"use client";

import { useState, useEffect } from 'react';

export default function Countdown() {
  const [time, setTime] = useState(10);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    let countdownInterval;

    if (isCounting && time > 0) {
      countdownInterval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time <= 0 && isCounting) {
      clearInterval(countdownInterval); // 카운트다운이 끝나면 타이머 멈춤
      setIsCounting(false); // 카운트다운 상태 종료
    }

    return () => clearInterval(countdownInterval); // 컴포넌트 언마운트 시 타이머 정리
  }, [isCounting, time]);

  const handleRestart = () => {
    setTime(10); // 10초로 초기화
    setIsCounting(true); // 카운트다운 재개
  };

  return (
    <div className="CenteredFlex mt-4 text-2xl font-bold">
      {isCounting && <div>{time}초 남았다!!!</div>} {/* 카운트다운 중일 때만 텍스트 표시 */}
      {!isCounting && <Restart onClick={handleRestart} />} {/* 카운트다운 끝나면 Restart 버튼만 표시 */}
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