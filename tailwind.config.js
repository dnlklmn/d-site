/** @type {import('tailwindcss').Config} */
const light = require("./src/theme/light.js");
const dark = require("./src/theme/dark.js");
const typography = require("./src/theme/sj/typography.js");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: light,
    fontFamily: typography,
  },
  plugins: [],
};
