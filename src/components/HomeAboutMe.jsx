import Link from "next/link";

export default function HomeAboutMe({ }) {
    return (
      <div id="HomeAboutMe">
        <div className="HomeTextDiv">
          <p className="HomeText">ABOUT ME</p>
        </div>

        <div className="flex justify-center gap-6 mt-20 desktop:gap-16">
          <img className="MyPhoto" src="./img/img.webp"/>

          <div className="HomeAboutMeInfo">
            <div className="flex gap-1">
             <img className="HomeAboutMeIcon" src="./img/icon_name.webp" />
             <p className="HomeAboutMeIconText">김유진</p>
            </div>

            <div className="flex gap-1">
             <img className="HomeAboutMeIcon" src="./img/icon_phone.webp" />
             <p className="HomeAboutMeIconText">010-0000-0000</p>
            </div>

            <div className="flex gap-1">
             <img className="HomeAboutMeIcon" src="./img/icon_location.webp" />
             <p className="HomeAboutMeIconText">인천서구</p>
            </div>

            <div className="flex gap-1">
             <img className="HomeAboutMeIcon" src="./img/icon_mail.webp" />
             <p className="HomeAboutMeIconText">kingyujin56</p>
            </div>

            
            <Link href={"https://github.com/yujini-kim"} className="flex gap-1">
             <img className="HomeAboutMeIcon" src="./img/icon_git.webp" />
             <p className="HomeAboutMeIconText">yujini-kim</p>
            </Link>
          </div>

        </div>
      </div>
    );
  }