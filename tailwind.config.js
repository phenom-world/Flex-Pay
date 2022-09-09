module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["Inter"],
      DM_sans: ["DM Sans"],
    },
    extend: {
      colors: {
        orange: "#F26722",
        "flex-purple": "#030729",
      },
      boxShadow: {
        "3xl": "0px 15px 30px -15px rgba(0, 0, 0, 0.5)",
      },
      // animation: {
      //   bounce200: "bounce 1s infinite 200ms",
      //   bounce400: "bounce 1s infinite 400ms",
      // },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(-120%)",
            transform: "translateX(-120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
        "slide-out": {
          "0%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
          "100%": {
            "-webkit-transform": "translateX(-120%)",
            transform: "translateX(-120%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s forwards",
        "slide-out": "slide-out 0.5s forwards",
        fade: "slide-in 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
