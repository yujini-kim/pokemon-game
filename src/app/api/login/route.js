import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // 입력값 검증
    if (!username || !password) {
      return new Response(
        JSON.stringify({ message: "아이디와 비밀번호를 입력해주세요." }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // 사용자 찾기
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return new Response(
        JSON.stringify({ message: "존재하지 않는 사용자입니다." }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // 비밀번호 검증
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ message: "비밀번호가 일치하지 않습니다." }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // JWT 생성
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: "1h" } // 1시간 동안 유효
    );

    // 토큰을 HTTP Only 쿠키로 설정 (보안 강화)
    const serialized = serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600, // 1시간
      sameSite: "strict",
      path: "/",
    });

    return new Response(JSON.stringify({ message: "로그인에 성공했습니다." }), {
      status: 200,
      headers: {
        "Set-Cookie": serialized,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
