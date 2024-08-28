const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      xl: "1.125rem", // 18px
      "2xl": "1.25rem", // 20px
      "3xl": "1.5rem", // 24px
      "4xl": "1.75rem", // 28px
      "5xl": ["50px", "70px"],
      "6xl": "64px",
      "7xl": "85px",
      "8xl": "150px",
      "9xl": "250px",
    },
    screens: {
      xs: "320px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Neue-Haas-Grotesk-Text-Pro", "sans-serif"],
        serif: ["var(--font-juana)"],
      },
      colors: {
        primary: "#b74e36",
        secondary: "#c1c55e",
        tertiary: "#eeebe7",
        background: "#f5f3f1",
      },
      dropShadow: {
        project: "-6px 6px 0px rgba(193, 197, 94, 1)",
        previewImg: "-3px 3px 5px rgba(11, 27, 71, .20)",
        resume: "-3px 1px 5px rgba(11, 27, 71, .20)",
      },
      transitionProperty: {
        shadow: "drop-shadow",
        height: "max-height",
      },
    },
  },
  plugins: [],
};
