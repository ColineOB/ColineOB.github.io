import type { Metadata } from 'next';
import './styles/globals.css';

export const metadata: Metadata = {
  title: 'Coline Cantelou – Développeuse Web',
  description:
    'Développeuse web freelance. Création de sites modernes, performants et élégants avec React, Next.js, WordPress et PrestaShop.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-steel-gray-500 text-gray-200 antialiased">{children}</body>
    </html>
  );
}
