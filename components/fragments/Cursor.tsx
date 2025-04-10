"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Cursor = () => {
  useGSAP(() => {
    document.addEventListener("mousemove", (e) => {
      gsap.to("#cursor", {
        x: e.clientX - 10,
        y: e.clientY - 10,
      });
    });
  });

  return <div id='cursor' className='fixed hidden lg:block h-6 pointer-events-none w-6 rounded-full bg-white mix-blend-difference z-[99999]' />;
};

export default Cursor;
