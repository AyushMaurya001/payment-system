/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "fontColorLight": "#0066ff",
        "fontColorDark": "#023047",
        "baseColor": "#0066ff",
        "baseColorDark": "#023047",
        "baseColorLight": "#219ebc",
        "neonLight": "#FFB703",
        "neonDark": "#FB8500",
      },
      fontFamily: {
        Inter: ['Inter'],
      },
    },
  },
  plugins: [],
}

