import { toast } from '@/hooks/use-toast'
import { auth } from '@/lib/firebase'
import { FirebaseError } from 'firebase/app'
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const providers = {
  github: new GithubAuthProvider(),
  google: new GoogleAuthProvider(),
} as const

export type ProviderKey = keyof typeof providers

export async function handleSocialLogin(providerKey: ProviderKey) {
  try {
    const provider = providers[providerKey]
    await signInWithPopup(auth, provider)
    toast({ title: `${providerKey} 로그인 성공` })
    return true
  } catch (e) {
    if (e instanceof FirebaseError) {
      toast({ title: `${providerKey} 로그인 실패`, description: e.message })
    }
    return false
  }
}
