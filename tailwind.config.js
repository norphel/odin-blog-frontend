/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-image": "url('/src/assets/images/main-image.webp')",
      },
      fontFamily: {
        averiaLibre: ["Averia Libre", "sans-serif"],
      },
    },
  },
  plugins: [],
};
