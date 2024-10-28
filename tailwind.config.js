/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'desaturatedRed': 'hsl(0, 36%, 70%)',
        'softRed': 'hsl(0, 93%, 68%)',
        'darkGrayishRed': 'hsl(0, 6%, 24%)',
        'gradientOneColorOne': 'hsl(0, 0%, 100%)',
        'gradientOneColortwo': 'hsl(0, 100%, 98%)',
        'gradientTwoColorOne': 'hsl(0, 80%, 86%)', 
        'gradientTwoColorTwo': 'hsl(0, 74%, 74%)'
      },
      fontFamily: {
        'JosefinSans': ['Josefin Sans', 'sans-serif']
      },
      backgroundImage: {
        'pattern': "url('/bg-pattern-desktop.svg')"
      }
    },
  },
  plugins: [],
}