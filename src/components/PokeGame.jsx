"use client";

import { useState, useEffect, useContext } from "react";
import { CoinContext } from "./PokeCoinProviders";
import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "@/lib/PokemonApi";
import PokeGameExp from "./PokeGameExp";
import PokeGameCountdown from "./PokeGameCountdown";

export default function PokeGame({}) {
  const [hammer, setHammer] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [eggImage, setEggImage] = useState("/img/알1.webp");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const { data: pokemonList = [] } = useQuery({
    queryKey: ["pokemon"],
    queryFn: getPokemonList,
  });

  const { setCoin } = useContext(CoinContext);

  const clickHammer = () => {
    setHammer((prevHammer) => !prevHammer);
    setClickCount((pre) => pre + 1);
  };

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
      if (totalBaseStat > 0 && totalBaseStat < 300) {
        setCoin((prev) => prev + 10);
      } else if (totalBaseStat >= 300 && totalBaseStat < 400) {
        setCoin((prev) => prev + 20);
      } else if (totalBaseStat >= 400 && totalBaseStat < 500) {
        setCoin((prev) => prev + 30);
      } else if (totalBaseStat >= 500 && totalBaseStat < 600) {
        setCoin((prev) => prev + 40);
      } else if (totalBaseStat >= 600) {
        setCoin((prev) => prev + 50);
      }
    }
  }, [selectedPokemon, setCoin]);

  const resetGame = () => {
    setEggImage("/img/알1.webp");
    setClickCount(0);
    setSelectedPokemon(null);
  };

  const closeDetail = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="relative h-screen">
      <div className="flex items-center justify-center py-2 desktop:py-8">
        <PokeGameCountdown
          selectedPokemon={selectedPokemon}
          resetGame={resetGame}
        />
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
            {selectedPokemon.type2 && ` / ${selectedPokemon.type2}`}
          </p>
          <p className="text-xs">총 종족값: {selectedPokemon.totalBaseStat}</p>
          <button
            onClick={closeDetail}
            className="mt-2 p-2 bg-[#E8E8E8]  rounded-lg text-xs"
          >
            닫기
          </button>
        </div>
      )}
    </div>
  );
}
