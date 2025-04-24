'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ContactSection() {
  const { elementRef, isVisible } = useScrollReveal();
  return (
    <section
      ref={elementRef}
      id="contact"
      className={`section-container reveal ${isVisible ? 'reveal-active' : ''}`}
    >
      <h2 className="mb-10 text-center text-3xl font-bold">Contact</h2>

      <div className="neumorph-card mx-auto max-w-xl p-6">
        <form className="flex flex-col gap-4">
          <div>
            <label className="mb-1 block text-sm text-gray-300">Nom</label>
            <input
              type="text"
              className="bg-steel-gray-500 w-full rounded-md px-4 py-2 text-white outline-none focus:ring-2 focus:ring-neon"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-300">Email</label>
            <input
              type="email"
              className="bg-steel-gray-500 w-full rounded-md px-4 py-2 text-white outline-none focus:ring-2 focus:ring-neon"
              placeholder="email@exemple.com"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-300">Message</label>
            <textarea
              rows={4}
              className="bg-steel-gray-500 w-full rounded-md px-4 py-2 text-white outline-none focus:ring-2 focus:ring-neon"
              placeholder="Écrivez votre message ici..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 rounded-md bg-neon px-6 py-3 font-semibold text-black transition hover:brightness-110"
          >
            Envoyer
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Ou écrivez-moi à :{' '}
          <a
            href="mailto:coline.cantelou@gmail.com"
            className="text-neon underline underline-offset-2"
          >
            coline.cantelou@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
