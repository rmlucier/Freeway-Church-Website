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
        // Primary Colors (80% usage) - Main brand colors
        primary: {
          DEFAULT: "#333333", // Dark gray - main brand color
          "dark-gray": "#333333",
          "light-gray": "#CCCCCC",
          black: "#000000",
          white: "#FFFFFF",
        },
        // Secondary Colors (15% usage) - Accent and interaction colors
        secondary: {
          DEFAULT: "#003333", // Dark teal
          "dark-teal": "#003333",
          "bright-teal": "#006666",
        },
        // Tertiary Colors (5% usage) - Special highlights and CTAs
        tertiary: {
          DEFAULT: "#996600", // Gold
          gold: "#996600",
        },
        // Legacy neutral colors for gradual transition
        neutral: {
          white: "#FFFFFF",
          "off-white": "#fafafa",
          "light-gray": "#CCCCCC",
          "medium-gray": "#808080",
          "dark-gray": "#333333",
          black: "#000000",
          "near-black": "#1a1617",
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