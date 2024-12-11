/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    colors: {
      "black-tertiary": "#161616",
      "black-primary": "#000000",
      "whit-primary": "#ffffff",
      "black-foreground": "#212121",
      "black-secondary": "#0b0b0b",
      "black-quaternary": "#2c2c2c",
      "color-121214": "#121214", // tema da rocketseat
      "gray-light": "#E5E5E5",
      "gray-medium": "#A8A8A8",
      "gray-dark": "#4F4F4F",
      "gray-tertiary": "#CACACA",
      "red-primary": "#d41e45",
      "red-secondary": "#ff0000",
      "red-light": "#ffccd1",
      "yellow-primary": "#FFC107",
      "yellow-secondary": "#FDD835",
      "blue-primary": "#1E90FF",
      "blue-secondary": "#0000FF",
      "blue-light": "#ADD8E6",
      "blue-tertiary": "#020eb0",
      "green-primary": "#008000",
      "green-secondary": "#00FF00",
      "green-light": "#90EE90",
      "green-tertiary": "#006400",
      // #f0d442
    },

    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
