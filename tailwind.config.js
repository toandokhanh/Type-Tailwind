module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        35: "35px",
      },
      colors: {
        gray33: "#333",
        orangefa: "#ffa400",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["odd"],
    },
  },
  plugins: [],
};
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       spacing: {
//         35: "35px"
//     },
//   },
//   plugins: [],
// }
// }