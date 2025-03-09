"use client";

import React, { useState } from "react";
import PokeSearchBox from "../components/PokeSearchBox";
import PokeTypes from "../components/PokeTypes";
import PokeSortBox from "../components/PokeSortBox";
import PokeCard from "@/components/PokeCard";

const PokeFilters = ({ pokemonList, setSelectedPokemon }) => {
  const [searchText, setSearchText] = useState("");
  const [searchName, setSearchName] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedOption, setSelectedOption] = useState("number");

  const searchFilter = (pokemonList) => {
    const FilterName = pokemonList.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(searchName.toLowerCase()) ||
        pokemon.number.toString() === searchName.toString()
    );

    const filteredPokemon = FilterName.filter(
      (pokemon) =>
        !selectedType ||
        pokemon.type1 === selectedType ||
        pokemon.type2 === selectedType
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

  return (
    <>
      <div className="m-2 w-auto h-auto p-3 bg-white rounded-lg tablet:py-6 desktop:mx-44">
        <div className="space-y-2">
          {/* 검색 */}
          <PokeSearchBox
            searchText={searchText}
            setSearchText={setSearchText}
            setSearchName={setSearchName}
          />
          <PokeTypes
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
        </div>
      </div>
      <div>
        <PokeSortBox
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>

      {/* 필터링된 포켓몬*/}
      <div className="grid grid-cols-3 justify-center items-center gap-2 p-2 tablet:grid-cols-4 desktop:grid-cols-7 desktop:gap-4 desktop:mx-44">
        {filteredPokemon.map((pokemon) => (
          <PokeCard
            key={pokemon.number}
            name={pokemon.name}
            number={pokemon.number}
            img={pokemon.image}
            type1={pokemon.type1}
            type2={pokemon.type2}
            onClick={() => setSelectedPokemon(pokemon)}
          />
        ))}
      </div>
    </>
  );
};

export default PokeFilters;
