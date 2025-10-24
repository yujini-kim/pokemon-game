'use client'

import { useCoinStore } from '@/store/use-coin-store'
import Image from 'next/image'

export default function Navbar() {
  const coin = useCoinStore((state) => state.coin)
  return (
    <div className="fixed top-0 mb-10 flex h-20 w-full items-center bg-primary px-4 text-sm text-white">
      <li className="flex cursor-pointer items-center gap-1 hover:opacity-80">
        <Image
          width={16}
          height={16}
          alt="coin icon"
          src="/img/icon_coin.webp"
          className="tablet:size-6"
        />
        <div>{coin}</div>
      </li>
      <ul className="ml-auto flex cursor-pointer items-center justify-center gap-4">
        <li className="hover:opacity-80">전체도감</li>
        <li className="hover:opacity-80">내도감</li>
        <li className="hover:opacity-80">게임</li>
        <li className="hover:opacity-80">로그인</li>
      </ul>
    </div>
  )
}
