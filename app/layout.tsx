import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

export const metadata: Metadata = {
  title: 'Digital Agency Showcase - Professional Web Design & Development',
  description: 'We create stunning websites, develop strong brands, and drive digital growth for businesses. See our services, case studies, and meet our expert team.',
  keywords: 'digital agency, web development, branding, digital marketing, case studies',
  openGraph: {
    title: 'Digital Agency Showcase',
    description: 'Professional web design, development, and digital marketing services',
    type: 'website',
    url: 'https://your-domain.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}