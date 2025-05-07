import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-steel-gray-400 mt-20 border-t py-6 text-center text-sm text-gray-100">
      <p>© {new Date().getFullYear()} Coline Cantelou. Tous droits réservés.</p>
      <p className="mt-1 text-xs">
        Design & développement 100% fait main avec <span className="">Next.js</span> &{' '}
        <span className="">amour</span>.
      </p>
      <div className="mt-4 flex justify-center gap-6">
        <a
          href="https://github.com/ColineOB"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Lien GitHub"
        >
          <Image
            src="/images/social/github.png"
            alt="GitHub"
            width={32}
            height={32}
            className="transition-transform hover:scale-110"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/coline-cantelou/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Lien LinkedIn"
        >
          <Image
            src="/images/social/linkedin.png"
            alt="LinkedIn"
            width={32}
            height={32}
            className="transition-transform hover:scale-110"
          />
        </a>
      </div>
    </footer>
  );
}
