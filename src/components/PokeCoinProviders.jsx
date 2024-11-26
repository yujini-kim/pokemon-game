"use client";

import { createContext, useState, useEffect } from 'react';

export const CoinContext = createContext();

export function CoinProvider({ children }) {
  const [coin, setCoin] = useState(null); // 초기값을 null로 설정

  useEffect(() => {
    const savedCoin = localStorage.getItem('coin');
    const parsedCoin = Number(savedCoin);
    setCoin(!isNaN(parsedCoin) ? parsedCoin : 0); // NaN 체크
  }, []);

  useEffect(() => {
    if (coin !== null) {
      localStorage.setItem('coin', coin);
    }
  }, [coin]);

  if (coin === null) {
    // 로딩 상태 처리
    return null;
  }

  return (
    <CoinContext.Provider value={{ coin, setCoin }}>
      {children}
    </CoinContext.Provider>
  );
}