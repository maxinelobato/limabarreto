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
        brandPrimary: '#E7C978',
        brandWts: '#006400',
      },
      backgroundImage: {
        bgDesktopBrowLamination: "url('/browextension/desktop-produtora.webp')",
        bgMobileBrowLamination: "url('/browextension/mobile-produtora.webp')",
        bgDesktopGenogramaExpert:
          "url('/genogramaexpert/desktop-produtora.webp')",
        bgMobileGenogramaExpert:
          "url('/genogramaexpert/mobile-produtora.webp')",
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
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
