import Image from 'next/image'
import '@styles/globals.css'
import WhiteBar from "@components//WhiteBar";
import SkillIcon from "@components/SkillIcon";
import ProjectBox from "@components/ProjectBox";
import Link from 'next/link';

export const metadata = {
  title: '프론트엔드 개발자 포트폴리오',
}

export default function Home() {
  return (
    <div className="bg-[#181818] min-h-screen grid desktop:grid-cols-12 tablet:grid-cols-8 mobile:grid-cols-4">

      {/* 상단 */}
      <div className="
        mobile:col-span-4 mobile:mt-12 mobile:ml-4
        tablet:col-span-8 tablet:ml-6
        desktop:col-span-12 desktop:text-2xl desktop:ml-[350px]
        text-white">
        Front-end Developer
      </div>

      <WhiteBar />

      {/* 유진 포트폴리오 */}
      <div className="full-span-center mt-60">
        <span className="yujinText text-[#A0E800]">YUJIN</span>
      </div>

      <div className="full-span-center">
        <span className="yujinText text-white">PORTFOLIO</span>
      </div>

      {/* 화살표 이미지 */}
      <div className="full-span-center mobile:mt-60 tablet:mt-90 desktop:mt-70">
        <img className="w-8 h-8" src="./img/arrow_down.webp" alt="Arrow Down" />
      </div>

      {/* 스크롤 */}
      <div className="full-span-center">
        <span className="mobile:text-xs text-white text-base">SCROLL</span>
      </div>

      <div className="mobile:h-40 tablet:h-44 desktop:h-44"></div>

      {/* 이름과 사진 테블릿, 데스크탑 버전 */}
      <div className="hidden tablet:flex col-span-full flex-row mobile:ml-2 tablet:ml-6 desktop:ml-96 items-start">
        <div className="mobile:w-40 mobile:h-40 tablet:w-60 tablet:h-60 desktop:w-60 desktop:h-60 rounded-full overflow-hidden">
          <img className="w-full h-full object-cover" src="./img/나.webp" alt="Yujin" />
        </div>

        <div className="flex flex-col ml-6 mt-8 space-y-6 text-white">
          <span className="text-4xl ml-6">김유진</span>
          <div className="flex flex-col ml-8 space-y-4">
            <div className="flex items-center">
              <img className="w-4 h-4" src="./img/mail.webp" alt="Mail" />
              <span className="informationText">kingyujin56@지메일</span>
            </div>

            <Link href="https://github.com/yujini-kim">        
            <div className="flex items-center">
              <img className="w-4 h-4" src="./img/git.webp" alt="GitHub" />
              <span className="informationText">yujini-kim</span>
            </div>
            </Link>
    
          </div>

          <div className="ml-8">
            안녕하세용 미래의 개발짱 김유진 입니다<br />
            영훈썜보다 잘하게 되는 그날까지
          </div>
        </div>
      </div>

    {/* 이름과 사진 모바일 버전 */}
    <div className="flex-col col-span-full tablet:hidden">
      <div className="flex">
        <div className="col-span-full flex flex-row mobile:ml-2 items-start">
          <div className="mobile:w-40 mobile:h-40 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src="./img/나.webp" alt="Yujin" />
          </div>

          <div className="flex flex-col ml-6 mt-8 space-y-6 text-white">
            <span className="text-4xl">김유진</span>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <img className="w-4 h-4" src="./img/mail.webp" alt="Mail" />
                <span className="informationText">kingyujin56@지메일</span>
              </div>
              <Link href="https://github.com/yujini-kim">   
              <div className="flex items-center">
                <img className="w-4 h-4" src="./img/git.webp" alt="GitHub" />
                <span className="informationText">yujini-kim</span>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="ml-8 mt-4 text-white">
          안녕하세용 미래의 개발짱 김유진 입니다<br />
          영훈썜보다 잘하게 되는 그날까지
        </div>
      </div>
    </div>

      <WhiteBar />

      {/* 스킬 및 경험 */}
      <div className="col-span-full flex flex-col space-y-16
      desktop:flex-row desktop:ml-96 desktop:space-x-96 mt-20">
        <div className="mobile:ml-4">
          <span className="skillText">SKILLS ABILITY</span>
          <div className="flex mobile:space-x-2 desktop:space-x-4 mt-4">
            <SkillIcon src="./img/js.webp" alt="JavaScript" />
            <SkillIcon src="./img/HTML.webp" alt="HTML" />
          </div>
        </div>
        <div className="mobile:ml-4 mb-40">
          <span className="skillText">EXPERIENCE</span>
        </div>
      </div>


      <div className="col-span-full flex justify-center desktop:mt-[535px]">
        <span className="mobile:text-5xl desktop:text-[56px] text-white font-bold">PROJECT</span>
      </div>

      {/* 프로젝트 박스 */}
      <div className="col-span-full flex justify-start space-x-8 mt-20 mb-[90px] overflow-x-auto scrollbar-hide snap-x snap-mandatory
      tablet:ml-3 desktop:ml-60">
        <div className="snap-center flex-shrink-0">
          <ProjectBox
            src="./img/picachu.webp"
            alt="PROJECT1"
            title="포켓몬 도감 모으기 게임"
            description="간단한 설명"
            link="./project/poketmon"
          />
        </div>
        <div className="snap-center flex-shrink-0">
          <ProjectBox
            src="./img/preparing.webp"
            alt="PROJECT2"
            title="준비중"
            description="간단한 설명"
            link=""
          />
        </div>
        <div className="snap-center flex-shrink-0">
          <ProjectBox
            src="./img/preparing.webp"
            alt="PROJECT3"
            title="준비중"
            description="간단한 설명"
            link=""
          />
        </div>
      </div>

    </div>
  );
}