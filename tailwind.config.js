/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      brown: "#734D2A",
      green: "#679955",
      yellow: "#E7DE55",
      "light-brown-gray": "#F1EEEA",
    },
  },
  plugins: [],
};
