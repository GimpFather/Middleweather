module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Libre: ["Libre Baskerville", "serif"],
      },
      backgroundImage: {
        'background--snow__day': "url('images/background--day__snow.jpeg')", //Author of this art is Heather Hood
        'background--snow__night': "url('images/background--night__snow.jpeg')", //Author of this art is: @ambikyu.
        'background--sun__day': "url('images/background--day__sun.jpeg')", //Gina Garavalia
        'background--sun__night': "url('images/background--night__sun.jpeg')", //Lap Pun Cheung
        'background--cr__theme': "url('images/crTheme.jpeg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
