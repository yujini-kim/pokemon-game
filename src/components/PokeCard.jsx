

export default function PokeCard({number, name, img, type1, type2}){

    return(
        <>
            <div className="">
                <div className="flex flex-col justify-center items-center p-2 gap-y-2
                w-full h-full bg-[#FBF8CB] border border-[#1C1D1F]
                rounded-lg desktop:py-6">
                    <span className="font-bold text-xl tablet:text-2xl">{number}</span>
                    <div className="bg-white rounded-lg w-24 h-24
                    tablet:w-36 tablet:h-36 desktop:w-44 desktop:h-44">
                        <img className="w-full h-full object-contain p-2 desktop:p-4" src={img} />
                    </div>
                    <span className="font-bold text-sm tablet:text-base">{name}</span>
                    <div className="flex gap-1">
                        {type1 && (
                            <div className="bg-[#ffffff] p-1 w-12 h-auto flex flex-col items-center justify-center rounded-2xl border border-[#1C1D1F]
                            tablet:flex-row tablet:w-20">
                                <img className="w-4 h-4
                                tablet:w-6 tablet:h-6" src={`/img/${type1}.webp`}/>
                                <span className="text-xs tablet:text-sm">
                                    {type1}
                                </span>
                            </div>
                            )}
                        {type2 && type2 !== "unknown" && (
                        <div className="bg-[#ffffff] p-1 w-12 h-auto flex flex-col items-center justify-center rounded-2xl border border-[#1C1D1F]
                        tablet:flex-row tablet:w-20">
                            <img className="w-4 h-4
                            tablet:w-6 tablet:h-6" src={`/img/${type2}.webp`}/>
                            <span className="text-xs tablet:text-sm">
                                {type2}
                            </span>
                        </div>        )}

                    </div>
                </div>
            </div>  
            </>
    )
}