"use client";
import { auth } from "@/lib/firebase";
import { useState, useEffect } from "react";

export default function NavbarMenu() {
  const [isLogin, setIsLogin] = useState(false);
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
    <>
      <ul className="flex flex-col items-center bg-[#F74D66] py-2 text-xs gap-1">
        <a
          href="/All"
          className="hover:bg-black hover:text-[#F74D66] w-full p-1 text-center"
        >
          전체도감
        </a>
        <a
          href="/My"
          className="hover:bg-black hover:text-[#F74D66] w-full p-1 text-center"
        >
          내도감
        </a>
        <a
          href="/game"
          className="hover:bg-black hover:text-[#F74D66] w-full p-1 text-center"
        >
          게임
        </a>
        <li className="hover:bg-black hover:text-[#F74D66] w-full p-1 text-center">
          {isLogin ? "로그아웃" : "로그인"}
        </li>
      </ul>
    </>
  );
}
