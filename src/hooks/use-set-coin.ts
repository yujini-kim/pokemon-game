'use client'

import { auth, db } from '@/lib/firebase'
import { useCoinStore } from '@/store/use-coin-store'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect } from 'react'

export default function useSetCoin() {
  const { setCoin, resetCoin } = useCoinStore()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const coinQuery = query(collection(db, 'Coin'), where('userId', '==', user.uid))
        const snapshot = await getDocs(coinQuery)
        if (snapshot.empty) {
          setCoin(0)
        } else {
          const fetchedCoin = snapshot.docs[0].data().coin
          setCoin(fetchedCoin)
        }
      } else {
        resetCoin()
      }
    })
    return () => unsubscribe()
  }, [setCoin, resetCoin])
}
