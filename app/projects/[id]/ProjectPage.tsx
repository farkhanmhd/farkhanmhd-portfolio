"use client";

import React from "react";
import { useTransitionRouter } from "next-view-transitions";
import { ChevronLeft } from "lucide-react";
import { SelectedProjectProps } from "@/types";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { projects } from "@/app/data";
import ProjectCard from "@/components/fragments/ProjectCard";
import MapItems from "@/utils";

type Props = {
  project: SelectedProjectProps;
  content: React.ReactNode;
};

const ProjectPage = ({ project, content }: Props) => {
  const { back } = useTransitionRouter();
  const otherProjects = projects.filter((p) => p.id !== project.id);

  return (
    <section className='pt-[84px]' aria-label='Project Details'>
      <div className='flex flex-col lg:flex-row max-w-7xl mx-auto px-6'>
        <aside className='lg:h-[calc(100dvh-84px)] space-y-4 py-4 lg:pr-12 lg:top-[84px] lg:w-5/12 lg:sticky lg:border-r'>
          <Button type='button' variant='ghost' onClick={back} className='rounded-full items-center cursor-none'>
            <ChevronLeft />
            <span>Back</span>
          </Button>
          <div className='space-y-8'>
            <h2 className='text-4xl lg:text-5xl font-bold'>{project!.label}</h2>
            <p className='text-muted-foreground'>{project!.description}</p>
          </div>
          {(project?.github || project?.website) && (
            <div className='grid gap-4 items-center w-full' style={{ gridTemplateColumns: "repeat(auto-fit, minmax(0, 1fr))" }}>
              {project?.github && (
                <Link href={project.github} className={cn(buttonVariants(), "cursor-none")} style={{ borderRadius: "6px" }}>
                  GitHub
                </Link>
              )}
              {project?.website && (
                <Link href={project.website} className={cn(buttonVariants({ variant: "outline" }), "cursor-none")} style={{ borderRadius: "6px" }}>
                  Live Website
                </Link>
              )}
            </div>
          )}
          <div>
            {Object.entries(project?.meta || {}).map(([key, value]) => (
              <div key={key} className='text-muted-foreground text-sm py-2 border-b last:border-b-0 flex items-center justify-between gap-2'>
                <span
                  className={cn("font-medium", {
                    uppercase: key === "ui" || key === "css",
                    capitalize: key !== "ui" && key !== "css",
                  })}
                >
                  {key}
                </span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </aside>
        <article className='lg:w-7/12 py-6 lg:py-4 lg:pl-12 space-y-6'>
          <Image src={project.image} alt='Project Image' width={800} height={600} className='w-full' style={{ borderRadius: "8px" }} />
          <div>{content}</div>
        </article>
      </div>
      <div className='bg-secondary/50 py-6 lg:py-12'>
        <div className='max-w-7xl px-3 md:px-6 mx-auto space-y-6'>
          <h2 className='text-3xl lg:text-4xl font-medium'>Other Projects</h2>
          <div className='flex flex-col md:flex-row gap-6 items-center'>
            <MapItems of={otherProjects} render={(other) => <ProjectCard key={other.id} {...other} />} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
