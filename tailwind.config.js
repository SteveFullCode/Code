/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Defina suas cores personalizadas aqui
      },
      height: {
        'section': 'calc(100vh - 205px)',
        'menu': 'calc(100vh - 80px)',
        'content-wrapper': 'calc(100vh - 80px)',
      },
    },
  },
  plugins: [],
}
