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
        brandGenograma: '#cc9933',
        brandBrowExtension: '#E7C978',
        brandVendaMaisComANeideOne: '#0091D6',
        brandVendaMaisComANeideTwo: '#004167',
        brandVendaMaisComANeideThree: '#34D434',
        brandVendaMaisComANeideFour: '#0E7834',
        brandVendaMaisComANeideFive: '#FFC93D',
      },
      backgroundImage: {
        bgDesktopBrowLamination: "url('/browextension/desktop-produtora.webp')",
        bgMobileBrowLamination: "url('/browextension/mobile-produtora.webp')",
        bgDesktopGenogramaExpert:
          "url('/genogramaexpert/desktop-produtora.webp')",
        bgMobileGenogramaExpert:
          "url('/genogramaexpert/mobile-produtora.webp')",
        bgDesktopVendaMaisComANeide:
          "url('/vendamaiscomaneide/desktop-produtora.webp')",
        bgMobileVendaMaisComANeide:
          "url('/vendamaiscomaneide/mobile-produtora.webp')",
      },
    },
  },
  plugins: [require('daisyui'), require('tailwindcss-directional-shadows')],
} satisfies Config
