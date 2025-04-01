/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oxygen: ["Oxygen", "ui-sans-serif", "sans-serif"],
        general: ["Source-Sans-3", "ui-sans-serif", "sans-serif"],
      },
      width: {
        "3xl": "48rem", // 768px
        "4xl": "52rem", // 832px
        "5xl": "64rem", // 1024px
      },
      height: {
        90: "22.5rem", // 360px
        100: "25rem", // 400px
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
        black: "#0c0c0c",
        white: "#fefefe",
        gray: "#363636",
        red: "#f15062",
        purple: "#9c449f",
        dirtyPurple: "#7C6474",
        bgBlue: "#0a4989",
        gray: {
          purple: "#BDA3AC",
        },
      },
      borderWidth: {
        6: "6px",
      },
    },
  },
  plugins: [],
};
