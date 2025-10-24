'use client'

import { toast } from '@/hooks'
import { auth } from '@/lib/firebase'
import { useCoinStore, useUserStore } from '@/store'

import { signOut } from 'firebase/auth'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const { user } = useUserStore()
  const coin = useCoinStore((state) => state.coin)
  const router = useRouter()
  const hanldeLogout = () => {
    signOut(auth)
    router.push('/auth/login')
    toast({ title: '로그아웃 성공' })
  }

  return (
    <nav className="fixed top-0 flex h-20 w-full items-center bg-primary px-4 text-sm text-white">
      <Link href="/" className="flex cursor-pointer items-center gap-1 hover:opacity-80">
        <Image
          width={16}
          height={16}
          alt="coin icon"
          src="/img/icon_coin.webp"
          className="tablet:size-6"
        />
        <div>{coin}</div>
      </Link>
      <ul className="ml-auto flex items-center gap-4">
        <li>
          <Link href="/allbook" className="hover:opacity-80">
            전체도감
          </Link>
        </li>
        <li>
          <Link href="/mybook" className="hover:opacity-80">
            내도감
          </Link>
        </li>
        <li>
          <Link href="/game" className="hover:opacity-80">
            게임
          </Link>
        </li>

        {user ? (
          <li onClick={hanldeLogout} className="cursor-pointer hover:opacity-80">
            로그아웃
          </li>
        ) : (
          <li>
            <Link href="/auth/login" className="cursor-pointer hover:opacity-80">
              로그인
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
