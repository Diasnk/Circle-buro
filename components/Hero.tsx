"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(logoRef.current, 
      { scale: 0.5, opacity: 0, rotate: -20 }, 
      { scale: 1, opacity: 1, rotate: 0, duration: 1, ease: "elastic.out(1, 0.5)" }
    );
  }, []);

  return (
    <section className="relative z-10 w-full h-screen bg-brand-yellow rounded-b-[50px] md:rounded-b-3xl flex flex-col items-center justify-center shadow-lg overflow-hidden">
      <div ref={logoRef} className="flex flex-col items-center">
        <img 
          src="/steppe-logo.png" 
          alt="Steppe Goat" 
          className="w-80 md:w-md sm:w-48 mb-8 object-contain"
        />
      </div>
    </section>
  );
}