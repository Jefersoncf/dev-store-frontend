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
