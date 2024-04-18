/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollbar: ["dark"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
