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
        cream: "#faf4ee",
        brown: "#473b2f",
        pistachio: "#dce2cf",
        skyBlue: "#B6DBE6",
        green: "#7A9278"
      },
      fontFamily: {
        dosis: ["Dosis", "Verdana", "sans-serif"],
        jua: ["Jua", "Times", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
