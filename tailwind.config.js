/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins"],
      },
      colors: {
        "background": "#1f242d",
        "second-background": "#323946",
        "text-color": "#fff",
        "main-color": "#0ef",
      }
      // backgroundImage: {
      //   'night': "url('src/assets/night-mode.png')",
      //   'light': "url('src/assets/sun.png')",
      //   'test': "url('https://picsum.photos/200')",
      // },
    },
  },
  plugins: [require('flowbite/plugin')],
}

