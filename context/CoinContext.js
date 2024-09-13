"use client";

import { createContext, useState, useContext, useEffect } from 'react';

export const CoinContext = createContext();


export function CoinProvider({ children }) {
  const [coin, setCoin] = useState(null); 


  useEffect(() => {
    const savedCoin = localStorage.getItem('coin');
    setCoin(savedCoin ? Number(savedCoin) : 0);
  }, []);


  useEffect(() => {
    if (coin !== null) {
      localStorage.setItem('coin', coin);
    }
  }, [coin]);

  if (coin === null) return null;

  return (
    <CoinContext.Provider value={{ coin, setCoin }}>
      {children}
    </CoinContext.Provider>
  );
}


export function useCoin() {
  const context = useContext(CoinContext);
  if (!context) {
    throw new Error("useCoin must be used within a CoinProvider");
  }
  return context;
}