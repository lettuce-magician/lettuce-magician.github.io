/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily:{
        pixelify: ['"Pixelify Sans Variable"', 'pixelify-sans'],
        jarkata: ['"Plus Jakarta Sans"', "plus-jakarta-sans"],
        nunito: ['"Nunito"', "nunito"],
      }
    }
  },
  plugins: [require('tailwindcss-animated')]
};