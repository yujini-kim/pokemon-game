import Link from "next/link";

export default function HomeAboutMe({ }) {
    return (
      <div id="HomeAboutMe">
        <div className="flex justify-center mt-72">
          <p className="text-[#1C1D1F] text-4xl font-bold
          tablet:text-6xl">ABOUT ME</p>
        </div>

        <div className="flex justify-center gap-6 mt-20 desktop:gap-16">
          <img className="w-32 h-40 tablet:w-40 tablet:h-52 rounded-md" src="./img/img.webp"/>

          <div className="flex flex-col justify-center space-y-1">
            <div className="flex gap-1">
             <img className="w-5 h-5 fill-[#1C1D1F]" src="./img/icon_name.webp" />
             <p className="text-sm tablet:text-lg">김유진</p>
            </div>

            <div className="flex gap-1">
             <img className="w-5 h-5 fill-[#1C1D1F]" src="./img/icon_phone.webp" />
             <p className="text-sm tablet:text-lg">010-0000-0000</p>
            </div>

            <div className="flex gap-1">
             <img className="w-5 h-5 fill-[#1C1D1F]" src="./img/icon_location.webp" />
             <p className="text-sm tablet:text-lg">인천서구</p>
            </div>

            <div className="flex gap-1">
             <img className="w-5 h-5 fill-[#1C1D1F]" src="./img/icon_mail.webp" />
             <p className="text-sm tablet:text-lg">kingyujin56</p>
            </div>

            
            <Link href={"https://github.com/yujini-kim"} className="flex gap-1">
             <img className="w-5 h-5 fill-[#1C1D1F]" src="./img/icon_git.webp" />
             <p className="text-sm tablet:text-lg">yujini-kim</p>
            </Link>
          </div>

        </div>
      </div>
    );
  }