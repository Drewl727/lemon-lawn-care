import type { Metadata } from 'next'
import { Syne, Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileCallButton from '@/components/MobileCallButton'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lemonlawncare.com'),
  title: {
    template: '%s | Lemon Lawn Care LLC',
    default: 'Lemon Lawn Care LLC — Professional Lawn Care in Connecticut',
  },
  description:
    'Fully insured residential and commercial lawn care, snow removal, gutter cleaning, ice dam removal, and seasonal property maintenance. Serving Hartford and all of Connecticut.',
  keywords: [
    'lawn care Connecticut',
    'snow removal Hartford CT',
    'fully insured landscaping',
    'gutter cleaning Connecticut',
    'lawn mowing Hartford',
    'ice dam removal CT',
    'seasonal cleanup Connecticut',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Lemon Lawn Care LLC',
    title: 'Lemon Lawn Care LLC — Professional Lawn Care in Connecticut',
    description:
      'Fully insured residential and commercial property services year-round. Hartford area and beyond.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <body className="bg-cream text-ink antialiased">
        <LocalBusinessSchema />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCallButton />
      </body>
    </html>
  )
}
