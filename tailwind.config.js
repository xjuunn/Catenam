/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["light", "dark", "winter", "nord"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
