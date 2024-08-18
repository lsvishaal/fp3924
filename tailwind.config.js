/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bloom-cyan': '0 0 30px 10px rgba(0, 255, 255, 0.5)',
        'bloom-purple': '0 0 10px 5px rgba(255, 0, 255, 0.5)',
        'bloom-orange': '0 0 10px 5px rgba(255, 165, 0, 0.5)',
        'bloom-blue': '0 0 10px 5px rgba(0, 0, 255, 0.5)',
        'bloom-green': '0 0 10px 5px rgba(0, 128, 0, 0.5)',
      },
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