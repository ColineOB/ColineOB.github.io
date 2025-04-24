'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HeroSection() {
  const { elementRef, isVisible } = useScrollReveal(0.5, 200);
  return (
    <section className="flex min-h-screen flex-col-reverse justify-center gap-8 px-6 lg:flex-row lg:items-center lg:px-20">
      <div
        ref={elementRef}
        className={`reveal z-10 w-full text-center lg:w-2/3 lg:pt-12 lg:text-left ${isVisible ? 'reveal-active' : ''}`}
      >
        <h2 className="decoration-tulip-tree-500 mb-4 text-2xl font-black underline md:text-5xl">
          Web Développeuse
        </h2>
        <p className="mx-auto max-w-xl text-sm text-gray-400 lg:mx-0">
          Freelance – je crée des sites modernes, performants et élégants avec React, Next.js,
          WordPress & PrestaShop.
        </p>
      </div>

      <h1 className="text-steel-gray-500 neumorph-text animate-fade-in-up pointer-events-none transform select-none text-center text-[14vw] font-black uppercase leading-none sm:text-[12vw] md:text-[9vw] lg:pt-4 lg:text-right">
        Coline
        <br />
        Cantelou
      </h1>
    </section>
  );
}
