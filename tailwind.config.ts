import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#FFF500', // The bright Steppe Coffee yellow
        'brand-orange': '#FF4D00', // The CTA button color
        'brand-purple': '#B39DDB', // Footer color
      },
      backgroundImage: {
        'steppe-gradient': "url('/images/bg-gradient.jpg')",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        gothic60: ['Gothic60', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;