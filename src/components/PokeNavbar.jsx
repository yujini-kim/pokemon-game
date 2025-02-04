"use client";

import Link from "next/link";
import { CoinContext } from "./PokeCoinProviders";
import { useContext, useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function PokeNavbar() {
  const { coin } = useContext(CoinContext);
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const logOut = () => {
    auth.signOut();
    router.push("/signup");
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLogin(!!user); // 사용자가 있으면 true
    });
    return () => unsubscribe(); // 클린업
  }, []);

  return (
    <nav className="bg-[#F74D66] w-full h-full">
      <ul className="flex px-6 py-4">
        <li>
          <Link href="/">
            <img src="/img/logo.webp" className="size-14 tablet:size-20" />
          </Link>
        </li>
        <div className="flex gap-1 absolute right-3 top-5 tablet:right-6 tablet:top-6 tablet:gap-4">
          <li>
            <Link
              href="/book"
              className="size-12 flex flex-col items-center justify-center bg-[#F74D66] border border-black rounded-xl tablet:size-16"
            >
              <img src="/img/icon_book.webp" className="size-4 tablet:size-6" />
              <span className="text-xs tablet:text-base font-semibold">
                도감
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/game"
              className="size-12 flex flex-col items-center justify-center bg-[#F74D66] border border-black rounded-xl tablet:size-16"
            >
              <img src="/img/icon_game.webp" className="size-4 tablet:size-6" />
              <span className="text-xs tablet:text-base font-semibold">
                게임
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="size-12 flex flex-col items-center justify-center bg-[#F74D66] border border-black rounded-xl tablet:size-16"
            >
              <img src="/img/icon_coin.webp" className="size-4 tablet:size-6" />
              <span className="text-xs tablet:text-base font-semibold">
                {coin}
              </span>
            </Link>
          </li>
          <li>
            {isLogin ? (
              <button
                onClick={logOut}
                className="size-12 flex flex-col items-center justify-center bg-black rounded-xl tablet:size-16"
              >
                <img
                  src="/img/icon_name_pink.webp"
                  alt="로그아웃"
                  className="size-4 tablet:size-6"
                />
                <span className="text-xs tablet:text-base font-semibold text-white">
                  로그아웃
                </span>
              </button>
            ) : (
              <Link
                href="/signup"
                className="size-12 flex flex-col items-center justify-center bg-black rounded-xl tablet:size-16"
              >
                <img
                  src="/img/icon_name_pink.webp"
                  alt="로그인"
                  className="size-4 tablet:size-6"
                />
                <span className="text-xs tablet:text-base font-semibold text-white">
                  로그인
                </span>
              </Link>
            )}
          </li>
        </div>
      </ul>
    </nav>
  );
}
