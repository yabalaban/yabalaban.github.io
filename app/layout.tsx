import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeToggle from '@/components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alexander Balaban - Blog',
  description: 'Essays and thoughts on design, development, and technology',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Alexander Balaban',
    description: 'Essays and thoughts on design, development, and technology',
    url: 'https://yabalaban.github.io',
    siteName: 'Alexander Balaban',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Alexander Balaban',
    description: 'Essays and thoughts on design, development, and technology',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Alexander Balaban",
              "alternateName": "yabalaban",
              "jobTitle": "Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Meta"
              },
              "sameAs": [
                "https://github.com/yabalaban",
                "https://linkedin.com/in/yabalaban",
                "https://x.com/yabalaban"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  )
}
