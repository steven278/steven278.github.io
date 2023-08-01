/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'night': "url('src/assets/night-mode.png')",
        'light': "url('src/assets/sun.png')",
        'test': "url('https://picsum.photos/200')",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

