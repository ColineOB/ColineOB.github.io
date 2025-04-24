import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServiceSection';
import SkillsSection from '@/components/SkillsSection';

export default function HomePage() {
  return (
    <main className="bg-steel-gray-500 text-gray-100">
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
