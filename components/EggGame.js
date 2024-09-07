"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function EggGame() {
  const [clickCount, setClickCount] = useState(0);
  const [eggImage, setEggImage] = useState('/img/알1.png');
  const [isBalloonVisible, setBalloonVisibility] = useState(false);

  const handleEggClick = () => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    if (newClickCount === 10) {
      setEggImage('/img/알2.png');
    } else if (newClickCount === 20) {
      setEggImage('/img/알3.png');
    } else if (newClickCount === 30) {
      setEggImage('/img/알4.png');
    }
  };

  const toggleBalloon = () => {
    setBalloonVisibility(!isBalloonVisible);
  };

  return (
    <div className="desktop:flex desktop:justify-center desktop:space-x-40">
      <div className="relative CenteredFlex mt-4" onClick={handleEggClick}>
        {/* 알 이미지 */}
        <div className="relative w-[200px] h-80 z-10">
          <Image id="알이미지" src={eggImage} alt="Egg" width={200} height={320} className="absolute top-10 left-0 w-full h-full" />
          <Image src="/img/망치.png" alt="Hammer" width={160} height={120} className="absolute top-0 left-32 w-4/5 h-1/2" />
        </div>


        {isBalloonVisible && (
          <div className="absolute w-[310px] h-[320px] bg-[#FFDD00] rounded-xl p-4 z-20 flex justify-center items-center text-center mt-4 
          desktop:mt-0">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#FFDD00]"></div>
            <p className="text-black font-bold">
              30초 안에 망치로 알을 후드려 패면 포켓몬이 나온다!!!<br />
              30초 안에 못 후드려 패면 포켓몬은 없다!!!<br />
              그리고 돈도 없다!!!<br />
              망치로 후드려 패서 나온 포켓몬을 우리에게 주면 포켓코인을 주겠다!!!<br />
              피카츄를 제일 값비싸게 쳐주도록 하지!!
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex justify-center mt-8 desktop:mb-1">
          <div id="로켓단" className="w-40 h-60 desktop:w-96 desktop:h-[604px]">
            <Image src="/img/로켓단.png" alt="Rocket Team" width={384} height={604} />
          </div>
        </div>

        {/* 게임설명 버튼 */}
        <div id="게임설명" className="flex justify-center items-center mt-4 cursor-pointer" onClick={toggleBalloon}>
          <div className="w-20 h-9 bg-[#00FFF2] rounded-3xl flex justify-center items-center desktop:w-32 desktop:h-11">
            <span className="font-bold text-sm desktop:text-2xl">게임설명</span>
          </div>
        </div>
      </div>
    </div>
  );
}