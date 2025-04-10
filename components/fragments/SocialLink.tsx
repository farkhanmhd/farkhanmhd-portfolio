import { Link } from "next-view-transitions";
import React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export type SocialLinkProp = {
  href: string;
  text: string;
};

const SocialLink: React.FC<SocialLinkProp> = ({ href, text }) => {
  const isExternal = !href.startsWith("mailto:");
  const ariaLabel = isExternal ? `${text} (opens in new tab)` : text;

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(buttonVariants({ variant: "outline", size: "sm" }), "rounded-full cursor-none")}
      aria-label={ariaLabel}
    >
      {text}
    </Link>
  );
};

export default SocialLink;
