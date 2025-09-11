/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0077FF', // A vibrant, tech-inspired blue
        'slate-gray': {
          DEFAULT: '#1E293B', // A deep charcoal for text and dark backgrounds
          light: '#334155',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // A clean, modern font
      }
    },
  },
  // Add the plugin here
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};