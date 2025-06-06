"use client";

import React, { useState, Suspense } from "react";
import PokeCard from "@/components/PokeCard";
import PokeCardSkeleton from "../components/PokeCardSkeleton";
import PokeSearchBox from "../components/PokeSearchBox";
import PokeSortBox from "../components/PokeSortBox";
import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "@/lib/PokemonApi";
import PokeDetailCard from "../components/PokeDetailCard";

export default function PokeGrid({}) {
  const [searchText, setSearchText] = useState("");
  const [searchName, setSearchName] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedOption, setSelectedOption] = useState("number");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const { data: pokemonList = [], isLoading } = useQuery({
    queryKey: ["pokemon"],
    queryFn: getPokemonList,
  });

  const LazyPokeCard = React.lazy(() => import("@/components/PokeCard"));

  const searchFilter = (pokemonList) => {
    const FilterName = pokemonList.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(searchName.toLowerCase()) ||
        pokemon.number.toString() === searchName.toString(),
    );

    const filteredPokemon = FilterName.filter(
      (pokemon) =>
        !selectedType ||
        pokemon.type1 === selectedType ||
        pokemon.type2 === selectedType,
    );
    return filteredPokemon;
  };

  const sortPokemon = (pokemonList) => {
    const sortedList = [...pokemonList];

    switch (selectedOption) {
      case "name":
        sortedList.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Rename":
        sortedList.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "number":
        sortedList.sort((a, b) => a.number - b.number);
        break;
      case "Renumber":
        sortedList.sort((a, b) => b.number - a.number);
        break;
      case "weight":
        sortedList.sort((a, b) => a.weight - b.weight);
        break;
      case "weight2":
        sortedList.sort((a, b) => b.weight - a.weight);
        break;
      case "totalBaseStat":
        sortedList.sort((a, b) => b.totalBaseStat - a.totalBaseStat);
        break;
      case "HP":
        sortedList.sort((a, b) => b.HP - a.HP);
        break;
      case "attack":
        sortedList.sort((a, b) => b.attack - a.attack);
        break;
      case "defense":
        sortedList.sort((a, b) => b.defense - a.defense);
        break;
      case "specialAttack":
        sortedList.sort((a, b) => b.specialAttack - a.specialAttack);
        break;
      case "specialDefense":
        sortedList.sort((a, b) => b.specialDefense - a.specialDefense);
        break;
      case "speed":
        sortedList.sort((a, b) => b.speed - a.speed);
        break;
      default:
        break;
    }

    return sortedList;
  };

  const filteredPokemon = sortPokemon(searchFilter(pokemonList));

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const closeDetail = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="flex flex-col px-6 mt-6 tablet:mx-4">
      <PokeSearchBox
        searchText={searchText}
        setSearchText={setSearchText}
        setSearchName={setSearchName}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      <div>
        <PokeSortBox
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>

      <div
        className="grid grid-cols-3 justify-center items-center
            gap-2 p-2
            tablet:grid-cols-4
            desktop:grid-cols-7 desktop:gap-4 desktop:mx-44"
      >
        {isLoading
          ? [...Array(18)].map((_, index) => <PokeCardSkeleton key={index} />)
          : filteredPokemon.map((pokemon) => (
              <Suspense fallback={<PokeCardSkeleton />} key={pokemon.number}>
                <LazyPokeCard
                  name={pokemon.name}
                  number={pokemon.number}
                  img={pokemon.image}
                  type1={pokemon.type1}
                  type2={pokemon.type2}
                  onClick={() => handleCardClick(pokemon)}
                />
              </Suspense>
            ))}
      </div>
      {selectedPokemon && (
        <>
          <div
            className="fixed inset-0 w-screen h-screen bg-black opacity-50 z-40"
            onClick={closeDetail}
          ></div>

          <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    bg-[#FEEDEF] p-4 rounded-xl shadow-lg flex flex-col items-center z-50"
          >
            <PokeDetailCard
              number={selectedPokemon.number}
              name={selectedPokemon.name}
              HP={selectedPokemon.HP}
              attack={selectedPokemon.attack}
              defense={selectedPokemon.defense}
              specialAttack={selectedPokemon.specialAttack}
              specialDefense={selectedPokemon.specialDefense}
              speed={selectedPokemon.speed}
              weight={selectedPokemon.weight}
              totalBaseStat={selectedPokemon.totalBaseStat}
              image={selectedPokemon.image}
              closeDetail={closeDetail}
            />
          </div>
        </>
      )}
    </div> /* 주석 */
  );
}
