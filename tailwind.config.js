/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
        roboto: "var(--font-roboto)",
        sans: ['var(--font-roboto)', 'sans-serif']
      },
      backgroundImage: {
        "gradient-food-200": "linear-gradient(180deg, #091E26 0%, #00131C 100%)",
        "gradient-food-caret-right": "linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%)",
      },
      colors: {
        food: {
          tints: {
            tomato: {
              100: "#750310",
              200: "#92000E",
              300: "#AB222E",
              400: "#AB4D55",
            },
            cake: {
              100: "##065E7C",
              200: "#82F3FF",
            }
          },
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
