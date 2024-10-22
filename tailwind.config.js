/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-green": "#8DC63F",
        "main-black": "#373737",
      },
    },
  },
  plugins: [],
};
