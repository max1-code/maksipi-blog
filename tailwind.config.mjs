/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0B0F19',
          card: '#131B2E',
        },
        ink: {
          DEFAULT: '#F0F6FC',
          muted: '#94A3B8',
        },
        accent: {
          DEFAULT: '#00FF9D',
          cyan: '#38BDF8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      minHeight: {
        touch: '44px',
      },
      minWidth: {
        touch: '44px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};