"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import Image from "next/image";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export default function AboutSection() {
  // Sample experiences - replace with actual data
  const experience: Experience = {
    title: "FullStack Programmer Intern",
    company: "PT Alfa Scorpii",
    period: "2024 - Present",
    description: "Developing robust CRM systems to streamline business operations and enhance customer management using Next.js.",
  };

  const aboutRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(aboutRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
      },
    });
  });

  return (
    <section id='about' ref={aboutRef} className='max-w-7xl mx-auto py-8 md:py-24 space-y-8' aria-label='About Section'>
      <h2 className='text-4xl md:text-5xl font-medium' id='about-heading'>
        About Me
      </h2>
      <div className='space-y-8 md:space-y-0 flex flex-col-reverse md:grid md:grid-cols-[3fr_2fr] gap-6 md:gap-12 lg:gap-16 items-center' role='presentation'>
        <div className='space-y-8'>
          <p className='text-xl md:text-2xl leading-relaxed font-light text-muted-foreground' aria-labelledby='about-heading'>
            I&apos;m a Next.js Developer currently studying at Universitas Mikroskil in Medan, Indonesia. My primary expertise lies in Next.js, and I&apos;m enthusiastic about crafting streamlined and
            user-friendly web interfaces. Embracing a commitment to continuous learning, I strive to stay at the forefront of industry trends, ensuring that I bring innovative solutions to the
            ever-evolving landscape of web development. Whether it&apos;s optimizing performance, collaborating on creative projects, or integrating the latest React features, I approach each task
            with passion and a dedication to delivering high-quality results.
          </p>
        </div>
        <div className='aspect-square w-full max-w-sm mx-auto md:mx-0 relative overflow-hidden rounded-full' role='img' aria-label="Farkhan Muhammad's profile picture">
          <Image src='/about.jpg' alt='Farkhan Muhammad' fill className='object-cover ' sizes='(max-width: 768px) 100vw, 33vw' loading='lazy' />
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-16'>
        <section className='space-y-8' aria-labelledby='experience-heading'>
          <h2 className='text-3xl md:text-4xl font-medium' id='experience-heading'>
            Experience
          </h2>

          <article className='border-l-2 border-muted pl-6 py-2 space-y-4' aria-label={`${experience.title} at ${experience.company}`}>
            <div className='space-y-2'>
              <h3 className='text-2xl font-medium'>{experience.title}</h3>
              <div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-4'>
                <p className='text-lg text-muted-foreground'>{experience.company}</p>
                <span className='hidden md:inline text-muted-foreground' aria-hidden='true'>
                  •
                </span>
                <time className='text-lg text-muted-foreground'>{experience.period}</time>
              </div>
            </div>
            <p className='text-lg text-muted-foreground leading-relaxed'>{experience.description}</p>
          </article>
        </section>

        <section className='space-y-8' aria-labelledby='education-heading'>
          <h2 className='text-3xl md:text-4xl font-medium' id='education-heading'>
            Education
          </h2>

          <article className='border-l-2 border-muted pl-6 py-2 space-y-4' aria-label='Education at Universitas Mikroskil'>
            <div className='space-y-2'>
              <h3 className='text-2xl font-medium'>Universitas Mikroskil</h3>
              <p className='text-lg text-muted-foreground'>Information System Major</p>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}
