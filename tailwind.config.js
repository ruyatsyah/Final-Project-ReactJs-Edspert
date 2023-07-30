/** @type {import('tailwindcss').Config} */

export default {
  content: [
     // ...
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      
      colors: {
        primary: '#152A46',
      },
      screens:{
        '2xl': '1024px',
      }
    },
  },
  plugins: [],
}
