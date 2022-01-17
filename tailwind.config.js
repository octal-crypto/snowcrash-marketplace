module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-radix')(),
    require('@ramosdiego/ui')({
      buttons: {
        colors: ['blue', 'red', 'green', 'neutral'],
        themes: ['light'],
        styles: ['fill', 'outline', 'ghost'],
        animate: true,
      },
    }),
  ],
}
