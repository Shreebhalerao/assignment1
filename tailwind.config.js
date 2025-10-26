/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add your component file paths here
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Add the v3-compatible plugin here
    require('tailwind-scrollbar'),
  ],
};