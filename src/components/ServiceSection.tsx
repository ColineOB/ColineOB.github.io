'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ServicesSection() {
  const { elementRef, isVisible } = useScrollReveal();
  const services = [
    {
      title: 'Site vitrine',
      description:
        'Idéal pour présenter ton activité, ton portfolio ou une entreprise. Site responsive, moderne et rapide à charger.',
    },
    {
      title: 'Landing page',
      description:
        'Page unique conçue pour convertir : présentation, call-to-action, formulaire, animations légères, etc.',
    },
    {
      title: 'WordPress sur-mesure',
      description:
        'Installation, personnalisation (Elementor, thèmes, extensions), SEO de base, sécurité.',
    },
    {
      title: 'Boutique PrestaShop',
      description:
        'Mise en place d’une boutique en ligne performante avec PrestaShop, configuration des produits et du design.',
    },
    {
      title: 'Maintenance & refonte',
      description: 'Amélioration, modernisation ou correction de sites existants (code ou CMS).',
    },
  ];

  return (
    <section className="section-container">
      <h2 className="mb-10 text-center text-3xl font-bold">Services</h2>
      <div
        ref={elementRef}
        className={`reveal grid gap-4 md:grid-cols-2 lg:grid-cols-5 ${isVisible ? 'reveal-active' : ''}`}
      >
        {services.map((service, index) => (
          <div key={index} className="neumorph-card p-6 transition-transform hover:scale-[1.02]">
            <h3 className="mb-2 text-xl font-semibold text-neon">{service.title}</h3>
            <p className="text-sm text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
