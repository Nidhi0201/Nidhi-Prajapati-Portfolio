"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useEffect, useState } from "react";

const TITLES = ["Nidhi Prajapati", "Aspiring SWE", "Hack Catalyst", "Innovation Lead", "Silicon Valley Dreamer"];
const FULL_NAME = "Nidhi Prajapati";

function TypewriterText() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isDone) return;
    const currentText = index >= TITLES.length ? FULL_NAME : TITLES[index];

    if (isTyping) {
      if (display.length < currentText.length) {
        const t = setTimeout(() => setDisplay(currentText.slice(0, display.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        if (index >= TITLES.length) {
          setIsDone(true);
          return;
        }
        const t = setTimeout(() => setIsTyping(false), 1500);
        return () => clearTimeout(t);
      }
    } else {
      if (display.length > 0) {
        const t = setTimeout(() => setDisplay(display.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        const next = index + 1;
        if (next > TITLES.length) {
          setIsDone(true);
          return;
        }
        setIndex(next);
        setIsTyping(true);
      }
    }
  }, [display, isTyping, index, isDone]);

  const isShowingName = index >= TITLES.length || index === 0;

  return (
    <div className="h-[1.2em]">
      <span className={isShowingName ? "" : "bg-gradient-to-r from-accent via-purple-400 to-pink-400 bg-clip-text text-transparent"}>
        {display}
      </span>
      {!isDone && <span className="ml-0.5 inline-block w-[2px] h-[0.9em] align-middle bg-accent animate-pulse" />}
    </div>
  );
}

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center">
      <Reveal delayMs={0}>
        <div className="relative mb-4 sm:mb-5">
          <div className="absolute inset-0 rounded-full bg-accent/10 blur-2xl" />
          <div className="relative h-44 w-44 overflow-hidden rounded-full bg-card shadow-md sm:h-56 sm:w-56 lg:h-64 lg:w-64">
            <Image
              src="/profile.jpg"
              alt="Profile photo"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 176px, 224px"
              priority
            />
          </div>
        </div>
      </Reveal>

      <Reveal delayMs={80}>
        <p className="text-sm font-medium text-foreground/70">Hi, I&apos;m</p>
      </Reveal>

      <Reveal delayMs={140}>
        <h1 className="mt-1.5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          <TypewriterText />
        </h1>
      </Reveal>

      <Reveal delayMs={200}>
        <p className="mt-2 text-sm font-medium text-foreground/60 sm:text-base">
          CS @ CSU East Bay · VP @ GDG &amp; HackHayward
        </p>
      </Reveal>

      <Reveal delayMs={260}>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/70 sm:text-base">
          I&apos;m a Computer Science student in the Bay Area focused on building
          real-world projects using Python, JavaScript, and full‑stack web
          development. I love turning ideas into clean, user‑friendly
          experiences.
        </p>
      </Reveal>

      <Reveal delayMs={320}>
        <div className="mt-5 flex flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-accent/90 to-accent/50 px-6 py-3 text-sm font-semibold text-foreground shadow-glow transition hover:scale-[1.02]"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-border/15 bg-card px-6 py-3 text-sm font-semibold text-foreground/90 shadow-sm transition hover:shadow-glow"
          >
            Resume
          </a>
        </div>
      </Reveal>
    </div>
  );
}

