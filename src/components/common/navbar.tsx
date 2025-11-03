'use client'

import { toast } from '@/hooks'
import { auth, db } from '@/lib/firebase'
import { useCoinStore, useUserStore } from '@/store'

import { signOut } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

export default function Navbar() {
  const { user } = useUserStore()
  const { coin, setCoin } = useCoinStore()
  const router = useRouter()
  const handleLogout = () => {
    signOut(auth)
    router.push('/auth/login')
    toast({ title: '로그아웃 성공' })
  }
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
    if (!user) {
      setCoin(0)
      return
    }

    fetchCoin({ userId: user.uid })
  }, [user, coin])

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
          <li className="grid size-7 cursor-pointer place-items-center rounded-full bg-white hover:opacity-80">
            <Popover>
              <PopoverTrigger asChild>
                <Image src="/img/avatar.svg" alt="avatar" width={24} height={24} />
              </PopoverTrigger>

              <PopoverContent
                side="bottom"
                align="start"
                sideOffset={10}
                className="w-fit rounded-md border border-gray-200 bg-white p-2 text-xs shadow-md"
              >
                <p className="rounded px-2 py-1 text-center text-black">
                  {user.displayName ?? '익명'} 님
                </p>
                <p className="cursor-pointer rounded px-2 py-1 text-center text-black hover:bg-gray-100">
                  프로필 변경
                </p>
                <p
                  onClick={(e) => {
                    e.stopPropagation()
                    handleLogout()
                  }}
                  className="cursor-pointer rounded px-2 py-1 text-center text-black hover:bg-gray-100"
                >
                  로그아웃
                </p>
              </PopoverContent>
            </Popover>
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
