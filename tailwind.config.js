/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0081afff",
        "primary-light": "#d0f4eaff",
        secondary: "#b1cc74ff",
        "secondary-light": "#e8fcc2ff",
        "secondary-dark": "#0a210fff",
      },
    },
  },
  plugins: [],
};
