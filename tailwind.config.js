module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Poppins",
          ...require("tailwindcss/defaultTheme").fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
