
export default function PokeGacha(){
    return(
        <>
            <div className="flex flex-col items-center justify-center gap-y-2 mt-14
            tablet:flex-row gap-2 tablet:mt-64 desktop:gap-3">{/* 1 */} 
                <div className="flex gap-2 desktop:gap-3">
                    <div className="bg-[#FBF8CB] w-28 h-auto p-2 rounded-3xl border border-[#1C1D1F]
                    flex flex-col justify-center items-center space-y-4
                    tablet:w-32 tablet:p-4
                    desktop:w-36">
                        <div className="flex items-center justify-center gap-0.5
                        bg-[#E0FE6A] w-14 h-8 rounded-3xl border border-[#1C1D1F]
                        tablet:w-16 tablet:gap-1">
                            <img className="w-4 h-4 tablet:w-6 tablet:h-6" src="/img/coin.webp" />
                            <span className="font-bold tablet:text-lg">5</span>
                        </div>

                        <img className="h-20 w-20 tablet:w-24 tablet:h-24" src="/img/ball.webp"/>

                        <span className="font-bold text-4xl">C</span>
                    </div>
                    <div className="bg-[#FBF8CB] w-28 h-auto p-2 rounded-3xl border border-[#1C1D1F]
                    flex flex-col justify-center items-center space-y-4
                    tablet:w-32
                    desktop:w-36">
                        <div className="flex items-center justify-center gap-0.5
                        bg-[#E0FE6A] w-14 h-8 rounded-3xl border border-[#1C1D1F]
                        tablet:w-16 tablet:gap-1">
                            <img className="w-4 h-4 tablet:w-6 tablet:h-6" src="/img/coin.webp" />
                            <span className="font-bold tablet:text-lg">10</span>
                        </div>

                        <img className="h-20 w-20 tablet:w-24 tablet:h-24" src="/img/슈퍼볼.webp"/>

                        <span className="font-bold text-4xl">B</span>
                    </div>
                    <div className="bg-[#FBF8CB] w-28 h-auto p-2 rounded-3xl border border-[#1C1D1F]
                    flex flex-col justify-center items-center space-y-4
                    tablet:w-32
                    desktop:w-36">
                        <div className="flex items-center justify-center gap-0.5
                        bg-[#E0FE6A] w-14 h-8 rounded-3xl border border-[#1C1D1F]
                        tablet:w-16 tablet:gap-1">
                            <img className="w-4 h-4 tablet:w-6 tablet:h-6" src="/img/coin.webp" />
                            <span className="font-bold tablet:text-lg">20</span>
                        </div>

                        <img className="h-20 w-20 tablet:w-24 tablet:h-24" src="/img/하이퍼볼.webp"/>

                        <span className="font-bold text-4xl">A</span>
                    </div>
                </div>
            
       
            <div className="flex gap-2 desktop:gap-3">
                <div className="bg-[#FBF8CB] w-28 h-auto p-2 rounded-3xl border border-[#1C1D1F]
                    flex flex-col justify-center items-center space-y-4
                    tablet:w-32 tablet:p-4
                    desktop:w-36">
                        <div className="flex items-center justify-center gap-0.5
                        bg-[#E0FE6A] w-14 h-8 rounded-3xl border border-[#1C1D1F]
                        tablet:w-16 tablet:gap-1">
                            <img className="w-4 h-4 tablet:w-6 tablet:h-6" src="/img/coin.webp" />
                            <span className="font-bold tablet:text-lg">50</span>
                        </div>

                        <img className="h-20 w-20 tablet:w-24 tablet:h-24" src="/img/마스터볼.webp"/>

                        <span className="font-bold text-4xl">S</span>
                </div>
                <div className="bg-[#FBF8CB] w-28 h-auto p-2 rounded-3xl border border-[#1C1D1F]
                    flex flex-col justify-center items-center space-y-4
                    tablet:w-32
                    desktop:w-36">
                        <div className="flex items-center justify-center gap-0.5
                        bg-[#E0FE6A] w-14 h-8 rounded-3xl border border-[#1C1D1F]
                        tablet:w-16 tablet:gap-1">
                            <img className="w-4 h-4 tablet:w-6 tablet:h-6" src="/img/coin.webp" />
                            <span className="font-bold tablet:text-lg">30</span>
                        </div>

                        <img className="h-20 w-20 tablet:w-24 tablet:h-24" src="/img/랜덤볼.webp"/>

                        <span className="font-bold text-4xl">R</span>
                </div>
            </div>

        </div>{/* 1 */} 

        </>
    )
}