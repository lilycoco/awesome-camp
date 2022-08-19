/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oleo Script", "cursive", ...defaultTheme.fontFamily.sans],
      },
      width: {
        112: "28rem",
        125: "31.25rem",
        160: "40rem",
      },
    },
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      brown: "#734D2A",
      green: "#4A703D",
      yellow: "#E7DE55",
      "light-brown-gray": "#F1EEEA",
    },
  },
  plugins: [],
};
