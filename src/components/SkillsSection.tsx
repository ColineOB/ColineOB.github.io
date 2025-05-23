'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function SkillsSection() {
  const { elementRef, isVisible } = useScrollReveal(0.1, 0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.style.animationPlayState = 'running';

    // Pause and resume logic
    const pauseScroll = () => (el.style.animationPlayState = 'paused');
    const resumeScroll = () => (el.style.animationPlayState = 'running');

    // Mouse and touch events
    const startEvents = ['mousedown', 'touchstart'];
    const endEvents = ['mouseup', 'touchend'];

    startEvents.forEach(event => el.addEventListener(event, pauseScroll));
    endEvents.forEach(event => el.addEventListener(event, resumeScroll));

    // Ensure touchend also resumes animation on mobile
    el.addEventListener('touchend', resumeScroll);

    return () => {
      startEvents.forEach(event => el.removeEventListener(event, pauseScroll));
      endEvents.forEach(event => el.removeEventListener(event, resumeScroll));
      el.removeEventListener('touchend', resumeScroll);
    };
  }, []);

  const skills = [
    { name: 'HTML5', file: 'HTML5.png' },
    { name: 'CSS3', file: 'CSS3.png' },
    { name: 'Javascript', file: 'Javascript.png' },
    { name: 'PHP', file: 'PHP.png' },
    { name: 'SQL', file: 'Sql.png' },
    { name: 'Java', file: 'Java.png' },
    { name: 'React', file: 'React.png' },
    { name: 'Next.js', file: 'NextJS.png' },
    { name: 'Redux', file: 'Redux.png' },
    { name: 'Symfony', file: 'Symfony.png' },
    { name: 'WordPress', file: 'Wordpress.png' },
    { name: 'PrestaShop', file: 'PrestaShop.png' },
    { name: 'Tailwind CSS', file: 'Tailwind.png' },
    { name: 'SCSS', file: 'Sass.png' },
    { name: 'Responsive', file: 'Responsive.png' },
    { name: 'Intégration Figma', file: 'Figma.png' },
    { name: 'Photoshop', file: 'Photoshop.png' },
    { name: 'Illustrator', file: 'Illustrator.png' },
    { name: 'Git', file: 'Git.png' },
    { name: 'SEO', file: 'SEO.png' },
    { name: 'Netlify', file: 'Netlify.png' },
    { name: 'Vercel', file: 'Vercel.png' },
  ];

  return (
    <section
      ref={elementRef}
      className={`reveal z-10 mx-auto py-12 ${isVisible ? 'reveal-active' : ''}`}
    >
      <div className="w-full overflow-hidden">
        <div ref={scrollRef} className="animate-marquee flex w-max py-3">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="group relative flex h-24 w-24 flex-shrink-0 flex-col items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <div className="neumorph-rounded-int relative flex h-20 w-20 items-center justify-center">
                <Image
                  src={`/images/logo/${skill.file}`}
                  alt={skill.name}
                  width={32}
                  height={32}
                  className="object-contain"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              <span className="mt-1 text-[0.7rem] text-gray-300 opacity-100 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
