import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#639922',
          dark:    '#27500A',
          light:   '#EAF3DE',
        },
        cta: {
          DEFAULT: '#1D9E75',
          hover:   '#5DCAA5',
        },
        akcent: '#97C459',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
export default config;
