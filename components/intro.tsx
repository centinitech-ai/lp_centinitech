"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./brand";

export function Intro() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<"mark" | "name" | "exit">("mark");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || sessionStorage.getItem("centini-intro-seen")) {
      setVisible(false);
      return;
    }
    const name = window.setTimeout(() => setPhase("name"), 1600);
    const exit = window.setTimeout(() => setPhase("exit"), 4400);
    const done = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("centini-intro-seen", "1");
    }, 5500);
    return () => [name, exit, done].forEach(window.clearTimeout);
  }, []);

  function skip() {
    setVisible(false);
    sessionStorage.setItem("centini-intro-seen", "1");
  }

  if (!visible) return null;
  return (
    <div className={`intro intro--${phase}`} role="dialog" aria-label="Abertura Centini Tech">
      <div className="intro__grid" />
      <div className="intro__center">
        <BrandMark className="intro__mark" />
        <div className="intro__wordwrap"><span className="intro__word">centini<span>tech</span></span><span className="intro__cursor" /></div>
      </div>
      <span className="intro__index">C/T — 001</span>
      <button className="intro__skip" onClick={skip} type="button">Pular introdução <span aria-hidden="true">↗</span></button>
    </div>
  );
}

