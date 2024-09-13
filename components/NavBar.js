"use client";

import Link from 'next/link'
import Image from 'next/image';
import '@styles/globals.css';
import { useCoin } from '../context/CoinContext';

export default function NavBar() {
  const { coin } = useCoin();
  return (
    
    <div className="flex justify-between mt-10 ml-4 tablet:justify-between tablet:mt-16 tablet:ml-8 desktop:space-x-[800px] desktop:mt-24 desktop:ml-8">

      <Link href="/">
        <div className="bg-[#00FFF2] h-8 w-8 rounded-3xl CenteredFlex
        tablet:w-20 tablet:h-12 desktop:w-20 desktop:h-12">
          <Image src="/img/home.webp" alt="Home" width={48} height={48} 
          className="w-6 h-6 tablet:w-12 tablet:h-12 desktop:w-12 desktop:h-12" />
        </div>
      </Link>

      <div className="flex space-x-2 tablet:space-x-6">

        <Link href="/project/poketmon">
          <div className="NavBar">
            <Image src="/img/ball.webp" alt="Ball" width={48} height={48} className="NavBarImg" />
            <span className="NavBarText">뽑기</span>
          </div>
        </Link>

        <Link href="/project/poketmon/book">
          <div className="NavBar">
            <Image src="/img/book.webp" alt="Book" width={48} height={48} className="NavBarImg" />
            <span className="NavBarText">도감</span>
          </div>
        </Link>

        <div className="NavBar">
          <Image src="/img/coin.webp" alt="Coin" width={48} height={48} className="NavBarImg" />
          <span className="NavBarText">{coin}</span>
        </div>
      </div>
    </div>
  );
}