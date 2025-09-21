"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [currentTime, setCurrentTime] = useState<string>("");

  // Update year and time
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const timezone = now.toLocaleString("en-US", { timeZoneName: "short" }).split(" ").pop();
      setCurrentTime(`${hours}:${minutes}:${seconds} ${timezone}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id='contact' className='py-8 bg-background mix-blend-difference' role='contentinfo' aria-label='Contact section and footer'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 space-y-20 md:space-y-32'>
        <section className='text-center space-y-12 md:space-y-16' aria-labelledby='contact-heading'>
          <p className='text-sm md:text-base tracking-wide uppercase' aria-hidden='true'>
            HAVE A PROJECT IN MIND?
          </p>

          <h2 id='contact-heading' className='text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight'>
            LET&apos;S CREATE
            <br />
            GREAT THINGS <span className='font-serif italic'>together.</span>
          </h2>

          <div>
            <Link
              href='mailto:farkhanmuhammad@outlook.com'
              className='inline-block border px-8 py-3 text-sm tracking-wide uppercase hover:bg-black hover:text-white transition-colors duration-300 cursor-none'
              aria-label='Send email to Farkhan Muhammad'
            >
              Get in Touch
            </Link>
          </div>
        </section>

        <div className='flex flex-col md:flex-row justify-between items-center text-xs md:text-base text-black/70 pt-8 border-t border-white/10'>
          <p className='text-sm'>© {currentYear} Farkhan Muhammad. All rights reserved.</p>

          <div className='flex items-center gap-6 my-6 md:my-0' aria-label='Current location and time'>
            <time dateTime={new Date().toISOString()}>{currentTime}</time>
          </div>

          <nav className='flex items-center gap-8' aria-label='Social media links'>
            <ul className='flex items-center gap-8 list-none'>
              <li>
                <Link
                  href='https://linkedin.com/in/farkhanmhd'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-black text-black/60 transition-colors cursor-none'
                  aria-label='Visit LinkedIn profile'
                >
                  LINKEDIN
                </Link>
              </li>
              <li>
                <Link
                  href='https://github.com/farkhanmhd'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-black text-black/60 transition-colors cursor-none'
                  aria-label='Visit GitHub profile'
                >
                  GITHUB
                </Link>
              </li>
              <li>
                <Link
                  href='https://instagram.com/farkhanmhd'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-black text-black/60 transition-colors cursor-none'
                  aria-label='Visit Instagram profile'
                >
                  INSTAGRAM
                </Link>
              </li>
              <li>
                <button onClick={scrollToTop} className='ml-2 p-1 transition-colors cursor-none text-black/60 hover:text-black' aria-label='Scroll to top of page'>
                  <ArrowUp size={16} />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
