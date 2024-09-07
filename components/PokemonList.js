import PokemonCard from './PokemonCard';

export default function PokemonList() {
  const pokemons = [
    { number: '001', name: '이상해씨', 
        types: [{ name: '풀', imgSrc: '/img/풀.png' }, { name: '독', imgSrc: '/img/독.png' }] },
    { number: '002', name: '이상해풀', 
        types: [{ name: '풀', imgSrc: '/img/풀.png' }, { name: '독', imgSrc: '/img/독.png' }] },
    { number: '003', name: '이상해풀', 
        types: [{ name: '풀', imgSrc: '/img/풀.png' }, { name: '독', imgSrc: '/img/독.png' }] },
    { number: '004', name: '이상해풀', 
        types: [{ name: '풀', imgSrc: '/img/풀.png' }, { name: '독', imgSrc: '/img/독.png' }] },
    { number: '005', name: '이상해풀', 
        types: [{ name: '풀', imgSrc: '/img/풀.png' }, { name: '독', imgSrc: '/img/독.png' }] },       
  ];

  return (
    <div className="CenteredFlex">
      <div className="grid grid-cols-3 gap-2 mt-6 
      tablet:grid-cols-4 tablet:gap-4 
      desktop:grid-cols-5 desktop:gap-6">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} number={pokemon.number} name={pokemon.name} types={pokemon.types} />
        ))}
      </div>
    </div>
  );
}