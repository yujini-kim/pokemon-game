"use client"

import { useState } from "react"

export default function PokeGameExp(){

    const [isBalloonVisible, setBalloonVisibility] = useState(false);

    const toggleBalloon = () => {
        setBalloonVisibility(!isBalloonVisible)
    }
    return (
        <>      
            {isBalloonVisible && (
                <div className="absolute w-72 h-72 bg-[#E0FE6A] border border-[#1C1D1F]
                rounded-lg p-4 z-20 flex justify-center items-center text-center
                 ">
                <p className="text-black">
                    30초 안에 망치로 알을 후드려 패면 포켓몬이 나온다!!!<br />
                    30초 안에 못 후드려 패면 포켓몬은 없다!!!<br />
                    그리고 돈도 없다!!!<br />
                    망치로 후드려 패서 나온 포켓몬을 우리에게 주면 포켓코인을 주겠다!!!<br />
                </p>
                </div>
            )}


            <div className="flex flex-col justify-center items-center gap-y-6">
                <div id="로켓단" className="w-36 h-52 desktop:w-96 desktop:h-[604px]">
                <img src="/img/로켓단.webp" alt="로켓단" />
                </div> 
                <button 
                className='bg-[#BC99FF] w-24 h-10 
                border border-[#1C1D1F] rounded-3xl font-bold' 
                onClick={toggleBalloon} 
                >
                게임설명
                </button>               
            </div>
        </>
    )
}