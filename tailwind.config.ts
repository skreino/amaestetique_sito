import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF4EA",
        warm: "#FFFCF7",
        cocoa: "#35231C",
        terracotta: "#D96F32",
        sand: "#F3DDC9",
        peach: "#E8C2A7",
        burnt: "#B95424",
        sage: "#59624D"
      },
      fontFamily: {
        serif: ["var(--font-display)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-body)", "Manrope", "Montserrat", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 28px 80px rgba(53, 35, 28, 0.14)",
        editorial: "0 18px 55px rgba(185, 84, 36, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
