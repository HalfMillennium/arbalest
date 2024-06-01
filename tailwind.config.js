module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
          slideIn: {
            '0%': {transform: 'translateX(0)'},
            '100%': {transform: 'translateX(-80%)'}
          },
          grow: {
            '0%': {transform: 'scale(1)'},
            '100%': {transform: 'scale(1.5)'}
          }
      },
      animation: {
        'slide-out': 'slideIn 1s ease-in-out',
        'fade-in': 'fade-in 2s ease-in-out',
        'grow': 'grow 1s ease-in-out',
      },
      colors: {
        transparent: 'transparent',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'soft-black': "#212121"
      },
      spacing: {
        '4rem': '4rem',
        '6rem': '6rem',
        '8rem': '8rem',
        '12rem': '12rem',
        '16rem': '16rem',
        '18rem': '18rem',
        '24rem': '24rem',
        '32rem': '32rem',
        '36rem': '36rem',
        '48rem' : '48rem',
        '64rem': '64rem',
        '72rem': '72rem',
        '96rem': '96rem',
        '128rem': '128rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
