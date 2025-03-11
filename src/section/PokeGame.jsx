"use client";

import { useState, useEffect, useContext } from "react";
import { CoinContext } from "../components/PokeCoinProviders";
import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "@/lib/PokemonApi";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import PokeGameExp from "../components/PokeGameExp";
import Image from "next/image";

export default function PokeGame() {
  const [hammer, setHammer] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [eggImage, setEggImage] = useState("/img/알1.webp");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [time, setTime] = useState(15);
  const [isCounting, setIsCounting] = useState(true);
  const [user, setUser] = useState(null);
  const [gameStart, setGameStart] = useState(false);
  const [showBoom, setShowBoom] = useState(false);

  const { data: pokemonList = [] } = useQuery({
    queryKey: ["pokemon"],
    queryFn: getPokemonList,
  });

  const { coin, setCoin } = useContext(CoinContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const clickHammer = () => {
    if (!user) return alert("로그인해주세요");
    if (!isCounting) return alert("다시시작 버튼을 눌러주세요");
    setClickCount((prev) => {
      setHammer(!hammer);
      return prev + 1;
    });
  };

  const handleRestart = () => {
    resetGame();
    setTime(15);
    setIsCounting(true);
  };

  const onGameStart = () => {
    setGameStart(true);
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
      setShowBoom(true);
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
    if (clickCount === 30 && pokemonList.length > 0) {
      const randomIndex = Math.floor(Math.random() * pokemonList.length);
      const pokemon = pokemonList[randomIndex];
      setSelectedPokemon(pokemon);
      setTime(0);
    }
  }, [clickCount, pokemonList]);

  useEffect(() => {
    if (selectedPokemon && user) {
      const { totalBaseStat } = selectedPokemon;
      let addition = 0;
      if (totalBaseStat > 0 && totalBaseStat < 300) addition = 10;
      else if (totalBaseStat >= 300 && totalBaseStat < 400) addition = 20;
      else if (totalBaseStat >= 400 && totalBaseStat < 500) addition = 30;
      else if (totalBaseStat >= 500 && totalBaseStat < 600) addition = 40;
      else if (totalBaseStat >= 600) addition = 50;

      // setCoin의 콜백 내부에서 새 코인 값을 계산하고, 이를 updateCoinData에 전달
      setCoin((prevCoin) => {
        const newCoin = prevCoin + addition;
        updateCoinData(newCoin);
        return newCoin;
      });
    }

    async function updateCoinData(newCoin) {
      try {
        const userDocRef = doc(db, "Coin", user.uid);
        await setDoc(
          userDocRef,
          {
            coin: newCoin,
            createdAt: Date.now(),
            username: user.displayName,
            userId: user.uid,
          },
          { merge: true }
        );
      } catch (error) {
        console.error("코인 저장 오류:", error);
      }
    }
  }, [selectedPokemon, user, setCoin]);

  const resetGame = () => {
    setEggImage("/img/알1.webp");
    setClickCount(0);
    setSelectedPokemon(null);
  };

  return (
    <div>
      {showBoom && !selectedPokemon && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-50 flex justify-center items-center"
          onClick={() => setShowBoom(false)}
        >
          <Image
            src="/img/boom.png"
            width={240}
            height={240}
            alt="boom image"
          />
        </div>
      )}

      <div className="flex items-center justify-center py-2 desktop:py-8">
        {gameStart ? (
          <>
            {isCounting && (
              <div className="font-semibold">{time}초 남았다!!!</div>
            )}
            <div className="mt-4 text-2xl font-bold">
              {!isCounting && (
                <button
                  className="bg-[#FEEDEF] w-24 h-10 
        border border-[#1C1D1F] rounded-3xl font-bold text-base"
                  onClick={handleRestart}
                >
                  다시시작
                </button>
              )}
            </div>
          </>
        ) : (
          <button
            className="bg-[#FEEDEF] w-24 h-10 
              border border-[#1C1D1F] rounded-3xl font-bold text-base"
            onClick={onGameStart}
          >
            게임시작
          </button>
        )}
      </div>

      <div
        className="flex flex-col items-center justify-center
        tablet:flex-row tablet:gap-20 tablet:mt-32
        desktop:mt-0 "
      >
        <div className="relative w-40" onClick={clickHammer}>
          <Image width={160} height={180} src={eggImage} alt="egg image" />
          <Image
            width={112}
            height={112}
            className="absolute top-0 left-24"
            src={hammer ? "/img/망치2.webp" : "/img/망치.webp"}
            alt="hammer image"
          />
        </div>
        <PokeGameExp />
      </div>

      {selectedPokemon && (
        <div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2
         bg-white px-8 py-4 rounded-xl shadow-lg flex flex-col items-center gap-y-2"
        >
          <div
            className="w-auto h-auto p-1 bg-[#FEEDEF] rounded-xl
          flex flex-col items-center justify-center mb-2"
          >
            <h2 className="font-bold text-sm">{selectedPokemon.number}</h2>
            <h2 className="text-xs">{selectedPokemon.name}</h2>
          </div>

          {selectedPokemon.image && (
            <Image
              width={112}
              height={112}
              src={selectedPokemon.image}
              alt={selectedPokemon.name}
              className="mb-2"
            />
          )}

          <div className="text-center space-y-0.5">
            <p className="text-xs">
              타입: {selectedPokemon.type1}
              {selectedPokemon.type2 && `, ${selectedPokemon.type2}`}
            </p>
            <p className="text-xs">
              총 종족값: {selectedPokemon.totalBaseStat}
            </p>
          </div>

          <button
            onClick={() => {
              setGameStart(true);
              setIsCounting(false);
              setSelectedPokemon(null);
              setTime(15);
              setEggImage("/img/알1.webp");
              setShowBoom(false);
            }}
            className="mt-2 p-2 bg-[#E8E8E8] rounded-lg text-xs"
          >
            닫기
          </button>
        </div>
      )}
    </div>
  );
}
