import NavBar from '../../../../components/NavBar';
import FilterBox from '../../../../components/FilterBox';
import PokemonList from '../../../../components/PokemonList';

export const metadata = {
  title: '포켓몬 도감',
}

export default function MainPage() {
  return (
    <div>
      <NavBar />
      <FilterBox />
      <PokemonList />
    </div>
  );
}