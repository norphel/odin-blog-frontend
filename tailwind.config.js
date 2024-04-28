import { transform } from "framer-motion";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

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
        img1Medium: "url('src/assets/images/1-m.webp')",
        img2Medium: "url('src/assets/images/2-m.webp')",
        img3Medium: "url('src/assets/images/3-m.webp')",
        img4Medium: "url('src/assets/images/4-m.webp')",
        img5Medium: "url('src/assets/images/5-m.webp')",
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
