import Image from 'next/image';
import Link from 'next/link';
import '../styles/globals.css';

export default function NavBar() {
  return (
    <div className="flex justify-between mt-10 ml-4 tablet:justify-between tablet:mt-16 tablet:ml-8 desktop:space-x-[800px] desktop:mt-24 desktop:ml-8">
      
      <Link href="/">
        <div className="bg-[#00FFF2] h-8 w-8 rounded-3xl CenteredFlex
        tablet:w-20 tablet:h-12 desktop:w-20 desktop:h-12">
          <Image src="/img/home.png" alt="Home" width={48} height={48} 
          className="w-6 h-6 tablet:w-12 tablet:h-12 desktop:w-12 desktop:h-12" />
        </div>
      </Link>

      <div className="flex space-x-2 tablet:space-x-6">
        
        <Link href="/project/poketmon">
          <div className="NavBar">
            <Image src="/img/ball.png" alt="Ball" width={48} height={48} className="NavBarImg" />
            <span className="NavBarText">뽑기</span>
          </div>
        </Link>

        <Link href="/project/poketmon/book">
          <div className="NavBar">
            <Image src="/img/book.png" alt="Book" width={48} height={48} className="NavBarImg" />
            <span className="NavBarText">도감</span>
          </div>
        </Link>

        <div className="NavBar">
          <Image src="/img/coin.png" alt="Coin" width={48} height={48} className="NavBarImg" />
          <span className="NavBarText">100</span>
        </div>
      </div>
    </div>
  );
}