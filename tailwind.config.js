/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean: "#003B73",
        cyan: "#00A8CC",
        sand: "#F8F5F0",
        gold: "#FFB84C",
        palm: "#2F855A",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        body: ['"DM Sans"', "sans-serif"],
        accent: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};
