import Link from "next/link"

export default function HomeProject(){
    return(
        <div id="HomeProject" className="px-6">
            <div className="HomeTextDiv">
            <p className="HomeText">PROJECT</p>
            </div>

            <div className="projectBox">

                <div className='projectBgBox'>
                <div className='px-4 mt-12 tablet:px-8'>
                <div className='projectTitle'>
                    <p className='projectTitleText'>포켓몬 도감채우기 게임</p>
                </div>
                    <p className='projectDateText'>
                        2024.03~
                    </p>
                    <div className='dividingLine'></div>
                </div>
                <div className='descriptionBox'>
                <p className='descriptionBoxText'>
                간단한 웹 게임을 통하여 코인을 모으고, 코인으로 뽑기를 하여 포켓몬 도감을 채우는 게임
                </p>
                <div className='mt-4 text-sm whitespace-pre-line'>
                    {`◦ Next.js와 React를 활용하여 개발한 웹 게임
                    ◦ 별도의 백엔드 서버 없이 React의 Context API를 사용하여 전역 상태 관리
                    ◦ 한국어 이름과 타입 정보를 포함한 포켓몬 상세 정보 표시
                    ◦ React Query를 사용하여 데이터 페칭 및 상태 관리 최적화
                    ◦ 로딩 시 Skeleton 컴포넌트를 사용하여 사용자 경험 향상`}
                </div>

                <div className='projectButton'>
                    <div className='projectButtonBg'>                 
                    </div>
                    <Link className='flex flex-row gap-1 text-sm' href={"./project/pokemon"}>
                        <p>바로가기</p>
                        <img className='w-4 h-4 mt-1' src='./img/icon_link.webp' />
                    </Link>
                </div>

                <div className='projectSkillsBg'>
                    <p className='projectSkillsText'>
                    Next.js, React, React Query, Tailwind CSS
                    </p>
                </div>
                
                </div>
                </div>

                <div className='projectBgBox'>
                <div className='px-4 mt-12 tablet:px-8'>
                <div className='projectTitle'>
                    <p className='projectTitleText'>프로젝트명</p>
                </div>
                    <p className='projectDateText'>
                        날짜
                    </p>
                    <div className='dividingLine'></div>
                </div>
                <div className='descriptionBox'>
                <p className='descriptionBoxText'>
               간단한설명
                </p>
                <div className='mt-4 text-sm whitespace-pre-line'>
                  프로젝트설명
                </div>

                <div className='projectButton'>
                    <div className='projectButtonBg'>                 
                    </div>
                    <Link className='flex flex-row gap-1 text-sm' href={"./project/pokemon"}>
                        <p>바로가기</p>
                        <img className='w-4 h-4 mt-1' src='./img/icon_link.webp' />
                    </Link>
                </div>

                <div className='projectSkillsBg'>
                    <p className='projectSkillsText'>
                    사용한기술
                    </p>
                </div>
                
                </div>
                </div>

            </div>

        </div>
    )
}