import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#146FF8",
          dark: "#0F5FD8",
          light: "#3785FA",
        },
        accent: {
          teal: "#00BFFF",
          "teal-dark": "#00CED1",
          orange: "#FF8C00",
          gold: "#FFD700",
        },
        neutral: {
          white: "#FFFFFF",
          "off-white": "#FAFAFA",
          "light-gray": "#F5F5F5",
          "medium-gray": "#E0E0E0",
          "dark-gray": "#333333",
          black: "#000000",
          "near-black": "#0A0A0A",
        },
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1' }],
        'section': ['3rem', { lineHeight: '1.2' }],
      },
      borderRadius: {
        'button': '0.5rem',
      },
      boxShadow: {
        'button-hover': '0 4px 8px rgba(0,0,0,0.2)',
        'card': '0 2px 8px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};

export default config;