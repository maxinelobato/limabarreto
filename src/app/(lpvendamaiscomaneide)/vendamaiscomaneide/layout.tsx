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
  title: 'Venda Mais Com a Neide 4.0',
  description:
    'Tenha o método completo para se tornar uma Consultora de Sucesso',
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
        className={`${roboto.className} antialiased`}
      >
        <main className="bg-zinc-950">{children}</main>
      </body>
    </html>
  )
}
