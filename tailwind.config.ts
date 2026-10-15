import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ebf5ff",
          100: "#d6ebff",
          200: "#add6ff",
          300: "#70b5ff",
          400: "#3892fc",
          500: "#1877f2", // Iconic Facebook Blue icon color
          600: "#0866ff", // Facebook primary action blue
          700: "#0052cc",
          800: "#034099",
          900: "#073373",
          950: "#041e47",
        },
        corporate: {
          slate: "#0f172a",
          dark: "#0b1320",
          card: "#ffffff",
          muted: "#64748b",
          border: "#e2e8f0",
        },
        accent: {
          DEFAULT: "#ea580c",
          hover: "#c2410c",
          light: "#ffedd5",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
