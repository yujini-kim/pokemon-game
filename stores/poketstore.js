import { writable } from 'svelte/store'

export const arrPoketmon = writable([]);

const fetchPoketmon = async () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151'
    const response = await fetch(URL);
    const data = await response.json();


    const loadedPoketmon = data.results.map((poketmon, index) => {
        return {
            name : poketmon.name,
            id : index + 1,
            image : `https://raw.githubusercontent.com/PokeAPI/
            sprites/master/sprites/pokemon/${index + 1}.png`,
            type1: poketmon.types[0]?.type.name || "unknown",
            type2: poketmon.types[1]?.type.name || "unknown" 
        }
    })


    arrPoketmon.set(loadedPoketmon);

}

fetchPoketmon();
