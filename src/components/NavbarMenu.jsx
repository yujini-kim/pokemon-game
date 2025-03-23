"use client";
import { auth } from "@/lib/firebase";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function NavbarMenu({ isOpen }) {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLogin(!!user); // 사용자가 있으면 true
    });
    return () => unsubscribe(); // 클린업
  }, []);

  const logOut = () => {
    auth.signOut();
    router.push("/auth");
  };

  return (
    <ul
      className={`transition-all duration-500 ease-in-out overflow-hidden flex flex-col items-center bg-[#F74D66] py-2 text-xs gap-1 tablet:hidden
        ${isOpen ? "max-h-60 opacity-100" : "hideen max-h-0 opacity-0"}
      `}
    >
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
      <a
        onClick={() => (isLogin ? logOut() : router.push("/auth"))}
        className="hover:bg-black hover:text-[#F74D66] w-full p-1 text-center"
      >
        {isLogin ? "로그아웃" : "로그인"}
      </a>
    </ul>
  );
}
