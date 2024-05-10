import type { Config } from "tailwindcss";

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
        "WindSong": ['WindSong', 'serif'],
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
        "background": "#1B181A"
      }
    },
  },
  plugins: [],
};
export default config;
