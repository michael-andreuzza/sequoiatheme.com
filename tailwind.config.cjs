/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontSize: {
      xs: [
        "0.75rem",
        {
          lineHeight: "1rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "2rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "2rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "3xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "4xl": [
        "2.5rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "5xl": [
        "3rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "6xl": [
        "3.75rem",
        {
          lineHeight: "1",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "1.1",
        },
      ],
      "8xl": [
        "6rem",
        {
          lineHeight: "1",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "1",
        },
      ],
    },
    extend: {
      backgroundImage:   {
        sequoia: "linear-gradient( 229.7deg, #fdfdfe 14.85 % , #ffbb88 20.61 % , #ff7cba 26.17 % , #887bff 31.93%, #03c7f6 46.54 % , #0f1014 54.36%)",
      },
      colors: {
        //Base Colors
        moonlightBase: "#0F1014",
        moonlightInterface: "#111216",
        moonlightOverlay: "#131317",
        moonlightSoft: "#43444D",
        moonlightSlight: "#575861",
        moonlightText: "#868690",
        moonlightFocusLow: "#121216",
        moonlightFocusMedium: "#1A1B1F",
        moonlightFocusHigh: "#1F1F24",
        //Moonlight Accents
        moonlightWhite: "#fdfdfe",
        moonlightStone: "#9898a6",
        moonlightOrange: "#ffbb88",
        moonlightPink: "#f58ee0",
        moonlightIndigo: "#c58fff",
        moonlightBlue: "#8eb6f5",
        //Monochrome Accents
        monochromeKashmir: "#626983",
        monochromeSlate: "#7C829D",
        monochromeLogan: "#999EB2",
        monochromeCadet: "#B6BAC8",
        monochromeCat: "#D3D5DE",
        monochromeCloud: "#E2E4ED",
      },
       fontFamily: {
        sans: ["Neue Haas Grotesk Text Pro", ...defaultTheme.fontFamily.sans],
        display: ["Neue Power", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
