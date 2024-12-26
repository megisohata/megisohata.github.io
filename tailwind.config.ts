import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f4f1e5",
        pistachio: "#dce2cf",
        forest: "#012627",
      },
      fontFamily: {
        dosis: ["Dosis", "Verdana", "sans-serif"],
        jua: ["Jua", "Times", "serif"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
