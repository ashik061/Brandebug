import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1300px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "60px",
        },
      },
      colors: {
        "primary": "#fa6a6a",
        "secondary":"#fed466",
        "thirdColor": "#58afb9",
        "bg-1": "#fefefe",
        "bg-2": "#f5f5f5",
        "text-1": "#2b4055",
        "text-2": "#2b2b2b"

      }
    },
  },
  plugins: [],
};
export default config;


