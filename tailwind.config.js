/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EC8000",
        darkGray: "#101828",
        lightGray: "#475467",
        lightestGray: "#EAECF0",
      },
      boxShadow: {
        cardShadow: "0 12px 16px -4px rgba(16, 24, 40, 0.08)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--secondary-font)"],
        syne: ["var(--primary-font)"],
        inknutAntiqua: ["var(--bookFont3)"],
        "apercu-pro": ["var(--bookFont2)"],
        "book-antiqua": ["var(--bookFont1)"],
      },
    },
  },
  plugins: [],
};
