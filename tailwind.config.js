/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "639px" }, // max-width: 639px
        md: { min: "640px", max: "767px" }, // 640px ≤ width ≤ 767px
        lg: { min: "768px", max: "1023px" }, // 768px ≤ width ≤ 1023px
        xl: { min: "1024px", max: "1279px" }, // 1024px ≤ width ≤ 1279px
        xxl: { min: "1280px" }, // min-width: 1280px
      },
    },
  },
  plugins: [],
};
