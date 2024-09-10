"use client"

import NavBar from '@components/NavBar';
import FilterBox from '@components/FilterBox';
import PokemonList from '@components/PokemonList';
import {CoinProvider} from '@context/CoinContext'


export default function MainPage() {
  return (
    <div>
      <CoinProvider>
        <NavBar />
        <FilterBox />
        <PokemonList />
      </CoinProvider> 

    </div>
  );
}