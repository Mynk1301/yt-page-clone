/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        mycolor:"rgb(33, 33, 33)",
        my2color:"rgb(56, 56, 56)"
      }
    },

  },
  plugins: [],
}