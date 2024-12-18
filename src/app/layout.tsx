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
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        {children}
      </body>
    </html>
  )
}
