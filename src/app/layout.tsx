import type { Metadata } from 'next';
import './styles/globals.css';

export const metadata: Metadata = {
  title: 'Coline Cantelou – Développeuse Web Freelance',
  description:
    'Création de sites modernes, performants et élégants avec React, Next.js, WordPress et PrestaShop.',
  metadataBase: new URL('https://coline-portfolio.vercel.app/'),
  keywords: [
    'Coline Cantelou',
    'développeuse web',
    'freelance',
    'portfolio',
    'React',
    'Next.js',
    'WordPress',
    'PrestaShop',
    'création de site',
    'site vitrine',
    'site professionnel',
    'développement web',
  ],
  authors: [{ name: 'Coline Cantelou', url: 'https://coline-portfolio.vercel.app/' }],
  openGraph: {
    title: 'Coline Cantelou – Développeuse Web Freelance',
    description:
      'Création de sites modernes, performants et élégants avec React, Next.js, WordPress et PrestaShop.',
    url: '/',
    siteName: 'Coline Cantelou Portfolio',
    images: [
      {
        url: '/images/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Aperçu du site de Coline Cantelou',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coline Cantelou – Développeuse Web',
    description: 'Sites performants avec React, Next.js, WordPress et PrestaShop.',
    images: ['/images/preview.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-steel-gray-500 text-white antialiased">{children}</body>
    </html>
  );
}
