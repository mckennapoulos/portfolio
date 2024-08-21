/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Neue-Haas-Grotesk-Text-Pro", "sans-serif"],
        serif: ["var(--font-juana)"],
      },
      colors: {
        primary: "#b74e36",
        secondary: "#c1c55e",
        tertiary: "#eeebe7",
      },
    },
  },
  plugins: [],
};
