import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeToggle from '@/components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alexander Balaban - Blog',
  description: 'Essays and thoughts on design, development, and technology',
  openGraph: {
    title: 'Alexander Balaban',
    description: 'Essays and thoughts on design, development, and technology',
    url: 'https://yabalaban.github.io',
    siteName: 'Alexander Balaban',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Alexander Balaban - Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alexander Balaban',
    description: 'Essays and thoughts on design, development, and technology',
    images: ['/api/og'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  )
}
