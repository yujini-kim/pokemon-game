"use client";

import { useState, useContext } from 'react';
import { CoinContext } from '@components/PokeCoinProviders'
import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "@/lib/PokemonApi";

export default function EggGame() {
  const [clickCount, setClickCount] = useState(0);
  const [eggImage, setEggImage] = useState('/img/알1.webp');
  const [isBalloonVisible, setBalloonVisibility] = useState(false);
  const [hammer, setHammer] = useState(false)
  const [isSparkling, setIsSparkling] = useState(false)

  const { setCoin } = useContext(CoinContext); 

  const { data: pokemonList = [] } = useQuery({
    queryKey: ["pokemon"],
    queryFn: getPokemonList,
  });

  const handleEggClick = () => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    if (newClickCount === 10) {
      setEggImage('/img/알2.webp');
    } else if (newClickCount === 20) {
      setEggImage('/img/알3.webp');
    } else if (newClickCount === 30) {
      setEggImage('/img/알4.webp');
      setCoin((prevCoin) => (prevCoin + 10)); 
    }
  };

  const toggleBalloon = () => {
    setBalloonVisibility(!isBalloonVisible);
  };

  const Click = () => {
    setHammer(!hammer)
    setIsSparkling(!isSparkling)
  }

  
  return (
    <div className="flex flex-col items-center justify-center gap-y-6 desktop:space-x-40">     
        <div className="relative w-[200px] h-80 z-10
        " onClick={handleEggClick}>
        <img
            onClick={Click}
            id="알이미지"
            src={eggImage}
            alt="Egg"
            className={`absolute top-10 left-0 w-48 h-72 ${isSparkling ? 'animate-shake' : ''}`} 
          />
          <img onClick={Click} 
            src={hammer ? "/img/망치2.webp" : "/img/망치.webp"} alt="Hammer"
            className="absolute top-0 left-32 w-40 h-40" />
        </div>

        {isBalloonVisible && (
          <div className="absolute w-72 h-72 bg-[#E0FE6A] border 
          rounded-lg p-4 z-20 flex justify-center items-center text-center">
            <p className="text-black">
              30초 안에 망치로 알을 후드려 패면 포켓몬이 나온다!!!<br />
              30초 안에 못 후드려 패면 포켓몬은 없다!!!<br />
              그리고 돈도 없다!!!<br />
              망치로 후드려 패서 나온 포켓몬을 우리에게 주면 포켓코인을 주겠다!!!<br />
            </p>
          </div>
        )}
  
     
        <div className="flex flex-col justify-center items-center gap-y-4">
          <div id="로켓단" className="w-40 h-60 desktop:w-96 desktop:h-[604px]">
            <img src="/img/로켓단.webp"  />
          </div> 
            <button 
                className='bg-[#BC99FF] w-28 h-12 
                border border-[#1C1D1F] rounded-3xl font-bold text-lg' 
                onClick={toggleBalloon} 
                >게임설명
            </button>               
        </div>


    </div>
  );
}