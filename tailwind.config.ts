import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";
import colors from 'tailwindcss/colors';

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Literata": ['Literata', 'serif'],
      },
      colors: {
        "primary": {
          100: "#ffd5ee",
          200: "#ffabde",
          300: "#ff81cd",
          400: "#ff57bd",
          500: "#ff2dac",
          600: "#cc248a",
          700: "#991b67",
          800: "#661245",
          900: "#330922"
        },
        "background": {
          100: "#d1d1d1",
          200: "#a4a3a3",
          300: "#767476",
          400: "#494648",
          500: "#1b181a",
          600: "#161315",
          700: "#100e10",
          800: "#0b0a0a",
          900: "#050505"
        },
      }
    },
  },
  plugins: [addVariablesForColors],
}

