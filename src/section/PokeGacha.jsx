"use client";

import { useState, useMemo, useContext, Suspense } from "react";
import { db, storage, auth } from "@/lib/firebase";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "@/lib/PokemonApi";
import { CoinContext } from "../components/PokeCoinProviders";
import PokeGachaCardSkeleton from "@components/PokeGachaCardSkeleton";
import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const LazyPokeGachaCard = React.lazy(
  () => import("../components/PokeGachaCard"),
);

export default function PokeGacha() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const { coin, setCoin } = useContext(CoinContext); // 코인 상태 가져오기

  const { data: pokemonList = [] } = useQuery({
    queryKey: ["pokemon"],
    queryFn: getPokemonList,
  });

  // 랭크를 할당하는 함수
  const assignRandomRank = (pokemon) => {
    const { totalBaseStat } = pokemon;

    if (totalBaseStat > 0 && totalBaseStat < 400) {
      return "C";
    } else if (totalBaseStat >= 400 && totalBaseStat < 500) {
      return "B";
    } else if (totalBaseStat >= 500 && totalBaseStat < 600) {
      return "A";
    } else if (totalBaseStat >= 600) {
      return "S";
    } else {
      return "R";
    }
  };

  // useMemo를 사용하여 랭크별 포켓몬 리스트를 분류합니다.
  const { rankC, rankB, rankA, rankS, rankR } = useMemo(() => {
    const rankC = [];
    const rankB = [];
    const rankA = [];
    const rankS = [];
    const rankR = [...pokemonList]; // R 랭크는 모든 포켓몬을 포함

    pokemonList.forEach((pokemon) => {
      const rank = assignRandomRank(pokemon);
      pokemon.rank = rank; // 포켓몬 객체에 랭크 할당 (선택 사항)

      if (rank === "C") {
        rankC.push(pokemon);
      } else if (rank === "B") {
        rankB.push(pokemon);
      } else if (rank === "A") {
        rankA.push(pokemon);
      } else if (rank === "S") {
        rankS.push(pokemon);
      }
      // R 랭크는 모든 포켓몬을 포함하므로 별도 처리 필요 없음
    });

    return { rankC, rankB, rankA, rankS, rankR };
  }, [pokemonList]);

  // 랭크별 코인 비용 정의
  const rankCoinCost = {
    C: 5,
    B: 10,
    A: 20,
    S: 30,
    R: 50,
  };

  // 가챠 카드 클릭 시 호출되는 핸들러
  const handleGachaClick = async (rank) => {
    const user = auth.currentUser;
    if (!user) {
      alert("로그인이 필요합니다.");
      return;
    }
    const cost = rankCoinCost[rank]; // 해당 랭크의 코인 비용

    // 충분한 코인인지 확인
    if (coin < cost) {
      alert("코인이 부족합니다!");
      return;
    }

    // 코인 차감
    setCoin(coin - cost);

    let selectedList = [];

    switch (rank) {
      case "C":
        selectedList = rankC;
        break;
      case "B":
        selectedList = rankB;
        break;
      case "A":
        selectedList = rankA;
        break;
      case "S":
        selectedList = rankS;
        break;
      case "R":
        selectedList = rankR;
        break;
      default:
        selectedList = [];
    }

    // 선택된 리스트에서 랜덤 포켓몬 선택
    const randomIndex = Math.floor(Math.random() * selectedList.length);
    const randomPokemon = selectedList[randomIndex];
    setSelectedPokemon(randomPokemon);

    try {
      await addDoc(collection(db, "myPokemon"), {
        selectedPokemon: randomPokemon,
        createdAt: Date.now(),
        username: user.displayName, // user 정보를 올바르게 가져와야 함
        userId: user.uid, // user 정보를 올바르게 가져와야 함
      });
    } catch (error) {
      console.error("Firestore 저장 에러: ", error);
    }
  };

  // 상세 정보 UI 닫기 핸들러
  const closeSelectedPokemon = () => {
    setSelectedPokemon(null);
  };

  return (
    <>
      {/* 가챠 카드 렌더링 */}
      <div
        className="flex flex-col items-center justify-center gap-y-2 mt-14
        tablet:flex-row gap-2 tablet:mt-36 desktop:mt-52 desktop:gap-3"
      >
        <div className="flex gap-2 desktop:gap-3">
          <Suspense fallback={<PokeGachaCardSkeleton />}>
            <LazyPokeGachaCard
              onClick={() => handleGachaClick("C")}
              id="C"
              coin={5} // 숫자로 전달
              ballImg={"ball"}
              rank={"C"}
            />
          </Suspense>

          <Suspense fallback={<PokeGachaCardSkeleton />}>
            <LazyPokeGachaCard
              onClick={() => handleGachaClick("B")}
              id="B"
              coin={10} // 숫자로 전달
              ballImg={"슈퍼볼"}
              rank={"B"}
            />
          </Suspense>
          <Suspense fallback={<PokeGachaCardSkeleton />}>
            <LazyPokeGachaCard
              onClick={() => handleGachaClick("A")}
              id="A"
              coin={20} // 숫자로 전달
              ballImg={"하이퍼볼"}
              rank={"A"}
            />
          </Suspense>
        </div>

        <div className="flex gap-2 desktop:gap-3">
          <Suspense fallback={<PokeGachaCardSkeleton />}>
            <LazyPokeGachaCard
              onClick={() => handleGachaClick("S")}
              id="S"
              coin={30} // 숫자로 전달
              ballImg={"마스터볼"}
              rank={"S"}
            />
          </Suspense>
          <Suspense fallback={<PokeGachaCardSkeleton />}>
            <LazyPokeGachaCard
              onClick={() => handleGachaClick("R")}
              id="R"
              coin={50} // 숫자로 전달
              ballImg={"랜덤볼"}
              rank={"R"}
            />
          </Suspense>
        </div>
      </div>

      {/* 선택된 포켓몬 상세 정보 렌더링 */}
      {selectedPokemon && (
        <>
          <div
            key={uuidv4()}
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-2
            bg-[#FEEDEF] border border-[#1C1D1F] p-4 px-6 rounded-xl shadow-lg flex flex-col items-center z-50
            tablet:px-12 tablet:space-y-4"
          >
            <div
              className="w-auto h-auto px-3 py-1 bg-white border border-[#1C1D1F] rounded-xl
              flex flex-col items-center justify-center mb-2
              tablet:px-4"
            >
              <h2
                className="font-bold text-sm
              tablet:text-base"
              >
                {selectedPokemon.number}
              </h2>
              <h2
                className="text-xs
              tablet:text-sm"
              >
                {selectedPokemon.name}
              </h2>
            </div>

            <Image
              width={112}
              height={112}
              src={selectedPokemon.image}
              alt={selectedPokemon.name}
              className="mb-2
              tablet:w-36 tablet:h-36"
            />
            <div className="flex flex-col items-center">
              <p className="text-xs tablet:text-base">
                타입: {selectedPokemon.type1}
                {selectedPokemon.type2 && ` / ${selectedPokemon.type2}`}
              </p>
              <p className="text-xs tablet:text-base">
                총 종족값: {selectedPokemon.totalBaseStat}
              </p>
            </div>

            {/* 닫기 버튼 */}
            <button
              onClick={closeSelectedPokemon}
              className="w-auto h-auto p-2 mt-4 bg-[#F5F5F5] border border-[#1C1D1F] rounded-xl
              flex flex-col items-center justify-center text-xs
              tablet:text-base"
            >
              닫기
            </button>
          </div>

          {/* 배경 클릭 시 닫기 */}
          <div
            className="fixed inset-0 w-screen h-screen bg-black opacity-10 z-40"
            onClick={closeSelectedPokemon}
          ></div>
        </>
      )}
    </>
  );
}
