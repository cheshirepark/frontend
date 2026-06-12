/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Use an elegant serif for corporate headings and clean sans for data density
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        mining: {
          obsidian: "#0f172a", // Slate 900 - Base darks, headers, footers
          abyss: "#020617", // Slate 950 - Absolute deep blocks
          gold: "#d97706", // Amber 600 - Primary metallic highlight
          goldHover: "#b45309", // Amber 700 - Hover state for metal accents
          alabaster: "#f8fafc", // Slate 50  - Clean container backgrounds
          ash: "#64748b", // Slate 500 - Secondary text / metadata
        },
      },
    },
  },
  plugins: [],
};
