"use client";

import Link from "next/link";
import { CoinContext } from "@components/PokeCoinProviders";
import { useContext, useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  NavbarLogoutBtn,
  NavbarBtn,
  NavbarIconMy,
  NavbarIconOverall,
  NavbarLoginBtn,
  NavbarCoin,
  NavbarIconGame,
  NavbarIconMenu,
} from "@/components/NavbarBtn";
import NavbarMenu from "@/components/NavbarMenu";

export default function PokeNavbar() {
  const { coin } = useContext(CoinContext);
  const [isLogin, setIsLogin] = useState(false);
  const [hover, setHover] = useState(false);
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  const logOut = () => {
    auth.signOut();
    router.push("/auth");
  };

  const onMenuClick = () => {
    setMenu((prevMenu) => !prevMenu);
    console.log("Menu clicked", !menu);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLogin(!!user); // 사용자가 있으면 true
    });
    return () => unsubscribe(); // 클린업
  }, []);

  return (
    <>
      <nav className="bg-[#F74D66] w-full h-full">
        <ul className="flex px-4 tablet:px-6 py-4">
          <div className="flex items-center w-full justify-between">
            <button onClick={onMenuClick} className="tablet:hidden">
              <NavbarIconMenu />
            </button>

            <div className="gap-2 mobile:hidden tablet:flex">
              <li>
                <NavbarBtn
                  path={"/All"}
                  icon={<NavbarIconOverall />}
                  text={"전체도감"}
                />
              </li>
              <li>
                <NavbarBtn
                  path={"/My"}
                  icon={<NavbarIconMy />}
                  text={"내도감"}
                />
              </li>
              <li>
                <NavbarBtn
                  path={"/game"}
                  icon={<NavbarIconGame />}
                  text={"게임"}
                />
              </li>
            </div>
            <li>
              <Link
                href="/"
                className="relative flex flex-col items-center justify-center rounded-xl size-14 tablet:size-16"
              >
                <Image
                  fill
                  alt="Logo image"
                  src="/img/logo.webp"
                  className="object-contain"
                />
              </Link>
            </li>
            <div className="flex gap-2">
              <li>
                <NavbarCoin
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  coin={coin}
                  hover={hover}
                />
              </li>
              <li className="mobile:hidden tablet:flex">
                {isLogin ? (
                  <NavbarLogoutBtn onclick={logOut} />
                ) : (
                  <NavbarLoginBtn />
                )}
              </li>
            </div>
          </div>
        </ul>
      </nav>
      {menu && <NavbarMenu />}
    </>
  );
}
