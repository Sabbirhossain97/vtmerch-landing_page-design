/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '340px',
        'sm': '640px',

        'md': '768px',

        'lg': '1024px',

        'xl': '1280px',

        '2xl': '1536px',
        '3xl': '1750px',
        'custom-home': '450px'
      },
      fontFamily: {
        'actOfRejection': ['"Act of Rejection"', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'sans': ['Inter var', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
      borderColor: {
        'custom-gray': 'rgba(166, 165, 163, 0.50)',
        'custom-button': '1px solid rgba(255, 255, 255, 0.50)'
      }
    },
  },
  plugins: [],
}

