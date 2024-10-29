import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cream": "#f4f1e5",
        "pistachio": "#dce2cf",
        "forest": "#012627",
        "pink": "#ddacaa"
      },
      fontFamily:{
        dosis: ["Dosis", "Verdana", "sans-serif"],
        jua: ["Jua", "Times", "serif"]
      }
    },
  },
  plugins: [],
};
export default config;
