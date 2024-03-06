/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#2B6CB0',
        'custom-red': '#EF4444',
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}