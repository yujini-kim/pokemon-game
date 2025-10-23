'use client'

import { Spinner } from '@/components/ui/spinner'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { handleSocialLogin, ProviderKey } from '../lib/handle-social-login'

const SOCIAL_PROVIDERS: { key: ProviderKey; icon: string; label: string }[] = [
  { key: 'github', icon: '/img/icon_git.webp', label: 'GitHub' },
  { key: 'google', icon: '/img/icon_google.webp', label: 'Google' },
]

export default function SocialLoginButton() {
  const router = useRouter()
  const [loading, setLoading] = useState<ProviderKey | null>(null)

  const handleSocialLoginClick = async (providerKey: ProviderKey) => {
    if (loading) return
    setLoading(providerKey)
    try {
      const success = await handleSocialLogin(providerKey)
      if (success) router.push('/')
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="mt-4 flex flex-row gap-2">
      {SOCIAL_PROVIDERS.map(({ key, icon, label }) => (
        <button
          key={key}
          type="button"
          disabled={!!loading}
          onClick={() => handleSocialLoginClick(key)}
          aria-label={`${label} 로그인`}
          className="flex size-8 items-center justify-center"
        >
          {loading === key ? (
            <Spinner size="sm" />
          ) : (
            <Image src={icon} width={32} height={32} alt={`${label} icon`} />
          )}
        </button>
      ))}
    </div>
  )
}
