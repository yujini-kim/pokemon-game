'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { handleSocialLogin, ProviderKey } from './handle-social-login'

export default function SocialLogin() {
  const router = useRouter()

  const onLogin = async (providerKey: ProviderKey) => {
    const success = await handleSocialLogin(providerKey)
    if (success) router.push('/')
  }

  return (
    <div className="mt-4 flex flex-row gap-4">
      <button type="button" onClick={() => onLogin('github')}>
        <Image src="/img/icon_git.webp" width={32} height={32} alt="git icon" />
      </button>
      <button type="button" onClick={() => onLogin('google')}>
        <Image src="/img/icon_google.webp" width={32} height={32} alt="google icon" />
      </button>
    </div>
  )
}
