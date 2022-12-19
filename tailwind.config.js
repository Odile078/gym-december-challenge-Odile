/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroBackground:
          "linear-gradient(to left, rgb(37, 85, 141) 0%, #0A2D57 70%)",
        heroBackground2:
          "linear-gradient(292deg, rgba(0, 0, 0, 0) 28%, rgba(0, 0, 0, 0.85) 100%)",
      },
      colors: {
        brandBlue: {
          DEFAULT: "#3070B3",
          dark: "#072140",
          dark1: "#0A2D57",
          dark4: "#14519A",
          dark3: "#114584",
        },
        brandYellow: {
          DEFAULT: "#FED702",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)"],
      },
      fontSize: {
        xxs: "0.83333125rem",
        "2.5xl": "2rem",
        "3.5xl": "2rem",
        "4.5xl": "2.625rem",
      },
      maxWidth: {
        "2lg": "40.5rem",
        "8xl": "90.5rem",
        "9xl": "104rem",
      },
      minHeight: {
        175: "43.75rem",
      },
      letterSpacing: {
        large: "0.0125em",
      },
      lineHeight: {
        mediumTight: "1.1",
        tighter: "1.2",
        extraTight: "1.3",
      },
      spacing: {
        13.5: "3.375rem",
        175: "43.75rem",
        "34%": "34%",
      },
    },
  },
  plugins: [],
};
