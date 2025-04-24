export default function Footer() {
  return (
    <footer className="border-steel-gray-400 mt-20 border-t py-6 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} Coline Cantelou. Tous droits réservés.</p>
      <p className="mt-1 text-xs">
        Design & développement 100% fait main avec <span className="text-neon">Next.js</span> &{' '}
        <span className="text-neon">amour</span>.
      </p>
    </footer>
  );
}
