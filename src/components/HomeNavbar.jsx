
"use client"

import { useState } from "react";

export default function HomeNavbar(){

    const [menu, setMenu] = useState(false);

    const onClick = () => {
        setMenu(!menu)
    }
    
    return (
        <div className="">
        <nav className="flex items-center p-4 bg-white tablet:p-4 tablet:flex tablet:justify-between\
        desktop:p-6 desktop:justify-between">
          <div className="flex justify-between">
            <p className="font-bold text-lg
            tablet:text-2xl">YJ'PORT</p>
         
            <button className="tablet:hidden" onClick={onClick}>
              <img className="w-5 h-5" src="./img/icon_menuberger.webp"/>
            </button>            
          </div>

   
          <ul className={`flex flex-col gap-y-2 ${menu ? 'block' : 'hidden'} 
          tablet:flex tablet:flex-row tablet:gap-4 tablet:pr-20 desktop:gap-6`}>
                <li className="w-full flex justify-center tablet:w-auto">
                <a className="text-center text-sm  hover:text-[#BC99FF] hover:font-bold
                tablet:text-base desktop:text-lg"
                href="#HomeAboutMe">
                AboutMe
                </a>
                </li>
                <li className="w-full flex justify-center tablet:w-auto">
                <a className="text-center text-sm hover:text-[#BC99FF] hover:font-bold
                tablet:text-base desktop:text-lg
                " href="#Skills">Skills</a>
                </li>
                <li className="w-full flex justify-center tablet:w-auto">
                <a className="text-sm text-center hover:text-[#BC99FF] hover:font-bold
                tablet:text-base desktop:text-lg
                " href="#HomeProject">Project</a>
                </li>            
            </ul>      

            <img className="mobile:hidden tablet:flex w-7 h-7 " src="./img/icon_heart.webp"/>

        </nav>
      </div>
    )
}