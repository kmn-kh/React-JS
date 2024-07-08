/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      Antonsc: ["Anton SC", "sans-serif"],
      Raleway:["Raleway","sans-serif"],
      Anton:["Anton","sans-serif"],
    },
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'xm': '1px 1px 10px 2px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

