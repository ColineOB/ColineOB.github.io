'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState, useEffect, useRef } from 'react';

export default function ContactSection() {
  const { elementRef, isVisible } = useScrollReveal();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (sent) {
      timer = setTimeout(() => setSent(false), 5000);
    }
    return () => clearTimeout(timer);
  }, [sent]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const formData = new FormData(formRef.current as HTMLFormElement);
      const res = await fetch('https://formspree.io/f/xwpooznr', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (res.ok) {
        setSent(true);
        formRef.current!.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={elementRef}
      id="contact"
      className={`section-container reveal ${isVisible ? 'reveal-active' : ''}`}
    >
      <h2 className="mb-10 text-center text-3xl font-bold">Contact</h2>

      <div className="neumorph-card mx-auto max-w-xl p-6">
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-1 block text-sm text-gray-300">Nom</label>
            <input
              type="text"
              name="name"
              required
              className="bg-steel-gray-500 w-full rounded-md px-4 py-2 text-white outline-none focus:ring-2 focus:ring-neon"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="bg-steel-gray-500 w-full rounded-md px-4 py-2 text-white outline-none focus:ring-2 focus:ring-neon"
              placeholder="email@exemple.com"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-300">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              className="bg-steel-gray-500 w-full rounded-md px-4 py-2 text-white outline-none focus:ring-2 focus:ring-neon"
              placeholder="Écrivez votre message ici..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="neumorph-button mt-4 px-6 py-3 text-sm font-semibold text-white hover:brightness-110 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Envoi...' : 'Envoyer'}
          </button>
        </form>

        {/* Messages de statut */}
        <div aria-live="polite" className="mt-4 text-center text-sm">
          {sent && <p className="text-tulip-tree-500">Message envoyé avec succès !</p>}
          {error && <p className="text-red-500">Erreur lors de l’envoi. Réessayez.</p>}
        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
          Ou écrivez-moi à :{' '}
          <a
            href="mailto:coline.cantelou@gmail.com"
            className="text-neon underline underline-offset-2"
            aria-label="lien email"
          >
            coline.cantelou@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
