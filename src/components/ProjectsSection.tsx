'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ProjectsSection() {
  const { elementRef, isVisible } = useScrollReveal();
  const projects = [
    {
      title: 'Projet 1',
      tech: 'différents techno',
      description: 'une petite description du projet 1.',
    },
    {
      title: 'Projet 2',
      tech: 'différents techno',
      description: 'une petite description du projet 2.',
    },
    {
      title: 'Projet 3',
      tech: 'différents techno',
      description: 'une petite description du projet...et bien disons 3',
    },
  ];

  return (
    <section
      ref={elementRef}
      className={`section-container reveal ${isVisible ? 'reveal-active' : ''}`}
    >
      <h2 className="mb-10 text-center text-3xl font-bold">Projets</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <div key={i} className="neumorph-card p-6 transition-transform hover:scale-[1.02]">
            <h3 className="mb-1 text-xl font-semibold text-neon">{proj.title}</h3>
            <p className="mb-2 text-sm italic text-gray-400">{proj.tech}</p>
            <p className="text-sm text-gray-300">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
