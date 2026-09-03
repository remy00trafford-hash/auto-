import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Auto+ — Accessoires automobiles à découvrir',
  description: 'Une sélection d’accessoires automobiles pratiques, utiles et intéressants à découvrir.',
  metadataBase: new URL('https://auto-plus.vercel.app'),
  openGraph: { title: 'Auto+', description: 'Des accessoires qui améliorent votre quotidien en voiture.', type: 'website' },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#0a0b0d' };

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="fr"><body>{children}</body></html>;
}
