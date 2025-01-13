@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        paragraph: "rgb(85, 85, 85)",
      },
      transitionTimingFunction: {
        ease: "ease-in-out",
      },
      transitionDuration: {
        300: "300ms",
      },
    },
  },
  plugins: [
    // from the indec.css file
    function ({ addBase }) {
      addBase({
        "*": { margin: "0", padding: "0" },
      });
    },
  ],
};
