/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main_color: "#F14119",
        text_color: "#F14119",
        secondary_color: "#F14119",
      },
      fontFamily: {
        loto: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
