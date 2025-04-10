import React from "react";
import ProjectPage from "./ProjectPage";
import { projects } from "@/app/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { id } = params;
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: project.label,
    description: project.description,
  };
}

const Page = async (props: Props) => {
  const params = await props.params;
  const { id } = params;
  const project = projects.find((project) => project.id === id);

  if (!project) {
    notFound();
  }

  const { default: Content } = await import(`@/contents/${project!.content}.mdx`);

  return <ProjectPage project={project!} content={<Content />} />;
};

export default Page;
