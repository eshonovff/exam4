/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      screens: {
        sm: { max: "1000px" },
        md:{max:"415px"}
       
      },
      boxShadow: {
        'custom': '0 0 3px 0 black',
      },
    },
  },
  plugins: [],
}

