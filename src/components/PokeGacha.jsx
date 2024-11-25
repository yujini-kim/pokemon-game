
export default function PokeGacha(){
    return(
        <div className="py-20">
            <div className="flex gap-2 px-4">
                <div className="bg-[#FBF8CB] space-y-4 py-4 rounded-3xl border border-[#1C1D1F] w-28 h-auto flex flex-col justify-center items-center">
                    <div className="w-14 h-8 flex bg-[#BC99FF] gap-1 items-center p-2 rounded-2xl">
                        <img className="w-5 h-5 drop-shadow-lg" src="../img/coin.webp"/>
                        <p className="text-[#1C1D1F] font-bold text-lg">5</p>
                    </div>

                    <img className="w-16 h-16" src="../img/ball.webp"/>
                    <p className="text-4xl font-bold">C</p>
                </div>

                <div className="bg-[#FBF8CB] space-y-4 py-4 rounded-3xl border border-[#1C1D1F] w-28 h-auto flex flex-col justify-center items-center ">
                    <div className="w-14 h-8 flex ] bg-[#BC99FF] gap-1 items-center p-2 rounded-2xl">
                        <img className="w-5 h-5 drop-shadow-lg" src="../img/coin.webp"/>
                        <p className="text-[#1C1D1F] font-bold text-lg">5</p>
                    </div>

                    <img className="w-16 h-16" src="../img/슈퍼볼.webp"/>
                    <p className="text-4xl font-bold">B</p>
                </div>

                
                <div className="bg-[#FBF8CB] space-y-4 py-4 rounded-3xl border border-[#1C1D1F] w-28 h-auto flex flex-col justify-center items-center ">
                    <div className="w-14 h-8 flex ] bg-[#BC99FF] gap-1 items-center p-2 rounded-2xl">
                        <img className="w-5 h-5 drop-shadow-lg" src="../img/coin.webp"/>
                        <p className="text-[#1C1D1F] font-bold text-lg">5</p>
                    </div>

                    <img className="w-16 h-16" src="../img/하이퍼볼.webp"/>
                    <p className="text-4xl font-bold">A</p>
                </div>
            </div>

            <div className="flex gap-2 justify-center mt-2">                
                <div className="bg-[#FBF8CB] space-y-4 py-4 rounded-3xl border border-[#1C1D1F] w-28 h-auto flex flex-col justify-center items-center ">
                        <div className="w-14 h-8 flex ] bg-[#BC99FF] gap-1 items-center p-2 rounded-2xl">
                            <img className="w-5 h-5 drop-shadow-lg" src="../img/coin.webp"/>
                            <p className="text-[#1C1D1F] font-bold text-lg">5</p>
                        </div>

                        <img className="w-16 h-16" src="../img/마스터볼.webp"/>
                        <p className="text-4xl font-bold">S</p>
                    </div>

                    
                    <div className="bg-[#FBF8CB] space-y-4 py-4 rounded-3xl border border-[#1C1D1F] w-28 h-auto flex flex-col justify-center items-center ">
                        <div className="w-14 h-8 flex ] bg-[#BC99FF] gap-1 items-center p-2 rounded-2xl">
                            <img className="w-5 h-5 drop-shadow-lg" src="../img/coin.webp"/>
                            <p className="text-[#1C1D1F] font-bold text-lg">5</p>
                        </div>

                        <img className="w-16 h-16" src="../img/랜덤볼.webp"/>
                        <p className="text-4xl font-bold">R</p>
                    </div>
            </div>
        </div>

    )
}