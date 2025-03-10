"use client";

import Image from "next/image";
import { useState } from "react";

export default function PokeGameExp() {
  const [isBalloonVisible, setBalloonVisibility] = useState(false);

  const toggleBalloon = () => {
    setBalloonVisibility(!isBalloonVisible);
  };
  return (
    <>
      {isBalloonVisible && (
        <>
          <div
            className="fixed inset-0 w-screen h-screen bg-black opacity-50 z-40"
            onClick={toggleBalloon}
          ></div>
          <div
            className="absolute w-72 bg-[#FEEDEF] 
                rounded-lg px-4 pt-8 pb-4 flex flex-col justify-center items-center text-center z-50
                 "
          >
            <p className="text-black text-xs tablet:text-sm">
              15초 안에 망치로 알을 후드려 패면 포켓몬이 나온다!!!
              <br />
              15초 안에 후드려패지 못하면 포켓몬은 없다!!!
              <br />
              그리고 돈도 없다!!!
              <br />
              망치로 후드려 패서 나온 포켓몬을 우리에게 주면 포켓코인을
              주겠다!!!
              <br />
            </p>
            <button
              onClick={toggleBalloon}
              className="bg-white p-2 rounded-lg border border-black mt-8 text-sm"
            >
              닫기
            </button>
          </div>
        </>
      )}

      <div
        className="flex flex-col justify-center items-center gap-y-6
            tablet:gap-y-10"
      >
        <Image
          width={144}
          height={208}
          className=""
          src="/img/로켓단.webp"
          alt="로켓단"
        />

        <button
          className="bg-[#FEEDEF] w-24 h-10 
                border border-[#1C1D1F] rounded-3xl font-bold
                tablet:w-28 tablet:h-12 tablet:text-lg"
          onClick={toggleBalloon}
        >
          게임설명
        </button>
      </div>
    </>
  );
}
