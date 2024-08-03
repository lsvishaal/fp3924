/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255, 105, 180, 0.35)", // Hot pink
          "0 0px 65px rgba(0, 191, 255, 0.2)"    // Deep sky blue
        ]
      }
    },
  },
  plugins: [],
}