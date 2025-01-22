import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { parse } from "cookie";

const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(request) {
  try {
    const { cookie } = request.headers.get("cookie")
      ? { cookie: request.headers.get("cookie") }
      : { cookie: "" };

    if (!cookie) {
      return new Response(
        JSON.stringify({ message: "인증되지 않은 사용자입니다." }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const parsedCookies = parse(cookie);
    const token = parsedCookies.token;

    if (!token) {
      return new Response(
        JSON.stringify({ message: "인증되지 않은 사용자입니다." }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        select: { id: true, username: true, createdAt: true },
      });

      if (!user) {
        return new Response(
          JSON.stringify({ message: "사용자를 찾을 수 없습니다." }),
          {
            status: 404,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      return new Response(JSON.stringify({ user }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("JWT 검증 오류:", error);
      return new Response(
        JSON.stringify({ message: "유효하지 않은 토큰입니다." }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
