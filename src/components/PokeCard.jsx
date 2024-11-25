

export default function PokeCard({number, name, img, type1, type2}){

    return(
        <>
            <div className="">
                <div className="flex flex-col justify-center items-center p-2 gap-y-2
                w-full h-full bg-[#FBF8CB] border border-[#1C1D1F]
                rounded-lg">
                    <span className="font-bold text-xl">{number}</span>
                    <div className="bg-white rounded-lg w-24 h-24">
                        <img className="w-full h-full object-contain p-2" src={img} />
                    </div>
                    <span className="font-bold text-sm">{name}</span>
                    <div className=" flex gap-1">
                        {type1 && (
                            <div className="bg-[#ffffff] w-12 h-6 flex items-center justify-center rounded-2xl border border-[#1C1D1F]">
                                <img className="w-4 h-4" src={`/img/${type1}.webp`}/>
                                <span className="text-xs">
                                    {type1}
                                </span>
                            </div>
                            )}
                        {type2 && type2 !== "unknown" && (
                        <div className="bg-[#ffffff] w-12 h-6 flex items-center justify-center rounded-2xl border border-[#1C1D1F]">
                            <img className="w-4 h-4" src={`/img/${type2}.webp`}/>
                            <span className="text-xs">
                                {type2}
                            </span>
                        </div>        )}

                    </div>
                </div>
            </div>  
            </>
    )
}