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
        bowls:
          "url('src/assets/background/luisa-brimble-2RrBE90w0T8-unsplash-blur.jpg')",
        diaryBg:
          "url('src/assets/background/top-view-salad-plate-with-copy-space.jpg')",
      },
    },
  },
  plugins: [],
};
