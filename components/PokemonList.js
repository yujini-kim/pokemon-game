"use client"

import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'

export default function PoketmonList(){
  const [poketmons, setPoketmons] = useState([])


  useEffect(() =>{
    fetch('/assets/poketmons.json')
    .then((response) => response.json())
    .then((data) => setPoketmons(data))
  }, [])

  return(
    <div className='CenteredFlex'>
      <div className="grid grid-cols-3 gap-2 mt-6 
      tablet:grid-cols-4 tablet:gap-4 
      desktop:grid-cols-5 desktop:gap-6">
         {poketmons.map((pokemon, index) => (
          <PokemonCard key={index} 
          number={pokemon.number} 
          name={pokemon.name} 
          types={pokemon.types} />
        ))}
      </div>
      
    </div>
  )
}