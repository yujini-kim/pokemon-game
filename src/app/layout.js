import { CoinProvider } from "@components/PokeCoinProviders";
import PokeNavbar from "@/components/PokeNavbar";
import "./globals.css";

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
      <body className={`antialiased`}>
        <CoinProvider>
          <PokeNavbar />
          {children}
        </CoinProvider>
      </body>
    </html>
  );
}
