'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-tulip-tree-500 mb-4 text-5xl font-bold">404</h1>
      <p className="mb-6 text-xl text-gray-300">Oups... La page que vous cherchez n’existe pas.</p>
      <Link
        href="/"
        className="neumorph-button px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}
