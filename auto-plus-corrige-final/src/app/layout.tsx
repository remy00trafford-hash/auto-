import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-main', weight: ['400','500','600','700','800'] })

export const metadata: Metadata = {
  title: 'Auto+ — Accessoires automobiles à découvrir',
  description: 'Une sélection mondiale d’accessoires automobiles pratiques et bien choisis.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="fr" className={manrope.variable}><body>{children}</body></html>
}
