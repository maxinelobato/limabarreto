import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin', 'greek', 'cyrillic'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Brow Extension Pro 4.0',
  description:
    'Tenha a oportunidade de aprender uma técnica que está transformando o mercado de sobrancelhas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${roboto.className} bg-zinc-950 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
