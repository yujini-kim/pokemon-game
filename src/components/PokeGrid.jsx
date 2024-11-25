"use client"

import React, { useState } from "react"
import PokeCard from "@/components/PokeCard"
import PokeCardSkeleton from "./PokeCardSkeleton";
import PokeTypes from "./PokeTypes";
import PokeSearchBox from "./PokeSearchBox";
import PokeSortBox from "./PokeSortBox";
import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "@/lib/PokemonApi";


export default function PokeGrid({ }){
    const [ searchText, setSearchText ] = useState("");
    const [ searchName, setSearchName ] = useState("");
    const [ selectedType, setSelectedType ] = useState("");
    const [ selectedOption, setSelectedOption ] = useState("number");

    const { data: pokemonList = [], isLoading } = useQuery({
        queryKey: ["pokemon"],
        queryFn: getPokemonList,
      });

    const searchFilter = (pokemonList) => {
        const FilterName = pokemonList.filter((pokemon) => 
            pokemon.name.includes(searchName) || pokemon.number.toString() === searchName.toString())

        const filteredPokemon = FilterName.filter(
            (pokemon) =>
              !selectedType ||
              pokemon.type1 === selectedType ||
              pokemon.type2 === selectedType
          );
            return filteredPokemon }



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
          default:
            break;
        }
    
        return sortedList;
      };


      const filteredPokemon = sortPokemon(searchFilter(pokemonList));

    return (
        
        <div className="flex flex-col tablet:mx-4">
            <div className="m-2 w-auto h-auto p-3 bg-white rounded-lg border border-[#1C1D1F]
            tablet:py-6">
              <div className="space-y-2">{/* 검색 */}               
                <PokeSearchBox 
                    searchText={searchText} setSearchText={setSearchText} setSearchName={setSearchName}
                />
                <PokeTypes 
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                />
              </div>{/* 검색 */} 
        </div>    

        <div>
            <PokeSortBox selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        </div>

            
        <div className="grid grid-cols-3 justify-center items-center
            gap-2 p-2
            tablet:grid-cols-4
            desktop:grid-cols-5">
                {isLoading ?
                    [...Array(12)].map((_, index) => (<PokeCardSkeleton key={index} />)) :
                    filteredPokemon.map(( pokemon ) =>(
                        <PokeCard 
                        key={pokemon.number}
                        name={pokemon.name}
                        number={pokemon.number}
                        img={pokemon.image}
                        type1={pokemon.type1}
                        type2={pokemon.type2}
                    />))}
            </div>
                   
        </div> /* 주석 */
        
    )
}