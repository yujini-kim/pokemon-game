import Link from "next/link"

export default function HomeProject(){
    return(
        <div id="HomeProject" className="px-6">
            <div className="flex justify-center mt-72">
            <p className="text-[#1C1D1F] text-4xl font-bold
            tablet:text-6xl">PROJECT</p>
            </div>

            <div className="mt-20 mb-20 gap-y-4 px-2 flex flex-col items-center justify-center 
            tablet:px-8 desktop:flex-row desktop:gap-4 desktop:px-40">

                <div className='w-full h-auto bg-[#ffffff] rounded-xl drop-shadow-lg px-4 py-1 border border-[#1C1D1F]
                '>
                <div className='px-4 mt-12 tablet:px-8'>
                <div className='w-44 h-8 bg-[#BC99FF] rounded-lg flex items-center justify-center 
                border border-[#1C1D1F]
                tablet:w-[300px] tablet:h-12'>
                    <p className='text-sm font-bold
                    tablet:text-2xl'>포켓몬 도감채우기 게임</p>
                </div>
                    <p className='text-xs text-[#878787] mt-2 tablet:text-lg'>
                        2024.03~
                    </p>
                    <div className='mt-2 w-auto h-[1px] bg-[#878787]'></div>
                </div>
                <div className='w-auto h-[420px] px-4 mt-8 tablet:px-8'>
                <p className='text-base font-bold tablet:text-lg'>
                간단한 웹 게임을 통하여 코인을 모으고, 코인으로 뽑기를 하여 포켓몬 도감을 채우는 게임
                </p>
                <div className='mt-4 text-sm whitespace-pre-line'>
                    {`◦ Next.js와 React를 활용하여 개발한 웹 게임
                    ◦ 별도의 백엔드 서버 없이 React의 Context API를 사용하여 전역 상태 관리
                    ◦ 한국어 이름과 타입 정보를 포함한 포켓몬 상세 정보 표시
                    ◦ React Query를 사용하여 데이터 페칭 및 상태 관리 최적화
                    ◦ 로딩 시 Skeleton 컴포넌트를 사용하여 사용자 경험 향상`}
                </div>

                <div className='flex flex-row items-center gap-2 mt-6'>
                    <div className='w-2 h-4 bg-[#585D7C]'>                 
                    </div>
                    <Link className='flex flex-row gap-1 text-sm' href={"./project/pokemon"}>
                        <p>바로가기</p>
                        <img className='w-4 h-4 mt-1' src='./img/icon_link.webp' />
                    </Link>
                </div>

                <div className='mt-6 w-auto h-8 rounded-lg bg-[#E0FE6A] border border-[#1C1D1F]
                flex items-center '>
                    <p className='text-xs tablet:text-sm ml-4'>
                    Next.js, React, React Query, Tailwind CSS
                    </p>
                </div>
                
                </div>
                </div>

                <div className='w-full h-auto bg-[#ffffff] rounded-xl drop-shadow-lg px-4 py-1 border border-[#1C1D1F]
                '>
                <div className='px-4 mt-12 tablet:px-8'>
                <div className='w-44 h-8 bg-[#BC99FF] border border-[#1C1D1F] rounded-lg flex items-center justify-center 
                tablet:w-[300px] tablet:h-12'>
                    <p className='text-sm font-bold
                    tablet:text-2xl'>프로젝트명</p>
                </div>
                    <p className='text-xs text-[#878787] mt-2 tablet:text-lg'>
                        날짜
                    </p>
                    <div className='mt-2 w-auto h-[1px] bg-[#878787]'></div>
                </div>
                <div className='w-auto h-[420px] px-4 mt-8 tablet:px-8'>
                <p className='text-base font-bold tablet:text-lg'>
                간단한설명
                </p>
                <div className='mt-4 text-sm whitespace-pre-line'>
                    프로젝트설명
                </div>

                <div className='flex flex-row items-center gap-2 mt-6'>
                    <div className='w-2 h-4 bg-[#585D7C]'>                 
                    </div>
                    <Link className='flex flex-row gap-1 text-sm' href={"./project/poketmon"}>
                        <p>바로가기</p>
                        <img className='w-4 h-4 mt-1' src='./img/icon_link.webp' />
                    </Link>
                </div>

                <div className='mt-6 w-auto h-8 rounded-lg bg-[#E0FE6A] border border-[#1C1D1F]
                flex items-center '>
                    <p className='text-xs tablet:text-sm ml-4'>
                    사용한기술
                    </p>
                </div>
                
                </div>
                </div>

            </div>

        </div>
    )
}