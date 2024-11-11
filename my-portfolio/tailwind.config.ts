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
        foreground: '#282C33',
        primary: '#4A4A4A',
        secondary: '#1F1F1F',
        accent: '#FF7F50',
        background: '#2C3036',
        textPrimary: '#FFFFFF',
        textSecondary: '#A9A9A9',
      },
    },
  },
  plugins: [],
};
export default config;
