"use client";

import React from "react";
import { Link } from "next-view-transitions";
import { ArrowRight } from "lucide-react";
import { SelectedProjectProps } from "@/types";
import Image from "next/image";

const ProjectCard: React.FC<SelectedProjectProps> = ({ id, image, label, caption }) => {
  const descriptionId = `work-${id}-description`;
  const titleId = `work-${id}-title`;

  return (
    <Link href={`/projects/${id}`} className='group cursor-none block' aria-labelledby={titleId} aria-describedby={descriptionId} role='article' scroll>
      <figure className='space-y-6'>
        <Image src={image} alt={`Preview of ${label}`} className='w-full h-full object-cover rounded-3xl aspect-[4/3] md:aspect-video' width={1000} height={1000} />
        <figcaption className='flex justify-between items-center'>
          <div className='space-y-2'>
            <h3 id={titleId} className='text-2xl font-semibold'>
              {label}
            </h3>
            <p id={descriptionId} className='font-light line-clamp-1 text-muted-foreground'>
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

export default ProjectCard;
