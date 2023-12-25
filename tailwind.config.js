/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        Rubik: "'Rubik', sans-serif"
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
