"use client";

import Link from "next/link"
import { CoinContext } from './PokeCoinProviders'
import { useContext } from 'react';

export default function PokeNavbar(){
    
    const { coin } = useContext(CoinContext); 

    return(
        <>
            <div className="flex justify-between p-6 tablet:p-8">
                <Link href="/project/pokemon" className="bg-[#1C1D1F] px-3 tablet:px-5 rounded-3xl flex items-center justify-center">
                    <img className="w-4 h-4 tablet:w-6 tablet:h-6" src="/img/icon_home.webp"/>
                </Link>

                <div className="flex gap-2">
                    <Link href="/project/pokemon" className="bg-[#1C1D1F] p-2 tablet:px-3 rounded-3xl flex items-center justify-center gap-1">
                        <img className="w-4 h-4 tablet:w-6 tablet:h-6" src="/img/icon_game.webp"/>
                        <p className="text-white text-sm tablet:text-base">뽑기</p>
                    </Link>

                    <Link href="/project/pokemon/book" className="bg-[#1C1D1F] p-2 tablet:px-3 rounded-3xl flex items-center justify-center gap-1">
                        <img className="w-4 h-4 tablet:w-6 tablet:h-6" src="/img/icon_book.webp"/>
                        <p className="text-white text-sm tablet:text-base">도감</p>
                    </Link>

                    <Link href="/" className="bg-[#1C1D1F] p-2 tablet:px-3 rounded-3xl flex items-center justify-center gap-1">
                        <img className="w-4 h-4 tablet:w-6 tablet:h-6" src="/img/icon_coin.webp"/>
                        <p className="text-white text-sm tablet:text-base">{coin}</p>
                    </Link>
                </div>
            </div>
        </>

    )
}