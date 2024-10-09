"use client";

import React, { Suspense } from "react";
import { useQuery } from "react-query";
import PokemonCardSkeleton from "./PokemonCardSkeleton";
import Loading from"./Loading"

const PokemonCard = React.lazy(() => import("./PokemonCard")); // PokemonCard 컴포넌트를 lazy로 가져옴


const fetchPoketmon = async () => {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const response = await fetch(URL);
  const data = await response.json();

  const poketmonDetails = await Promise.all(
    data.results.map(async (poketmon) => {
      const res = await fetch(poketmon.url); 
      const details = await res.json();

      // 한국어 이름 가져오기
      const speciesResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${details.id}`
      );
      const speciesData = await speciesResponse.json();
      const koreanName = speciesData.names.find(
        (name) => name.language.name === "ko"
      );

      // 타입 데이터 가져오기
      const types = await Promise.all(
        details.types.map(async (type) => {
          const typeResponse = await fetch(type.type.url); 
          const typeData = await typeResponse.json(); 
          const koreanTypeName = typeData.names.find(
            (name) => name.language.name === "ko"
          )?.name; 
          return koreanTypeName
        })
      );

      return {
        name: koreanName.name,
        number: details.id,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${details.id}.svg`, // 포켓몬 이미지 URL
        type1: types[0] || "unknown", 
        type2: types[1] || "unknown", 
      };
    })
  );

  return poketmonDetails;
};

export default function PokemonList() {
  // useQuery 훅을 사용하여 데이터 가져오기
  const { data: poketmons, isLoading } = useQuery("poketmons", fetchPoketmon);

  return (
    <div className="CenteredFlex">
      <div
        className="grid grid-cols-3 gap-2 mt-6 
          tablet:grid-cols-4 tablet:gap-4 
          desktop:grid-cols-5 desktop:gap-6"
      >
        {isLoading
          ? <Loading />
          : poketmons.map((poketmon) => (
              <Suspense key={poketmon.number} fallback={<PokemonCardSkeleton />}>
                <PokemonCard
                  name={poketmon.name}
                  number={poketmon.number}
                  image={poketmon.image}
                  type1={poketmon.type1}
                  type2={poketmon.type2} 
                />
              </Suspense>
            ))}
      </div>
    </div>
  )}