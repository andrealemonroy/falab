module.exports = {
  content:  [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#4653DD"
    }),
  },
  plugins: [],
}
