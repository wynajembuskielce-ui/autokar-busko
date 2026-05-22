import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#c9a961',
        'brand-gold-dark': '#a18438',
        'brand-navy': '#0a0e1a',
        'brand-cream': '#faf8f3',
        'brand-cream-border': '#e5e0d5',
        'brand-text': '#0f0f1a',
        'brand-muted': '#6b7280',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
export default config;
