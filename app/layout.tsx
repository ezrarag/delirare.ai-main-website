import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
// import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Delirare™ - We make AI voices human',
  description: 'In the era of AI, a brand\'s voice is as valuable as its logo. We partner with world-class teams to craft voices that define products, inspire trust, and leave a legacy.',
  keywords: ['AI voice', 'voice architecture', 'brand voice', 'voice design', 'AI branding'],
  authors: [{ name: 'Delirare' }],
  creator: 'Delirare',
  publisher: 'Delirare',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ai-main-website.vercel.app'),
  openGraph: {
    title: 'Delirare™ - We make AI voices human',
    description: 'In the era of AI, a brand\'s voice is as valuable as its logo. We partner with world-class teams to craft voices that define products, inspire trust, and leave a legacy.',
    url: 'https://ai-main-website.vercel.app',
    siteName: 'Delirare',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Delirare - AI Voice Architecture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delirare™ - We make AI voices human',
    description: 'In the era of AI, a brand\'s voice is as valuable as its logo. We partner with world-class teams to craft voices that define products, inspire trust, and leave a legacy.',
    images: ['/og-image.jpg'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} style={{ margin: 0, padding: 0 }}>
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Yu+Gothic+Pr6N+M:wght@300;400;500;700&display=swap" />
            <style dangerouslySetInnerHTML={{
              __html: `
                * {
                  margin: 0 !important;
                  padding: 0 !important;
                  border: none !important;
                  outline: none !important;
                }
                html, body {
                  margin: 0 !important;
                  padding: 0 !important;
                  border: none !important;
                  outline: none !important;
                  overflow-x: hidden !important;
                }
              `
            }} />
          </head>
      <body className={`${inter.className} antialiased`} style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
