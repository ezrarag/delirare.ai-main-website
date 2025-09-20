import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

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
  metadataBase: new URL('https://delirare.ai'),
  openGraph: {
    title: 'Delirare™ - We make AI voices human',
    description: 'In the era of AI, a brand\'s voice is as valuable as its logo. We partner with world-class teams to craft voices that define products, inspire trust, and leave a legacy.',
    url: 'https://delirare.ai',
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
