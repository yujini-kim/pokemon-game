export default function PokeDetailCard({HP, attack, defense, specialAttack,
    specialDefense, speed, weight, totalBaseStat, number, name, image, closeDetail
}){
    return(
        <div>
            <div className="flex flex-col justify-center items-center p-2 gap-y-2
                w-52 h-auto tablet:w-72 tablet:gap-y-4
                rounded-lg">
                    <div className="flex flex-col gap-y-1 items-center">
                        <h1 className="font-bold tablet:text-2xl">{number}</h1>
                        <h1 className="text-lg font-bold tablet:text-3xl">{name}</h1>
                    </div>
   
                    <div className="bg-white rounded-lg w-36 h-36
                    tablet:w-48 tablet:h-48">
                        <img className="w-full h-full p-2" src={image}/>
                    </div>
                    <div className="flex flex-col gap-y-1 items-center mt-2">
                        <span className="text-xs tablet:text-base">HP : {HP}</span>
                        <span className="text-xs tablet:text-base">공격 : {attack}</span>
                        <span className="text-xs tablet:text-base">방어 : {defense}</span>
                        <span className="text-xs tablet:text-base">특수공격 : {specialAttack}</span>
                        <span className="text-xs tablet:text-base">특수방어 : {specialDefense}</span>
                        <span className="text-xs tablet:text-base">속도 : {speed}</span>
                        <span className="text-xs tablet:text-base">몸무게 : {weight}</span>
                        <span className="text-xs tablet:text-base">종족값 : {totalBaseStat}</span>
                    </div>
                    <button
                        onClick={closeDetail}
                        className="mt-2 px-4 py-2 bg-[#BC99FF] border border-[#1C1D1F] rounded-lg text-sm
                        tablet:text-base"
                    >
                        닫기
                    </button>
            </div>
        </div>
    )
}