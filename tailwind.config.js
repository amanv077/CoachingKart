/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#29e6c6", // Aqua
        secondary: "#039c9e", // Teal
        muted: "#e0d016", // Muted Yellow
        // Adding premium colors
        dark: "#1a1a1a", // Dark Gray
        light: "#f7f7f7", // Light Gray
        accent: "#ff6b6b", // Soft Red for accents
        success: "#4caf50", // Green for success messages
        danger: "#f44336", // Red for errors
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        serif: ["Merriweather", "serif"], // For a more classic look
      },
      spacing: {
        128: "32rem",
        144: "36rem",
        72: "18rem", // Adding more spacing options
      },
      borderRadius: {
        "4xl": "2rem", // Larger border radius for a softer feel
      },
      boxShadow: {
        premium: "0 4px 30px rgba(0, 0, 0, 0.1)", // Soft shadow
        outline: "0 0 0 2px rgba(41, 230, 198, 0.5)", // Outline shadow for focus states
      },
      backgroundImage: {
        "premium-gradient":
          "linear-gradient(90deg, rgba(41, 230, 198, 1) 0%, rgba(3, 156, 158, 1) 100%)", // Gradient for backgrounds
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.dark"),
            a: {
              color: theme("colors.primary"),
              "&:hover": {
                color: theme("colors.secondary"),
              },
            },
            h1: {
              color: theme("colors.primary"),
            },
            h2: {
              color: theme("colors.secondary"),
            },
            strong: {
              color: theme("colors.dark"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Adds form styles
    require("@tailwindcss/typography"), // Adds typography styles
    require("@tailwindcss/aspect-ratio"), // Aspect ratio utility
    require("@tailwindcss/line-clamp"), // Line clamp for truncating text
  ],
};
