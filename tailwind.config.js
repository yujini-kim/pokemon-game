/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
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

