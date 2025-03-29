/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      width: {
        "4xl": "52rem", // 832px
        "5xl": "64rem", // 1024px
      },
      height: {
        120: "30rem", // 480px
      },
      theme: {
        black: "#0c0c0c",
      },
      borderRadius: {
        "3xl": "1.5rem",
      },
      colors: {
        orange: "#FF8C00",
        pink: "#EA338F",
        blue: "#0E65BC",
        gradient:
          "linear-gradient(0deg, theme(color.orange) 0%, theme(color.pink) 52%, theme(color.blue) 100%)",
      },
    },
  },
  plugins: [],
};
