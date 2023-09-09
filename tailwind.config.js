/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js.jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "1ptitle": "url('/images/1ptitle.png')",
      },
    },
  },
  plugins: [],
};
