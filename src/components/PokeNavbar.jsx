"use client";

import Link from "next/link";
import { CoinContext } from "./PokeCoinProviders";
import { useContext, useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PokeNavbar() {
  const { coin } = useContext(CoinContext);
  const [isLogin, setIsLogin] = useState(false);
  const [hover, setHover] = useState(false);
  const router = useRouter();

  const logOut = () => {
    auth.signOut();
    router.push("/auth");
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
        <div className="flex justify-between w-full">
          <div className="flex gap-2">
            <li>
              <Link
                href="/All"
                className="size-12 flex flex-col items-center justify-center bg-[#F74D66] border border-black rounded-xl tablet:size-16
              hover:bg-black hover:text-[#F74D66]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 tablet:size-6"
                >
                  <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                </svg>
                <span className="text-[10px] tablet:text-sm font-semibold">
                  전체도감
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="My"
                className="size-12 flex flex-col items-center justify-center bg-[#F74D66] border border-black rounded-xl tablet:size-16
              hover:bg-black hover:text-[#F74D66]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 tablet:size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="text-[10px] tablet:text-sm font-semibold">
                  내도감
                </span>
              </Link>
            </li>
          </div>
          <Link
            href="/"
            className="relative size-12 flex flex-col items-center justify-center  rounded-xl tablet:size-16
             "
          >
            <Image
              fill
              className="object-cover"
              alt="Logo image"
              src="/img/logo.webp"
            />
          </Link>
          <div className="flex gap-2">
            <li>
              <Link
                href="/"
                className="size-12 flex flex-col items-center justify-center bg-[#F74D66] border border-black rounded-xl tablet:size-16
              hover:bg-black hover:text-[#F74D66]"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <Image
                  width={16}
                  height={16}
                  alt="coin icon"
                  src="/img/icon_coin.webp"
                  className="tablet:size-6"
                />
                <span className="text-[10px] tablet:text-sm font-semibold">
                  {hover ? "뽑기" : `${coin}`}
                </span>
              </Link>
            </li>
            <li>
              {isLogin ? (
                <button
                  onClick={logOut}
                  className="size-12 flex flex-col items-center justify-center bg-black rounded-xl text-[#F74D66] tablet:size-16
                hover:bg-[#F74D66] hover:text-black hover:border hover:border-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 tablet:size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="text-[10px] tablet:text-sm font-semibold text-[#F74D66] hover:text-black">
                    로그아웃
                  </span>
                </button>
              ) : (
                <Link
                  href="/auth"
                  className="size-12 flex flex-col items-center justify-center bg-black text-[#F74D66] rounded-xl tablet:size-16 hover:bg-[#F74D66] hover:text-black hover:border hover:border-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 tablet:size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="text-[10px] tablet:text-sm font-semibold #F74D66 hover:text-black">
                    로그인
                  </span>
                </Link>
              )}
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}
