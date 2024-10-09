"use client"

import WhiteBox from '@components/WhiteBox';
import LightYellowBox from './ligthYellow';
import SearchButton from '@components/SearchButton';
import SortButton from '@components/SortButton';
import PokemonList from '@components/PokemonList';
import React, { useState } from 'react';

export default function FilterBox() {
  const [poketmons, setPoketmons] = useState([]);

  return (
    <div className="flex flex-col mt-12">
      <div className='flex justify-center'>
        <div className="flex w-[350px] h-[150px] bg-[#FFDD00] rounded-3xl 
        tablet:w-[755px] tablet:h-64 
        desktop:w-[1076px] desktop:h-64 justify-center items-center">
          <div className="flex flex-row space-x-1">
            {/* 왼쪽 */}
            <div className="flex flex-col space-y-2 tablet:space-y-4 desktop:space-y-6 desktop:mr-4">
              <LightYellowBox text="이름/번호 검색" />
              <LightYellowBox text="정렬기준" />
              <LightYellowBox text="타입검색" />
            </div>

            {/* 오른쪽 흰박스 */}
            <div className="flex flex-col space-y-2 tablet:space-y-4 desktop:space-y-6">
              <SearchButton setPoketmons={setPoketmons} />
              <SortButton />
              
              {/* 타입 선택 */}
              <div className="flex flex-col mt-1 space-y-2 
              tablet:flex-row tablet:space-y-0 tablet:space-x-2 
              desktop:flex-row desktop:space-y-0 desktop:space-x-2 desktop:mt-0">
                <div><WhiteBox /></div>
              </div> {/* 타입 선택 끝 */}
          </div>
        </div>
      </div>
      </div>
      {/* 포켓몬 리스트 렌더링 */}
      <div className="mt-6">
        <PokemonList poketmons={poketmons} />
      </div>
    </div>
  );
}