module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    keyframes: {
      "slidein-from-left": {
        "0%": {
          transform: "translateX(-150%)",
        },
        "100%": {
          transform: "translateX(0)",
        },
      },

      "slidein-from-right": {
        "0%": {
          transform: "translateX(150%)",
        },
        "100%": {
          transform: "translateX(0)",
        },
      },
      spin: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
    },
    animation: {
      "slidein-from-left": "slidein-from-left 0.8s ease-out",
      "slidein-from-right": "slidein-from-right 0.8s ease-out",
      spin: "spin 1s linear infinite",
    },
  },
  plugins: [],
};
