"use client";

import React, { useRef } from "react";
import { Link } from "next-view-transitions";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { SelectedProjectProps } from "@/types";
import Image from "next/image";

const SelectedProject: React.FC<SelectedProjectProps> = ({ id, image, label, caption }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const descriptionId = `work-${id}-description`;
  const titleId = `work-${id}-title`;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
      },
    });
  });

  return (
    <Link href={`/projects/${id}`} className='cursor-none group block' aria-labelledby={titleId} aria-describedby={descriptionId} role='article' scroll>
      <figure ref={cardRef} className='space-y-6'>
        <Image src={image} alt={`Preview of ${label}`} className='w-full h-full object-cover rounded-3xl aspect-[4/3] md:aspect-video' width={1000} height={1000} loading='lazy' />
        <figcaption className='flex justify-between items-center'>
          <div className='space-y-2'>
            <h3 id={titleId} className='text-3xl font-semibold'>
              {label}
            </h3>
            <p id={descriptionId} className='text-sm line-clamp-1 md:text-base font-light text-muted-foreground'>
              {caption}
            </p>
          </div>
          <div className='border border-white p-2 rounded-full group-hover:text-black group-hover:bg-white transition-colors duration-300 ease-in-out' aria-hidden='true'>
            <ArrowRight />
          </div>
        </figcaption>
      </figure>
    </Link>
  );
};

export default SelectedProject;
