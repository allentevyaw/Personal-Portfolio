/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'animation': {
        'text':'text 4s ease infinite ',
        'fadeIn': 'fadeIn 3s ease-in forwards',
    },
    'colors': {
        'offWhite': 'hsla(0, 0%, 100%, 0.8)'
    },
    'keyframes': {
        'text': {
            '0%, 100%': {
               'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
               'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
        'fadeIn': {
          '0%': { 'opacity': '0' },
          '100%': { 'opacity': '1' },
        },
    }
    },
  },
  plugins: [],
}