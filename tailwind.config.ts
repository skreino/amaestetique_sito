import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7EFE6",
        warm: "#FFF9F1",
        cocoa: "#3A2922",
        terracotta: "#C96F3D",
        sand: "#D8B89A",
        peach: "#E7B89D",
        sage: "#59624D"
      },
      fontFamily: {
        serif: ["var(--font-display)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-body)", "Manrope", "Montserrat", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 28px 80px rgba(58, 41, 34, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
