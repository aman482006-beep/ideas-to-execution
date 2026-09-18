import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/footer/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#fbf9f5',
};

const serifFont = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '8i Ventures — Early Believers in Founders Building Enduring Companies',
  description: '8i Ventures is an early-stage venture capital firm in India backing founders building enduring companies from Day Zero across fintech, consumer, and AI infrastructure.',
  keywords: ['8i Ventures', 'Venture Capital India', 'Early Stage VC', 'Origami Pre-Seed', 'Seed Funding India', 'Vikram Chachra', 'Slice', 'M2P', 'Blue Tokai', 'Easebuzz'],
  authors: [{ name: '8i Ventures' }],
  metadataBase: new URL('https://8ivc.com'),
  openGraph: {
    title: '8i Ventures — Early Believers in Founders Building Enduring Companies',
    description: 'We back founders who strip friction out of finance, consumer commerce, and AI infrastructure with conviction before certainty.',
    url: 'https://8ivc.com',
    siteName: '8i Ventures',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '8i Ventures — Early Believers in Founders Building Enduring Companies',
    description: 'We back founders who strip friction out of finance, consumer commerce, and AI infrastructure with conviction before certainty.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-ink min-h-screen flex flex-col font-sans antialiased selection:bg-brand-green selection:text-bg">
        <CustomCursor />
        <Header />
        <main className="flex-1 w-full pt-16 sm:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
