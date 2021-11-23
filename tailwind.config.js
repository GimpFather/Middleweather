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
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
