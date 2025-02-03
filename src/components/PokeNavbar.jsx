"use client";

import Link from "next/link";
import { CoinContext } from "./PokeCoinProviders";
import { useContext } from "react";

export default function PokeNavbar() {
  const { coin } = useContext(CoinContext);

  return (
    <nav className="bg-[#F74D66] w-full h-full">
      <ul className="flex px-6 py-4">
        <li>
          <Link href="/">
            <img src="/img/logo.webp" className="w-20 h-20" />
          </Link>
        </li>
        <div className="flex gap-4 absolute right-6 top-6">
          <li>
            <Link
              href="/book"
              className="flex flex-col items-center justify-center bg-[#F74D66] border border-black w-16 h-16 rounded-xl"
            >
              <img src="/img/icon_book.webp" className="w-6 h-6" />
              <span className="text-base font-semibold">도감</span>
            </Link>
          </li>
          <li>
            <Link
              href="/game"
              className="flex flex-col items-center justify-center bg-[#F74D66] border border-black w-16 h-16 rounded-xl"
            >
              <img src="/img/icon_game.webp" className="w-6 h-6" />
              <span className="text-base font-semibold">게임</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex flex-col items-center justify-center bg-[#F74D66] border border-black w-16 h-16 rounded-xl"
            >
              <img src="/img/icon_coin.webp" className="w-6 h-6" />
              <span className="text-base font-semibold">{coin}</span>
            </Link>
          </li>
          <li>
            <Link
              href="/signup"
              className="flex flex-col items-center justify-center bg-black w-16 h-16 rounded-xl"
            >
              <img src="/img/icon_name_pink.webp" className="w-6 h-6" />
              <span className="text-base font-semibold text-white">로그인</span>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
