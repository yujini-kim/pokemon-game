
"use client"

import { useState } from "react";

export default function HomeNavbar(){

    const [menu, setMenu] = useState(false);

    const onClick = () => {
        setMenu(!menu)
    }
    
    return (
        <div className="">
        <nav className="navbar">
          <div className="flex justify-between items-center">
            <p className="navbarLogoText">YJ'PORT</p>
         
            <button className="tablet:hidden" onClick={onClick}>
              <img className="w-5 h-5" src="./img/icon_menuberger.webp"/>
            </button>            
          </div>

   
          <ul className={`navbarUl ${menu ? 'flex' : 'hidden'} transition-all duration-300`}>
                <li className="navbarList">
                <a className="navbarListText"href="#HomeAboutMe">AboutMe</a>
                </li>
                <li className="navbarList">
                <a className="navbarListText" href="#Skills">Skills</a>
                </li>
                <li className="navbarList">
                <a className="navbarListText" href="#HomeProject">Project</a>
                </li>            
            </ul>      

            <img className="navbarIcon" src="./img/icon_heart.webp"/>

        </nav>
      </div>
    )
}