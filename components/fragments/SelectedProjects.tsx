"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Updated import
import { useGSAP } from "@gsap/react";
import MapItems from "@/utils";
import { projects } from "@/app/data";
import SelectedProject from "./SelectedProject";

const SelectedWorks: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
    });
  });

  return (
    <section id='projects' className='py-8 md:py-24' aria-label='Selected Projects'>
      <div className='max-w-7xl mx-auto px-3 md:px-6 space-y-12'>
        <h2 id='selected-projects' ref={titleRef} className='text-4xl md:text-5xl font-medium'>
          Selected Projects
        </h2>
        <div className='space-y-12'>
          <MapItems of={projects} render={(work, index) => <SelectedProject key={index} {...work} />} />
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
