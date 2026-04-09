tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: 'var(--dark-bg)',
        lightBg: 'var(--light-bg)',
        primary: 'var(--primary)',
        primaryDark: 'var(--primary-dark)',
        accent: 'var(--accent)',
        textDark: 'var(--text-dark)',
        textLight: 'var(--text-light)',
        cardDark: 'var(--card-dark)',
        cardLight: 'var(--card-light)'
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    }
  }
}
