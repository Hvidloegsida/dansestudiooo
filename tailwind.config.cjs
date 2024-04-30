/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
  theme: {
    extend: {
      fontFamily: {
        prompt: ["Prompt"],
        omnium: ["Omnium"],
      },
      colors: {
        rod: {
          50: "#FFFAFA",
          100: "#FFFAFA",
          200: "#FFFAFA",
          300: "#FFF5F5",
          400: "#FEF1F0",
          500: "#FFEEEE",
          600: "#FFD1D1",
          700: "#FFA8A8",
          800: "#FF7575",
          900: "#EC0001",
          950: "#AD0000",
        },
        hvid: {
          50: "#F2F2F2",
          100: "#E8E8E8",
          200: "#CCCCCC",
          300: "#AAAAAA",
          400: "#7D7D7D",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        gron: {
          50: "#F1F3EC",
          100: "#E0E4D7",
          200: "#C3CCB3",
          300: "#A6B18B",
          400: "#879565",
          500: "#646F4B",
          600: "#51583C",
          700: "#3C432D",
          800: "#292E20",
          900: "#13150E",
          950: "#0B0C08",
        },
      },
    },
  },
};
