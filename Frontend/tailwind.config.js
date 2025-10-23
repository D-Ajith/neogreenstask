/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                // ✅ include this if using Vite or CRA
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      // you can add custom colors, spacing, etc. here later
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
}
