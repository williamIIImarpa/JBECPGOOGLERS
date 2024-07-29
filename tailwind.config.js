/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['group-focus']
    }
  },
  plugins: [],
}

