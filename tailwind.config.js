/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        gradientYellow:
          'linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)',
      },
      colors: {
        deepblu: '#091242',
        bluShade: '#1F2A69',
        blackShade: '#23212a',
        navyShade: '#041c37',
        fontPrimary: '#ffbe34',
        fontSecondary: '#f4f4f4',
        fontHeading: '#1c1f35',
        fontParagraph: '666c89',
      },
      fontFamily: {
        krub: ['Krub', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
