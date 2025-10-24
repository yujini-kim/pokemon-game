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
        console.log('로그인 됨')
      } else {
        clearUser()
        console.log('로그아웃 됨')
      }
    })

    return () => unsubscribe()
  }, [setUser, clearUser])
}
