module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    minWidth: {
      48: "12rem",
      56: "14rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
    },
    maxWidth: {
      48: "12rem",
      56: "14rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
    },
    extend: {
      colors: {
        leanderWeb: "#EEEEFF",
        sandyBrown: "#FCAA67",
        mediumCarmine: "#B0413E",
        steelTeal: "#548687",
        cream: "#FFFFC7",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
