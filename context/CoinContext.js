"use client"

import { createContext, useState, useContext, useEffect } from 'react';

export const CoinContext = createContext();

export function CoinProvider({ children }) {
  const [coin, setCoin] = useState(null); // 초기값을 null로 설정

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCoin = localStorage.getItem('coin');
      setCoin(savedCoin ? JSON.parse(savedCoin) : 0); // localStorage에서 값을 불러오거나 0으로 초기화
    }
  }, []);

  useEffect(() => {
    if (coin !== null && typeof window !== "undefined") {
      localStorage.setItem('coin', JSON.stringify(coin));
    }
  }, [coin]);

  if (coin === null) return null; // coin 값이 불러와질 때까지 컴포넌트를 렌더링하지 않음

  return (
    <CoinContext.Provider value={{ coin, setCoin }}>
      {children}
    </CoinContext.Provider>
  );
}

export function useCoin() {
  const context = useContext(CoinContext);
  if (!context) {
    throw new Error('useCoin must be used within a CoinProvider');
  }
  return context;
}