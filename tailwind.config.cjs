/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'animation': {
        'text':'text 3s ease infinite ',
        'fadeIn': 'fadeIn 2s ease-in forwards',
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
          '0%': { 'opacity': '0',
                'transform': 'translateY(20px)', 
              },
          '100%': { 'opacity': '1', 
                  'transform': 'translateY(0)',
                },
        },
    }
    },
  },
  plugins: [],
}