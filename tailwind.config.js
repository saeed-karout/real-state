/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "whiteSmoke":"#E9E9EA",
        "Raspberry":"#6f1f40"
      },
      boxShadow: {
        'border-raspberry': '0 0 8px 4px rgba(219, 48, 105, 0.5)',
      },
    },
  },
  plugins: [],
}

