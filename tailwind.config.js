module.exports = {
  darkMode: 'class',
  content: ["./*.{html,js}", "./js/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkBg: '#0F0A19',
        lightBg: '#F8F7FA',
        primary: '#8B5CF6',
        primaryDark: '#6D28D9',
        accent: '#F59E0B',
        textDark: '#1E293B',
        textLight: '#E2E8F0'
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}