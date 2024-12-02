  
  
  export async function getPokemonList (){

    const URL = "https://pokeapi.co/api/v2/pokemon?limit=200";
    const response = await fetch(URL);
    const data = await response.json();
  
    const poketmonDetails = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const details = await res.json();
  
        // 한국어 이름
        const speciesResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${details.id}`
        );
        const speciesData = await speciesResponse.json();
        const koreanNameObj = speciesData.names.find(
          (name) => name.language.name === "ko"
        );
        const koreanName = koreanNameObj ? koreanNameObj.name : pokemon.name;
  
        // 한국어 타입
        const types = await Promise.all(
          details.types.map(async (type) => {
            const typeResponse = await fetch(type.type.url);
            const typeData = await typeResponse.json();
            const koreanTypeName = typeData.names.find(
              (name) => name.language.name === "ko"
            )?.name;
            return koreanTypeName || type.type.name;
          })
        );
  
        const type1 = types[0]
        const type2 = types[1] || null;

        const totalBaseStat = details.stats.reduce((sum, stat) => sum + stat.base_stat, 0);

        const HP = details.stats.find((stat) => stat.stat.name === "hp")?.base_stat || 0;
        const attack = details.stats.find((stat) => stat.stat.name === "attack")?.base_stat || 0;
        const defense =  details.stats.find((stat) => stat.stat.name === "defense")?.base_stat || 0;
        const specialDefense = details.stats.find((stat) => stat.stat.name === "special-defense")?.base_stat || 0;
        const specialAttack = details.stats.find((stat) => stat.stat.name === "special-attack")?.base_stat || 0;
        const speed = details.stats.find((stat) => stat.stat.name === "speed")?.base_stat || 0;
        const weight = details.weight;

        return {
          name: koreanName,
          number: details.id,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${details.id}.svg`,
          type1: type1,
          type2: type2,
          totalBaseStat: totalBaseStat,
          HP : HP,
          attack : attack,
          defense : defense,
          specialAttack : specialAttack,
          specialDefense : specialDefense,
          speed : speed,
          weight : weight
        };
      })
    );
  
    return poketmonDetails;
  };
  


