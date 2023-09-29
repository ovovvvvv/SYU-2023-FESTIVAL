/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js.jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "1ptitle": "url('/images/1ptitle.png')",
      },

      keyframes: {
        slider: {
          "0%": {
            transform: "translateX(0px)",
          },
          "100%": {
            transform: "translateX(-1400px)",
          },
        },
      },
    },
    animation: {
      slider: "slider 16s linear infinite",
    },
  },
  plugins: ["tailwind-scrollbar-hide"],
};
