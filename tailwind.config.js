/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  important:true,
  theme: {
    extend: {
      colors: {
        'color-333': '#333',
        'color-blue': '#063FBC'
      },
    }

  },
  plugins: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false
  }
};
