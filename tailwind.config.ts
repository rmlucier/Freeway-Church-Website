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
        // Primary Colors - Freeway Church Gold
        primary: {
          DEFAULT: "#d3b975", // Warm gold
          dark: "#b8a160",
          light: "#e0c688",
        },
        // Neutral colors for backgrounds and text
        neutral: {
          white: "#FFFFFF",
          "light-gray": "#f8f9fa",
          "medium-gray": "#6c757d", 
          "dark-gray": "#495057",
          black: "#231f20", // Freeway Church dark background
        },
      },
      fontFamily: {
        'brand-header': ['var(--font-inter)', 'Inter', 'sans-serif'],
        'brand-subheader': ['var(--font-inter)', 'Inter', 'sans-serif'],
        'brand-body': ['var(--font-inter)', 'Inter', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'brand-header': ['4rem', { lineHeight: '1.1' }],
        'brand-subheader': ['1.5rem', { lineHeight: '1.3' }],
        'brand-body': ['1rem', { lineHeight: '1.6' }],
        'hero': ['4rem', { lineHeight: '1.1' }],
        'section': ['3rem', { lineHeight: '1.2' }],
      },
      fontWeight: {
        'extra-bold': '800',
        'light': '300',
        'normal': '400',
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