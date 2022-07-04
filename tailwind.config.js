/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#011627",
        fontColor: "#607B96",
        white: "#E5E9F0",
        blue: "#4D5BCE",
        green: "#43D9AD",
        orange: "#E99287",
        stroke: "#1E2D3D",
      },
      fontFamily: {
        fira: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
