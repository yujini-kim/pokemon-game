"use client";

import { useState, useEffect, useContext } from "react";
import { CoinContext } from './PokeCoinProviders'
import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "@/lib/PokemonApi";
import PokeGameExp from "./PokeGameExp";


export default function PokeGame({}) {

  const [hammer, setHammer] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [eggImage, setEggImage] = useState('/img/알1.webp');
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const { data: pokemonList = [] } = useQuery({
    queryKey: ["pokemon"],
    queryFn: getPokemonList,
  });

  const { setCoin } = useContext(CoinContext); 

  const clickHammer = () => {
    setHammer((prevHammer) => !prevHammer);
    setClickCount((pre) => pre + 1) }

    useEffect(() => {
      if (clickCount === 3) {
        setEggImage('/img/알2.webp');
      } else if (clickCount === 6) {
        setEggImage('/img/알3.webp');
      } else if (clickCount === 9) {
        setEggImage('/img/알4.webp');
      }
    }, [clickCount]);

    useEffect(() => {
      if (clickCount === 9 && pokemonList.length > 0) {
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
        } else if (totalBaseStat >= 500 && totalBaseStat < 500) {
          setCoin((prev) => prev + 40);
        } else if (totalBaseStat >= 600) {
          setCoin((prev) => prev + 50);
        }
      }
    }, [selectedPokemon, setCoin]);

  return (
    <div className="relative h-screen">

      <div className="flex flex-col items-center justify-center">
        <div 
        className="relative w-40"
        onClick={clickHammer}>
            <img 
              className='w-40'
              src={eggImage}/>
              <img
              className='w-28 absolute top-0 left-24'
              src={hammer ? '/img/망치2.webp' : '/img/망치.webp'}/>
        </div>
        <PokeGameExp />
      </div>

      {selectedPokemon && (
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2
         bg-white border border-[#1C1D1F] p-4 rounded-xl shadow-lg flex flex-col items-center">
          <div className="w-auto h-auto p-1 bg-[#E0FE6A] border border-[#1C1D1F] rounded-xl
          flex flex-col items-center justify-center mb-2">
            <h2 className="font-bold text-sm">{selectedPokemon.number}</h2>
            <h2 className="text-xs">{selectedPokemon.name}</h2>
          </div>

          <img src={selectedPokemon.image} alt={selectedPokemon.name} className="w-28 h-28 mb-2" />
          <p className="text-xs">타입: {selectedPokemon.type1}{selectedPokemon.type2 && ` / ${selectedPokemon.type2}`}</p>
          <p className="text-xs">총 종족값: {selectedPokemon.totalBaseStat}</p>
        </div>
      )}


    </div>

  )
}