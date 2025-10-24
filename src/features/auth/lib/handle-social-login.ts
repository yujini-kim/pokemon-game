'use client'

import { toast } from '@/hooks/use-toast'
import { auth } from '@/lib/firebase'
import { FirebaseError } from 'firebase/app'
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const providers = {
  github: new GithubAuthProvider(),
  google: new GoogleAuthProvider(),
} as const

export type ProviderKey = keyof typeof providers

export function useSocialLogin() {
  const router = useRouter()
  const [loading, setLoading] = useState<ProviderKey | null>(null)

  const handleSocialLogin = async (providerKey: ProviderKey) => {
    setLoading(providerKey)
    try {
      const provider = providers[providerKey]
      await signInWithPopup(auth, provider)
      toast({ title: `${providerKey} 로그인 성공` })
      router.push('/')
    } catch (e) {
      if (e instanceof FirebaseError) {
        toast({ title: `${providerKey} 로그인 실패`, description: e.message })
      } else {
        toast({
          title: `${providerKey} 로그인 실패`,
        })
      }
    } finally {
      setLoading(null)
    }
  }

  return { handleSocialLogin, loading }
}
