module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx,svelte}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        blob: 'blob 7s infinite',
      },
      fontFamily: {
        headline: 'Scheherazade New',
      },
      colors: {
        pinkBrooke: '#FDD1EC',
        blueBrooke: '#6ABBD9',
        orangeBrooke: '#DF9E38',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
