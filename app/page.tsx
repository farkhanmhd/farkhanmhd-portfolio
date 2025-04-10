import HeroSection from "@/components/fragments/HeroSection";
import SelectedProjects from "@/components/fragments/SelectedProjects";
import AboutSection from "@/components/fragments/AboutSection";

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto px-3 md:px-6'>
      <HeroSection />
      <SelectedProjects />
      <AboutSection />
    </div>
  );
}
