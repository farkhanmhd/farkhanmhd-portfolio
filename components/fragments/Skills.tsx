import React from "react";
import MapItems from "@/utils";
import { SiPostgresql, SiDrizzle, SiReact, SiNextdotjs, SiSupabase, SiTailwindcss, SiShadcnui, SiTypescript } from "react-icons/si";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import Elysia from "./Elysia";

const skills = [
  {
    tooltip: "Next.JS",
    icon: SiNextdotjs,
  },
  {
    tooltip: "React",
    icon: SiReact,
  },
  {
    tooltip: "TypeScript",
    icon: SiTypescript,
  },
  {
    tooltip: "TailwindCSS",
    icon: SiTailwindcss,
  },
  {
    tooltip: "Shadcn/UI",
    icon: SiShadcnui,
  },
  {
    tooltip: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    tooltip: "Supabase",
    icon: SiSupabase,
  },
  {
    tooltip: "Drizzle",
    icon: SiDrizzle,
  },
  {
    tooltip: "Elysia.JS",
    icon: Elysia,
  },
];

const Skills = () => {
  return (
    <ul className='flex flex-wrap justify-evenly gap-6'>
      <MapItems
        of={skills}
        render={(skill, index) => (
          <li key={`${index}-${skill.tooltip}`}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <skill.icon style={{ width: "64px", height: "64px" }} />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </li>
        )}
      />
    </ul>
  );
};

export default Skills;
