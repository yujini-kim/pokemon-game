import { Noto_Sans_KR, Poppins } from "next/font/google";
import "./globals.css";
import LoginBtn from "@/components/LoginBtn";

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const EgFont = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | 김유진",
    default: "프론트엔드 개발자 포트폴리오 | 김유진",
  },
  description: "Yujin Portfolio",
};
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKR.className} ${EgFont.className} antialiased`}
      >
        <LoginBtn />
        {children}
      </body>
    </html>
  );
}
