'use client'

import { auth, db } from '@/lib/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { createContext, ReactNode, useEffect, useState } from 'react'

export const CoinContext = createContext(0)

export function CoinProvider({ children }: { children: ReactNode }) {
  const [coin, setCoin] = useState(0)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u)
    })
    return () => unsubscribe()
  }, [])

  const fetchCoin = async ({ userId }: { userId: string }) => {
    const coinQuery = query(collection(db, 'Coin'), where('userId', '==', userId))
    const snapshot = await getDocs(coinQuery)
    if (snapshot.empty) {
      setCoin(0)
    } else {
      const fetchedCoin = snapshot.docs[0].data().coin
      setCoin(fetchedCoin)
    }
  }

  useEffect(() => {
    if (user) {
      fetchCoin(user.uid)
    }
  }, [user])

  return <CoinContext.Provider value={{ coin, setCoin }}>{children}</CoinContext.Provider>
}
