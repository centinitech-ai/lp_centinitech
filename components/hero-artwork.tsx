"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function HeroArtwork() {
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = frame.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 18;
        const y = (event.clientY / window.innerHeight - 0.5) * 14;
        el.style.setProperty("--pointer-x", `${x}px`);
        el.style.setProperty("--pointer-y", `${y}px`);
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <div className="hero-art" ref={frame} aria-hidden="true">
      <div className="hero-art__halo" />
      <div className="hero-art__float">
        <Image src="/brain-hero.webp" alt="" fill priority sizes="(max-width: 720px) 100vw, 60vw" className="hero-art__image" />
      </div>
      <span className="hero-art__orbit hero-art__orbit--one" />
      <span className="hero-art__orbit hero-art__orbit--two" />
      <span className="hero-art__label">INTELIGÊNCIA EM MOVIMENTO <i /></span>
    </div>
  );
}

