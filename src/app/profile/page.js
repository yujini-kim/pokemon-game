"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // 쿠키 포함
        });

        const data = await res.json();

        if (res.ok) {
          setUser(data.user);
        } else {
          // 인증되지 않은 사용자일 경우 로그인 페이지로 이동
          router.push("/login");
        }
      } catch (error) {
        console.error("Profile fetch error:", error);
        router.push("/login");
      }
    };

    fetchProfile();
  }, [router]);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">프로필</h1>
        <p className="mb-2">
          <strong>ID:</strong> {user.id}
        </p>
        <p className="mb-2">
          <strong>아이디:</strong> {user.username}
        </p>
        <p className="mb-2">
          <strong>가입일:</strong>{" "}
          {new Date(user.createdAt).toLocaleDateString()}
        </p>
        {/* 로그아웃 버튼 등 추가 기능 구현 가능 */}
      </div>
    </div>
  );
}
