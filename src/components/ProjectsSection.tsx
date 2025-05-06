'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Image from 'next/image';

export default function ProjectsSection() {
  const { elementRef, isVisible } = useScrollReveal();
  const projects = [
    {
      title: 'FishEye',
      description: 'Un site de portfolio pour photographes avec filtres dynamiques.',
      link: 'https://fish-eye-photo.vercel.app/',
      image: '/images/screens/fisheye.png',
    },
    {
      title: 'Kasa',
      description: 'Application de location immobilière type Airbnb avec React.',
      link: 'https://kasa-seven-murex.vercel.app/',
      image: '/images/screens/kasa.png',
    },
    {
      title: 'Oh My Food',
      description: 'Un site vitrine pour restaurants avec animations CSS poussées.',
      link: 'https://oh-myfood-rose.vercel.app/',
      image: '/images/screens/ohmyfood.png',
    },
  ];

  return (
    <section
      ref={elementRef}
      className={`section-container reveal ${isVisible ? 'reveal-active' : ''}`}
    >
      <h2 className="mb-10 text-center text-3xl font-bold">Projets</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="neumorph-card p-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={project.title}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-lg"
              />
              <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
