

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {'max': '639px'},
      'tablet': {'min': '640px', 'max': '1149px'},
      'desktop': {'min': '1150px'}
    },
    extend: {},
  },
  plugins: [],
}