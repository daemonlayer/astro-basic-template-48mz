/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#008CFF",   // main brand blue
          light: "#33A6FF",     // optional lighter tone
          dark: "#006ACC",      // optional darker tone
        },
        black: {
          DEFAULT: "#010400",   // main text color
        },
        accent: {
          DEFAULT: "#F96900",   // orange accent
          light: "#FF8C33",     // optional lighter
          dark: "#C94E00",      // optional darker
        },
      },
      fontFamily: {
        sans: ["Montserrat", "Inter", ...defaultTheme.fontFamily.sans],
        heading: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Bebas Neue", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        marquee: "marquee 50s linear infinite",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 2.5rem))",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
