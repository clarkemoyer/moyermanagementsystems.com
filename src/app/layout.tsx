import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://moyermanagementsystems.com'),
  title: {
    default: 'Moyer Management Systems | Coming Soon',
    template: '%s | Moyer Management Systems',
  },
  description: 'Structured management systems and operating playbooks are being prepared here.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://moyermanagementsystems.com/',
    siteName: 'Moyer Management Systems',
    title: 'Moyer Management Systems | Coming Soon',
    description: 'Structured management systems and operating playbooks are being prepared here.',
  },
  twitter: {
    card: 'summary',
    title: 'Moyer Management Systems | Coming Soon',
    description: 'Structured management systems and operating playbooks are being prepared here.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
