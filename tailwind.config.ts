import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: '#D4A12C',
        brandWts: '#006400',
      },
    },
  },
  daisyui: {
    themes: [
      {
        brand: {
          primary: '#5c2c0c',
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('tailwindcss-directional-shadows')],
} satisfies Config
