import PokeCard from "@/components/PokeCard";
import { getPokemonList } from "@/lib/pokemonApi";

export default {
  title: "Components/PokeCard",
  component: PokeCard,
  loaders: [
    async () => {
      const pokemonList = await getPokemonList();
      const bulbasaur = pokemonList.find((p) => p.number === 1);
      console.log("불러온 포켓몬:", bulbasaur);
      return { pokemon: bulbasaur };
    },
  ],
};

const Template = (args, { loaded: { pokemon } }) => <PokeCard {...pokemon} />;

export const Bulbasaur = Template.bind({});
