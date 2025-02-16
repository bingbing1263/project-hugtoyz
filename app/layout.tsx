import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'HugToyz - Toys for Hugging',
    template: '%s | HugToyz'
  },
  description: 'Discover our collection of huggable, lovable toys that bring joy and comfort to children worldwide.',
  keywords: ['toys', 'plush toys', 'stuffed animals', 'children toys', 'educational toys'],
  authors: [{ name: 'HugToyz' }],
  creator: 'HugToyz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.hugtoyz.com',
    title: 'HugToyz - Toys for Hugging',
    description: 'Discover our collection of huggable, lovable toys that bring joy and comfort to children worldwide.',
    siteName: 'HugToyz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HugToyz - Toys for Hugging',
    description: 'Discover our collection of huggable, lovable toys that bring joy and comfort to children worldwide.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}