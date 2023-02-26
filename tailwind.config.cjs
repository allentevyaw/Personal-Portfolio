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
        'fadeIn': 'fadeIn 1s ease-in forwards',
        'rubberBand': 'rubberBand 2s infinite'
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

        'rubberBand': {
          'from': {
            'transform': 'scale3d(1,1,1)',
          },
          '30%': {
            'transform':'scale3d(1.25,0.75,1)',
          },
          '40%': {
            'transform': 'scale3d(0.75,1.25,1)'
          },
          '50%': {
            'transform': 'scale3d(1.15,0.85,1)',
          },
          '65%': {
            'transform': 'scale3d(0.95, 1.05, 1)',
          },
          '75%': {
            'transform': 'scale3d(1.05,0.95,1)',
          },
          'to': {
            'transform': 'scaled3d(1,1,1)'
          },
        },
    }
    },
  },
  plugins: [],
}