/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('../public/assets/hero.avif')",
      },
      colors: {
        "royal-blue": "#4169e1",
        gold: "#ffd700",
        burgundy: "#800020",
        auburn: "#a52a2a",
        ivory: "#fffff0",
        charcoal: "#36454f",
      },
    },
  },
  plugins: [],
};
