/** @type {import('tailwindcss').Config} */
const light = require("./src/theme/light.js");
const dark = require("./src/theme/dark.js");
const typography = require("./src/theme/sj/typography.js");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: light,
      fill: { primary: "#abcabc" },
      fontFamily: typography,
    },
  },
  plugins: [],
};
