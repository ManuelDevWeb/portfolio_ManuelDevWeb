/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Any file inside, any name and extension should be: js, ts, jsx, tsx. Can use tailwindcss
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
