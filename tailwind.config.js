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
    },
  },
  plugins: [],
}

