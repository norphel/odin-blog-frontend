import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { opacity: 0 },
          "10%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(15px)", opacity: 0 },
        },
      },
      animation: {
        scroll: "scroll 2.2s cubic-bezier(0.15, 0.41, 0.69, 0.94) infinite",
      },
      fontFamily: {
        averiaLibre: ["Averia Libre", "sans-serif"],
      },
      backgroundImage: {
        img1Small: "url('src/assets/images/1-s.webp')",
        img2Small: "url('src/assets/images/2-s.webp')",
        img3Small: "url('src/assets/images/3-s.webp')",
        img4Small: "url('src/assets/images/4-s.webp')",
        img5Small: "url('src/assets/images/5-s.webp')",
        img1Medium: "url('src/assets/images/1-m.webp')",
        img2Medium: "url('src/assets/images/2-m.webp')",
        img3Medium: "url('src/assets/images/3-m.webp')",
        img4Medium: "url('src/assets/images/4-m.webp')",
        img5Medium: "url('src/assets/images/5-m.webp')",
      },
    },
  },
  plugins: [],
};
