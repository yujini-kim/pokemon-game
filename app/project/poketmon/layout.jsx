export const metadata = {
    title:'포켓몬 도감 채우기 게임',
    description: '코인을 모아 포켓몬 도감을 채우는 게임 입니다',
  }
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }
  