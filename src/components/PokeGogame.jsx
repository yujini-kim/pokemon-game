import Link from "next/link"

export default function PokeGamego(){
    return(
        <>
            <Link href="/game" className="flex justify-center items-center mb-14" >
                <div className="bg-[#BC99FF] w-1/2 p-2 rounded-2xl border border-[#1C1D1F]
                tablet:w-auto tablet:p-4">
                    <p className="text-center text-xl font-bold">코인 모으러 가기</p>
                </div>              
            </Link>
        </>
    )
}