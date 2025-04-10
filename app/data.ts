import { SelectedProjectProps } from "@/types";

export const projects: SelectedProjectProps[] = [
  {
    id: "1",
    image: "/work1.png",
    label: "Alfa Scorpii CRM",
    caption: "Web Application for Alfa Scorpii CRM",
    description: "A comprehensive customer relationship management system built for PT Alfa Scorpii, featuring contact management and automated reporting capabilities.",
    meta: {
      "framework": "Next.js",
      "programming language": "TypeScript",
      "state management": "Jotai",
      "ui": "Shadcn UI",
      "css": "Tailwind CSS",
    },
    content: "AlfaScorpii",
  },
  {
    id: "2",
    image: "/work2.png",
    label: "UAS Menyapa",
    caption: "Event Ticketing Web Application for UAS Menyapa",
    description: "A full-featured event ticketing platform developed for UAS Menyapa, enabling seamless ticket purchases, QR code generation, and Ticket scan.",
    website: "https://uasmenyapa.com",
    meta: {
      "framework": "Next.js",
      "programming language": "TypeScript",
      "state management": "Jotai",
      "database": "mySQL",
      "ORM": "Drizzle ORM",
      "auth": "Auth.js V5",
      "ui": "Shadcn UI",
      "css": "Tailwind CSS",
    },
    content: "UASMenyapa",
  },
  {
    id: "3",
    image: "/work4.png",
    label: "SocialHub",
    caption: "Clone of Threads by Instagram",
    description: "A social media application inspired by Threads, featuring real-time posts, user interactions, and responsive design. Built with modern web technologies for optimal performance.",
    github: "https://github.com/farkhanmhd/social-hub",
    website: "https://social-hub-farkhan.vercel.app/",
    meta: {
      "framework": "Next.js",
      "programming language": "TypeScript",
      "state management": "Redux",
      "css": "Tailwind CSS",
    },
    content: "SocialHub",
  },
];
