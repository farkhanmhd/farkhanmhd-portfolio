"use client";

import React, { useRef } from "react";
import SocialLink, { SocialLinkProp } from "./SocialLink";
import MapItems from "@/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const links: SocialLinkProp[] = [
  {
    href: "https://linkedin.com/in/farkhanmhd",
    text: "LinkedIn",
  },
  {
    href: "https://github.com/farkhanmhd",
    text: "GitHub",
  },
  {
    href: "https://instagram.com/farkhanmhd",
    text: "Instagram",
  },
  {
    text: "Mail",
    href: "mailto:farkhanmuhammad@outlook.com",
  },
];

const HeroSection: React.FC = () => {
  const helloRef = useRef<HTMLSpanElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);

  // const heroText = isMobile
  //   ? "I'm Farkhan, a Next.js developer from Medan, Indonesia, passionate about crafting intuitive and engaging web apps."
  //   : "I'm Farkhan, a Next.js developer based in Medan, Indonesia, passionate about creating intuitive and engaging web applications. I focus on building seamless digital experiences that are both functional and visually appealing. Let's bring ideas to life!";

  const heroText = " I'm Farkhan, a Next.js Developer Dedicated to Crafting Engaging Digital Experience";

  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline
      .to(helloRef.current, {
        y: 0,
        duration: 0.5,
        ease: "power1.inOut",
        opacity: 1,
      })
      .to(heroTextRef.current, {
        duration: 0.5,
        ease: "power3.inOut",
        opacity: 1,
      })
      .to(socialLinksRef.current, {
        to: "power3.inOut",
        opacity: 1,
      });
  });

  return (
    <section className='h-screen pb-20 flex flex-col justify-end' aria-label='Hero section'>
      {/* <p ref={welcomeRef} className='opacity-0 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl lg:text-[80px] font-semibold leading-tight text-center'>
        Hey there! Welcome to my Portfolio
      </p> */}
      <div>
        <p className='text-muted-foreground text-xl font-light mb-7 overflow-hidden'>
          <span className='block opacity-0 translate-y-[30px]' ref={helloRef}>
            Hello,
          </span>
        </p>
        <h1 ref={heroTextRef} className='text-4xl md:text-5xl lg:text-[80px] font-semibold leading-tight opacity-0'>
          {heroText}
        </h1>
      </div>
      <nav ref={socialLinksRef} aria-label='Social links' className='opacity-0'>
        <ul className='flex flex-wrap gap-4 mt-16 list-none'>
          <MapItems
            of={links}
            render={(link, index) => (
              <li key={index}>
                <SocialLink {...link} />
              </li>
            )}
          />
        </ul>
      </nav>
    </section>
  );
};

export default HeroSection;
