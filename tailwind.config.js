/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        first: "#fce38a",
        "dark-blue-light": "#0e5f76",
        second: "#083d56",
        "dark-blue": "#0c2233",
      },
      colors: {
        first: "#fce38a",
        "dark-blue-light": "#0e5f76",
        second: "#083d56",
        "dark-blue": "#0c2233",
      },
      backgroundImage: {
        diaryBg:
          "url('src/assets/background/top-view-salad-plate-with-copy-space.jpg')",
        homeBg:
          "url('src/assets/background/green-weights-blue-background-with-copy-space.jpg')",
        ImprintBg:
          "url('src/assets/background/weights-meter-bottle-water-with-copy-space.jpg')",
        LoginBg:
          "url('src/assets/background/top-view-weights-meter-with-copy-space.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
