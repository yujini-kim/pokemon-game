import NavBar from '../../../../components/NavBar';
import FilterBox from '../../../../components/FilterBox';
import PokemonList from '../../../../components/PokemonList';

export default function MainPage() {
  return (
    <div>
      <NavBar />
      <FilterBox />
      <PokemonList />
    </div>
  );
}