"use client"

import { useState } from "react"
import PokeCard from "@/components/PokeCard"
import PokeCardSkeleton from "./PokeCardSkeleton";
import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "@/lib/PokemonApi";


export default function PokeGrid({ }){
    const [ searchText, setSearchText ] = useState("");
    const [ searchName, setSearchName ] = useState("");

    const { data: pokemonList = [], isLoading } = useQuery({
        queryKey: ["pokemons"],
        queryFn: getPokemonList,
      });

    const searchFilter = (list) => {
            return list.filter(
                (pokemon) => pokemon.name.includes(searchName)
            )
    }
    const filteredPokemonName = searchFilter(pokemonList)

    return(
        
         <div className="">
            <div className="m-2 w-auto h-auto p-3 bg-white rounded-lg flex items-center gap-2 border border-[#1C1D1F]">
               <input className="bg-[#FBF8CB] rounded-lg w-full h-full p-0.5 border border-[#1C1D1F]
               placeholder-[#1C1D1F] placeholder:text-xs text-xs"
               type="text"
               placeholder="포켓몬 이름 검색"
               value={searchText}
               id="pokemonName"
               onChange={(e) => setSearchText(e.target.value)}
               />
               <button 
               onClick={() => setSearchName(searchText)}
               className="w-auto h-full p-2 border border-[#1C1D1F] bg-[#FBF8CB] rounded-lg flex items-center justify-center">
                    <img src="/img/icon_search.webp" className="w-3 h-3" />
               </button>               
            </div>    

            

            <div className="grid grid-cols-3 justify-center items-center
            gap-2 m-4
                tablet:grid-cols-4
                desktop:grid-cols-5">
                {isLoading && ([...Array(12)].map((_, index) => (<PokeCardSkeleton key={index} />)))}
                {filteredPokemonName.map((pokemon) => {
                    return (
                    <PokeCard 
                        key={pokemon.number}
                        name={pokemon.name}
                        number={pokemon.number}
                        img={pokemon.image}
                        type1={pokemon.type1}
                        type2={pokemon.type2}
                    />
                    );
                })}        
            </div>
                
    
        </div> /* 주석 */
        
    )
}