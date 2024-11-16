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
  title: 'Genograma Expert 2.0',
  description:
    'Ferramenta Terapêutica que permite romper com padrões de comportamentos que se repetem em no mínimo 3 gerações',
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
