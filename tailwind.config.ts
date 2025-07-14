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
          DEFAULT: "#003366",
          dark: "#004080",
        },
        accent: {
          teal: "#00BFFF",
          "teal-dark": "#00CED1",
          orange: "#FF8C00",
          gold: "#FFD700",
        },
        neutral: {
          white: "#FFFFFF",
          "off-white": "#F8F8F8",
          "light-gray": "#F2F2F2",
          "dark-gray": "#333333",
          "near-black": "#1A1A1A",
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