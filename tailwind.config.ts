import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
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
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;
