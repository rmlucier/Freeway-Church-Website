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
          DEFAULT: "#d3b975",
          dark: "#b8a160",
          light: "#e0c688",
        },
        accent: {
          gold: "#d3b975",
          "gold-dark": "#b8a160",
          orange: "#e8a25c",
          blue: "#84a8c7",
        },
        neutral: {
          white: "#ffffff",
          "off-white": "#fafafa",
          "light-gray": "#aba7a5",
          "medium-gray": "#808080",
          "dark-gray": "#4a4a4a",
          black: "#231f20",
          "near-black": "#1a1617",
        },
      },
      fontFamily: {
        heading: ['PT Serif', 'serif'],
        body: ['PT Serif', 'serif'],
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