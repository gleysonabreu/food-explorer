/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)"],
        poppins: "var(--font-poppins)",
      },
      colors: {
        food: {
          light: {
            100: "#FFFFFF",
            200: "#FFFAF1",
            300: "#E1E1E6",
            400: "#C4C4CC",
            500: "#7C7C8A",
            600: "#76797B",
            700: "#4D585E",
          },
          dark: {
            100: "#000405",
            200: "#00070A",
            300: "#000204",
            400: "#000A0F",
            500: "#000C12",
            600: "#00111A",
            700: "#001119",
            800: "#0D161B",
            900: "#0D1D25",
            1000: "#192227"
          },
        }
      }
    },
  },
  plugins: [],
}
