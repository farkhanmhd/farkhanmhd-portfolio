import React from "react";
import ProjectPage from "./ProjectPage";
import { projects } from "@/app/data";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { id } = params;
  const project = projects.find((project) => project.id === id);
  return {
    title: project ? project.label : "Project",
  };
}

const Page = async (props: Props) => {
  const params = await props.params;
  const { id } = params;
  const project = projects.find((project) => project.id === id);

  const { default: Content } = await import(`@/contents/${project!.content}.mdx`);
  return <ProjectPage project={project!} content={<Content />} />;
};

export default Page;
