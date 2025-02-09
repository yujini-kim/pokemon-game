"use client";

import { db, auth } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { createContext, useState, useEffect } from "react";

export const CoinContext = createContext();

export function CoinProvider({ children }) {
  const [coin, setCoin] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const fetchCoin = async (userId) => {
    const coinQuery = query(
      collection(db, "Coin"),
      where("userId", "==", userId)
    );
    const snapshot = await getDocs(coinQuery);
    if (snapshot.empty) {
      setCoin(0);
    } else {
      const fetchedCoin = snapshot.docs[0].data().coin;
      setCoin(fetchedCoin);
    }
  };

  useEffect(() => {
    if (user) {
      fetchCoin(user.uid);
    }
  }, [user]);

  if (coin === null) {
    return null;
  }

  return (
    <CoinContext.Provider value={{ coin, setCoin }}>
      {children}
    </CoinContext.Provider>
  );
}
