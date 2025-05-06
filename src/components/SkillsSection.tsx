'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useAutoScroll } from '@/hooks/useAutoScroll'
import Image from 'next/image'

export default function SkillsSection() {
  const { elementRef, isVisible } = useScrollReveal(0.1, 0)
  const scrollRef = useAutoScroll(0.4)

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
    { name: 'Responsive Design', file: 'Responsive.png' },
    { name: 'Intégration Figma', file: 'Figma.png' },
    { name: 'Photoshop', file: 'Photoshop.png' },
    { name: 'Illustrator', file: 'Illustrator.png' },
    { name: 'Git', file: 'Git.png' },
    { name: 'SEO', file: 'SEO.png' },
    { name: 'Netlify', file: 'Netlify.png' },
    { name: 'Vercel', file: 'Vercel.png' },
  ]

  const duplicated = [...skills, ...skills]

  return (
    <section
      ref={elementRef}
      className={`reveal z-10 mx-auto px-4 py-12 sm:px-6 lg:px-20 ${
        isVisible ? 'reveal-active' : ''
      }`}
    >
      <div className="group relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex min-w-[200%] gap-6 overflow-x-auto no-scrollbar"
        >
          {duplicated.map((skill, index) => (
            <div
              key={index}
              className="group relative flex h-24 w-24 flex-shrink-0 flex-col items-center justify-center p-2 transition-transform duration-300 hover:scale-110"
            >
              <div className="neumorph-rounded-int flex h-20 w-20 items-center justify-center">
                <Image
                  src={`/images/logo/${skill.file}`}
                  alt={skill.name}
                  width={42}
                  height={42}
                  style={{ height: 'auto' }}
                />
              </div>
              <span className="mt-1 text-[0.7rem] text-gray-300 opacity-100 transition-opacity duration-300 sm:opacity-0 group-hover:opacity-100">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
