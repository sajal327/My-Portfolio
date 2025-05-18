/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-200": "#ffbf00",
        "primary-100": "#ffc929",
        "secondary-200": "#00b050",
        "secondary-100": "#0b1a78",
      },
      animation: {
        "bounce-slow": "updown 3s ease-in-out infinite",
      },
      keyframes: {
        updown: {
          "0%, 100%": { transform: "translateY(-20px)" },
          "50%": { transform: "translateY(20px)" },
        },
      },
    },
  },
  plugins: [],
};
