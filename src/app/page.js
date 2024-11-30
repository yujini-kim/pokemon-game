import HomeNavbar from "@/components/HomeNavbar";
import Skills from "@/components/HomeSkills";
import HomeAboutMe from "@/components/HomeAboutMe"
import HomeProject from "@/components/HomeProject"


export const metadata = {
  title: '프론트엔드 개발자 포트폴리오',
}

export default function Home() {


  return (
    
      <div> 
        <HomeNavbar />

        <div className="flex flex-col gap-y-2 justify-center items-center mt-72">
          <p className="text-5xl font-bold text-[#BC99FF] text-stroke
          tablet:text-7xl desktop:text-8xl">
            YUJIN</p>
          <p className="text-5xl font-bold text-[#E0FE6A] text-stroke
          tablet:text-7xl desktop:text-8xl">PORTPOILO</p>
        </div>

        <div className='flex flex-col items-center mt-20
'>
          <div className='text-center text-sm
        tablet:text-lg
        '>
            안녕하세요<br/>성장하고 있는 프론트엔드 개발자 김유진 입니다.
          </div>
        </div>

        <a href="#HomeAboutMe" className="mt-52 flex flex-col items-center space-y-1 justify-center">
          <p className="text-lg">SCROLL</p>
          <img className="w-7 h-7 animate-bounce" src="./img/icon_arrow.webp" alt="Scroll Down" />
        </a>

        <HomeAboutMe />
        <Skills />
        <HomeProject />
            

      </div>

      
  );
}