module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx,svelte}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '300px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
    },
    extend: {
      animation: {
        blob: 'blob 7s infinite',
        fadeIn: 'fadeIn 1.2s ease-in forwards',
        wiggle: 'wiggle 1s ease-in-out infinite',
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
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
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
    extend: {
      animation: ['motion-safe'],
    },
  },
  plugins: [],
};
