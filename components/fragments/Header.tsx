"use client";

import type React from "react";
import { useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { useGSAP } from "@gsap/react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const Header: React.FC = () => {
  const headerRef = useRef<HTMLHeadElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.to(headerRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut",
    });
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/#projects", label: "Projects", ariaLabel: "View my projects" },
    { href: "/#about", label: "About", ariaLabel: "View about me" },
    { href: "https://drive.google.com/file/d/1mwrrG6EQhx9ZgM5hno77K54efTELFyhf/view?usp=sharing", label: "Resume", ariaLabel: "View Resume", target: "_blank", rel: "noopener noreferrer" },
  ];

  return (
    <header
      ref={headerRef}
      className='py-5 -translate-y-[84px] fixed opacity-0 top-0 left-0 bg-background/75 backdrop-blur-md z-[999] w-screen pointer-events-auto'
      role='banner'
      aria-label='Main header'
    >
      <div className='flex items-center mx-auto  justify-between max-w-7xl px-3 md:px-6'>
        <Link href='/' className='flex space-x-3.5 items-center group cursor-none'>
          <Image src='/profile.jpeg' alt='Farkhan Muhammad Profile' className='hidden lg:block w-10 h-10 rounded-full object-cover' width={40} height={40} />
          <div>
            <h1 className='text-white'>Farkhan Muhammad</h1>
            <p className='text-sm text-muted-foreground group-hover:text-white duration-200 font-light'>Next.js Developer</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex gap-x-6 items-center'>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className='text-muted-foreground text-sm hover:text-white duration-200 cursor-none' aria-label={item.ariaLabel}>
              {item.label}
            </Link>
          ))}
          <Link href='/#contact' className={cn(buttonVariants(), "rounded-full cursor-none")} aria-label='Send an email to Farkhan Muhammad'>
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className='md:hidden'>
          {/* Hamburger Button - Always visible */}
          <button
            className='flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-[10000] relative cursor-none'
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <div className={cn("w-6 h-0.5 bg-white transition-transform duration-300", isMenuOpen ? "translate-y-2 rotate-45" : "")} />
            <div className={cn("w-6 h-0.5 bg-white transition-transform duration-300", isMenuOpen ? "-translate-y-0 -rotate-45" : "")} />
          </button>

          {/* Sheet Component */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetContent side='right' className='w-[80vw] sm:w-[350px] bg-background/95 backdrop-blur-md z-[9999] p-0 border-l border-white/10' showCloseButton={false}>
              <div className='h-full flex flex-col p-6'>
                <SheetHeader className='mb-12'>
                  <SheetTitle className='text-left text-2xl font-light'>Farkhan Muhammad</SheetTitle>
                </SheetHeader>

                <nav className='flex flex-col space-y-0 flex-1'>
                  {navItems.map((item, index) => (
                    <Link
                      {...item}
                      key={item.href}
                      href={item.href}
                      className='group py-6 border-b border-white/10 flex items-center justify-between cursor-none'
                      onClick={() => setIsMenuOpen(false)}
                      aria-label={item.ariaLabel}
                    >
                      <div className='flex items-baseline gap-3'>
                        <span className='text-xs text-white/40 font-light'>0{index + 1}</span>
                        <span className='text-xl font-light text-white/70 group-hover:text-white transition-colors duration-300'>{item.label}</span>
                      </div>
                      <div className='w-5 h-0.5 bg-white/0 group-hover:bg-white/70 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0'></div>
                    </Link>
                  ))}
                </nav>

                <div className='mt-auto pt-12'>
                  <Link
                    href='/#contact'
                    className={cn(
                      "py-4 px-6 border border-white/20 text-white hover:bg-white hover:text-black rounded-none w-full flex justify-center items-center text-base font-light tracking-wide transition-all duration-300 cursor-none",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                    aria-label='Send an email to Farkhan Muhammad'
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
