'use client'

import { auth } from '@/lib/firebase'
import { useUserStore } from '@/store/use-user-store'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

export function useAuthObserver() {
  const { setUser, clearUser } = useUserStore()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        clearUser()
      }
    })

    return () => unsubscribe()
  }, [setUser, clearUser])
}
