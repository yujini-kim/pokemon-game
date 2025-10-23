'use client'

import { toast } from '@/hooks/use-toast'
import { auth } from '@/lib/firebase'
import { FirebaseError } from 'firebase/app'
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/navigation'

const providers = {
  github: new GithubAuthProvider(),
  google: new GoogleAuthProvider(),
} as const

export type ProviderKey = keyof typeof providers

export async function handleSocialLogin(providerKey: ProviderKey) {
  const router = useRouter()
  try {
    const provider = providers[providerKey]
    await signInWithPopup(auth, provider)
    toast({ title: `${providerKey} 로그인 성공` })
    router.push('/')
    return true
  } catch (e) {
    if (e instanceof FirebaseError) {
      toast({ title: `${providerKey} 로그인 실패`, description: e.message })
    }
    return false
  }
}
