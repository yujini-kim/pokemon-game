/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html",
    "./src/css/**/*.css"
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

