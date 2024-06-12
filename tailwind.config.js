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
          },
          dropdownOpen: {
            '0%': {transform: 'translateY(-100)'},
            '100%': {transform: 'translateY(0%)'}
          }
      },
      animation: {
        'slide-out': 'slideIn 1s ease-in-out',
        'fade-in': 'fade-in 2s ease-in-out',
        'grow': 'grow 1s ease-in-out',
        'dropdown-open':'dropdownOpen 0.3s ease-in-out',
      },
      /* [color name]: [opacity] 
          (where that format appears) */
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
        'soft-black': "#212121",
        'navy-blue': "rgb(7 89 133)",
        'f9': "#f9f9f9",
        'dark-lavender': '#585daa',
        'dark-lavender-15': "#F1F1F1",
        'dark-lavender-5': '#F8F7F1',
        'dusk-violet': "#292c52",
        'latte': "#ffe09e",
        'latte-light': "#FFF3CB",
        'latte-x-light': "#FFFDF0",
        'fins-teal': "#067e9c",
        "cream-cicle": "#ffba1f"
      },
      spacing: {
        '2rem': '2rem',
        '4rem': '4rem',
        '6rem': '6rem',
        '8rem': '8rem',
        '12rem': '12rem',
        '12.75rem': '12.75rem',
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
  fontFamily: {
    'radio-canada-helv': 'Radio Canada Big, Helvetica, Arial, sans-serif'
  },
  plugins: [],
}
