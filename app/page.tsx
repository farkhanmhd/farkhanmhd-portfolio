import type { Metadata } from "next";
import HeroSection from "@/components/fragments/HeroSection";
import SelectedProjects from "@/components/fragments/SelectedProjects";
import AboutSection from "@/components/fragments/AboutSection";

export const metadata: Metadata = {
  description: `I'm a Next.js Developer currently studying at Universitas Mikroskil in Medan, Indonesia. My primary expertise lies in Next.js, and I'm enthusiastic about crafting streamlined and
            user-friendly web interfaces. Embracing a commitment to continuous learning, I strive to stay at the forefront of industry trends, ensuring that I bring innovative solutions to the
            ever-evolving landscape of web development. Whether it&apos;s optimizing performance, collaborating on creative projects, or integrating the latest React features, I approach each task
            with passion and a dedication to delivering high-quality results.`,
  keywords: ["Farkhan", "Farkhan Muhammad", "farkhanmhd", "FarkhanMhd", "Medan", "Next.js", "Developer", "Web Developer", "Portfolio"],
};

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto px-3 md:px-6'>
      <HeroSection />
      <SelectedProjects />
      <AboutSection />
    </div>
  );
}
