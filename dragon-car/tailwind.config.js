/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        oswald: ['Oswald', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

