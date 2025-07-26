export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1f2937',
        'secondary': '#10b981',
        'accent': '#38bdf8',
        'text-primary': '#f9fafb',
        'text-secondary': '#9ca3af',
      },
      fontFamily: {
        'heading': ['Bebas Neue', 'sans-serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};