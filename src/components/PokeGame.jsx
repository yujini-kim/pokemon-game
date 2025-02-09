"use client";

import { useState, useEffect, useContext } from "react";
import { CoinContext } from "./PokeCoinProviders";
import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "@/lib/PokemonApi";
import { auth, db } from "@/lib/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import PokeGameExp from "./PokeGameExp";

export default function PokeGame({}) {
  const [hammer, setHammer] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [eggImage, setEggImage] = useState("/img/알1.webp");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [time, setTime] = useState(15);
  const [isCounting, setIsCounting] = useState(true);
  const user = auth.currentUser;
  const { data: pokemonList = [] } = useQuery({
    queryKey: ["pokemon"],
    queryFn: getPokemonList,
  });

  const { coin, setCoin } = useContext(CoinContext);

  const clickHammer = () => {
    if (!user) {
      console.error("로그인이 필요합니다.");
      return;
    }
    setHammer((prevHammer) => !prevHammer);
    setClickCount((pre) => pre + 1);
  };
  const handleRestart = () => {
    setTime(15);
    setIsCounting(true);
    resetGame();
  };

  useEffect(() => {
    let countdownInterval;

    if (isCounting && time > 0) {
      countdownInterval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time <= 0 && isCounting) {
      clearInterval(countdownInterval);
      setIsCounting(false);
    }

    return () => clearInterval(countdownInterval);
  }, [isCounting, time]);

  useEffect(() => {
    if (clickCount === 10) {
      setEggImage("/img/알2.webp");
    } else if (clickCount === 20) {
      setEggImage("/img/알3.webp");
    } else if (clickCount === 30) {
      setEggImage("/img/알4.webp");
    }
  }, [clickCount]);

  useEffect(() => {
    if (clickCount === 31 && pokemonList.length > 0) {
      const randomIndex = Math.floor(Math.random() * pokemonList.length);
      const pokemon = pokemonList[randomIndex];
      setSelectedPokemon(pokemon);
    }
  }, [clickCount, pokemonList]);

  useEffect(() => {
    if (selectedPokemon) {
      const { totalBaseStat } = selectedPokemon;
      let addition = 0;
      if (totalBaseStat > 0 && totalBaseStat < 300) {
        addition = 10;
      } else if (totalBaseStat >= 300 && totalBaseStat < 400) {
        addition = 20;
      } else if (totalBaseStat >= 400 && totalBaseStat < 500) {
        addition = 30;
      } else if (totalBaseStat >= 500 && totalBaseStat < 600) {
        addition = 40;
      } else if (totalBaseStat >= 600) {
        addition = 50;
      }
      setCoin((prevCoin) => {
        const newCoin = prevCoin + addition;
        addDoc(collection(db, "Coin"), {
          coin: newCoin,
          createdAt: Date.now(),
          username: user.displayName,
          userId: user.uid,
        });
        return newCoin;
      });
    }
  }, [selectedPokemon, setCoin]);

  const resetGame = () => {
    setEggImage("/img/알1.webp");
    setClickCount(0);
    setSelectedPokemon(null);
  };

  return (
    <div className="relative h-screen">
      <div className="flex items-center justify-center py-2 desktop:py-8">
        {isCounting && <div className="font-semibold">{time}초 남았다!!!</div>}

        <div className="mt-4 text-2xl font-bold">
          {!isCounting && (
            <div>
              {selectedPokemon ? (
                <button
                  className="bg-[#FEEDEF] w-24 h-10 
                    border border-[#1C1D1F] rounded-3xl font-bold text-base"
                  onClick={handleRestart}
                >
                  다시시작
                </button>
              ) : (
                <button
                  className="bg-[#FEEDEF] w-24 h-10 
                  border border-[#1C1D1F] rounded-3xl font-bold text-base"
                  onClick={handleRestart}
                >
                  다시시작
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center
      tablet:flex-row tablet:gap-20 tablet:mt-32
      desktop:mt-0 "
      >
        <div className="relative w-40" onClick={clickHammer}>
          <img className="w-40" src={eggImage} />
          <img
            className="w-28 absolute top-0 left-24"
            src={hammer ? "/img/망치2.webp" : "/img/망치.webp"}
          />
        </div>
        <PokeGameExp />
      </div>

      {selectedPokemon && (
        <div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2
         bg-white px-8 py-4 rounded-xl shadow-lg flex flex-col items-center"
        >
          <div
            className="w-auto h-auto p-1 bg-[#FEEDEF] rounded-xl
          flex flex-col items-center justify-center mb-2"
          >
            <h2 className="font-bold text-sm">{selectedPokemon.number}</h2>
            <h2 className="text-xs">{selectedPokemon.name}</h2>
          </div>

          <img
            src={selectedPokemon.image}
            alt={selectedPokemon.name}
            className="w-28 h-28 mb-2"
          />
          <p className="text-xs">
            타입: {selectedPokemon.type1}
            {selectedPokemon.type2 && `${selectedPokemon.type2}`}
          </p>
          <p className="text-xs">총 종족값: {selectedPokemon.totalBaseStat}</p>
          <button
            onClick={handleRestart}
            className="mt-2 p-2 bg-[#E8E8E8]  rounded-lg text-xs"
          >
            닫기
          </button>
        </div>
      )}
    </div>
  );
}
