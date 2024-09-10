/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '360px',
        'tablet': '768px',
        'desktop': '1920px',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(1.2)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' }, // 처음과 끝은 원래 위치
          '25%': { transform: 'translateX(-10px)' },  // 왼쪽으로 10px 이동
          '75%': { transform: 'translateX(10px)' },   // 오른쪽으로 10px 이동
        },
      },
      animation: {
        sparkle: 'sparkle 0.3s ease-in-out',
        shake: 'shake 0.5s ease-in-out infinite'
      },
    },
  },
  plugins: [],
}

