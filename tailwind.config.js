/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#fce38a',
        'secondary': '#0e5f76',
        'dark-blue-light': '#083d56',
        'dark-blue': '#0c2233',
      },
    },
  },
  plugins: [],
};
