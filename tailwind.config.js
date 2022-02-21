module.exports = {
  content:  [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#4653DD",
      secondary: "#072A58"
    }),
    colors:{
      primary: "#4653DD",
      secondary: "#072A58",
      white: "#fff",
      black: "#000",
    }
  },
  plugins: [],
}
