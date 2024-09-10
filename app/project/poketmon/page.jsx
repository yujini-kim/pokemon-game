import NavBar from '@components/NavBar';
import MainContent from '@components/MainContent';
import Image from 'next/image';
import Link from 'next/link'
import {CoinProvider} from '@context/CoinContext'

export default function Home() {
  return (
    <div>
      <CoinProvider>
          <NavBar />
          <MainContent />
          <Link href="poketmon/game" className="mt-24 CenteredFlex">
            <div className="CenteredFlex w-60 h-20 bg-[#00FFF2] rounded-3xl desktop:w-96">
              <span className="text-2xl text-black font-extrabold 
              desktop:text-4xl">코인 모으러 가기</span>
            </div>
          </Link>
        </CoinProvider>
    </div>
  );
}