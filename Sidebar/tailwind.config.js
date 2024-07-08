/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Tilt: ["Tilt", "sans-serif"],
        MuolLight: ["MuolLight", "sans-serif"],
        Lobster: ["Lobster", "sans-serif"],
        Permanent: ['Permanent Marker', 'cursive'],
        Monoton: ['Monoton', 'sans-serif'],
        Kaushan: ['Kaushan Script', 'cursive'],
      },
      colors:{
        'dark-purple': '#481d70',
        'ligth-white': 'rgba(255,255,255,0.18)',
      }
    },
  },
  plugins: [],
}

