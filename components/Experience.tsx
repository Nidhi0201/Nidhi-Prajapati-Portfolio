"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import Image from "next/image";

type ExperienceItem = {
  role: string;
  org: string;
  dates: string;
  year: string;
  icon: string;
  iconType?: "emoji" | "image";
  bullets: string[];
};

const ITEMS: ExperienceItem[] = [
  {
    role: "Learning Assistant",
    org: "CSUEB STEM Lab",
    dates: "Jan 2023 – Apr 2024",
    year: "2023",
    icon: "/STEM LAB.png",
    iconType: "image",
    bullets: [
      "Supported students through guided practice, explanations, and structured study sessions.",
      "Reinforced core problem-solving patterns and fundamentals in a collaborative setting.",
      "Helped create a welcoming learning environment for diverse student groups.",
    ],
  },
  {
    role: "Operations Team",
    org: "HackHayward",
    dates: "Jul 2024 – Present",
    year: "2024",
    icon: "/hackhayward-logo.png",
    iconType: "image",
    bullets: [
      "Support event operations for workshops and hackathon activities.",
      "Troubleshoot on-site issues quickly and help attendees stay unblocked.",
      "Coordinate with volunteers to maintain a high-quality event flow.",
    ],
  },
  {
    role: "Director of Operations and Logistics",
    org: "HackHayward",
    dates: "Sep 2024 – Present",
    year: "2024",
    icon: "/hackhayward-logo.png",
    iconType: "image",
    bullets: [
      "Plan logistics for events and coordinate schedules, rooms, and vendor needs.",
      "Create checklists and run-of-show processes to keep events smooth and on time.",
      "Collaborate with technical and marketing teams to deliver cohesive events.",
    ],
  },
  {
    role: "Vice President",
    org: "HackHayward",
    dates: "Aug 2025 – Present",
    year: "2025",
    icon: "/hackhayward-logo.png",
    iconType: "image",
    bullets: [
      "Support hackathon strategy, team coordination, and partner communications.",
      "Work closely with organizers and mentors to create a great developer experience.",
      "Lead initiatives that improve event operations and attendee success.",
    ],
  },
  {
    role: "Vice President",
    org: "Google Developer Groups on Campus, CSUEB",
    dates: "Aug 2025 – Present",
    year: "2025",
    icon: "/gdg.png",
    iconType: "image",
    bullets: [
      "Help lead a campus developer community through workshops, events, and collaboration.",
      "Support student developers and coordinate with cross-functional teams to ship event plans.",
      "Drive consistent execution and learning-focused programming for members.",
    ],
  },
  {
    role: "Student Assistant",
    org: "College Link Program",
    dates: "Aug 2025 – Present",
    year: "2025",
    icon: "/EAST BAY.png",
    iconType: "image",
    bullets: [
      "Coach students with Autism Spectrum Disorder (ASD) to support academic, social, and independent living success.",
      "Facilitate weekly coaching, check-ins, and in-class shadowing to build executive functioning and problem-solving skills.",
      "Collaborate with coordinators and coaching teams to track progress, promote independence, and ensure student success.",
    ],
  },
];

function TimelineLine() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const line = lineRef.current;
      if (!line) return;

      const rect = line.getBoundingClientRect();
      const lineTop = rect.top;
      const lineHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.4;

      if (lineTop >= triggerPoint) {
        setProgress(0);
      } else if (lineTop + lineHeight <= triggerPoint) {
        setProgress(100);
      } else {
        const scrolled = triggerPoint - lineTop;
        const percentage = Math.min(100, Math.max(0, (scrolled / lineHeight) * 100));
        setProgress(percentage);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={lineRef}
      className="absolute left-6 top-0 h-full w-1 overflow-hidden rounded-full bg-border/10 md:left-1/2 md:-ml-0.5"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-accent/10 to-transparent" />
      <div
        className="absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-accent via-accent/80 to-accent/60 transition-all duration-150 ease-out"
        style={{ height: `${progress}%` }}
      >
        <div className="absolute -bottom-4 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-accent/60 blur-xl" />
      </div>
    </div>
  );
}

export default function Experience() {
  let lastYear = "";

  return (
    <div>
      <Reveal>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Experience &amp; Leadership
          </h2>
          <p className="mt-3 text-sm text-foreground/60">My journey so far</p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-accent/90 to-accent/30" />
        </div>
      </Reveal>

      <div className="relative">
        <TimelineLine />

        <div className="space-y-8">
          {ITEMS.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            const showYear = item.year !== lastYear;
            lastYear = item.year;

            return (
              <Reveal key={item.role + item.org} delayMs={idx * 80}>
                <div className="relative">
                  {/* Dot */}
                  <div className="absolute left-6 top-2 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-accent/50 bg-background shadow-sm md:left-1/2 md:-translate-x-1/2">
                    <div className="absolute inset-1 rounded-full bg-accent/70 blur-sm opacity-50" />
                    <div className="absolute inset-0 rounded-full bg-accent/40" />
                  </div>

                  <div className="md:grid md:grid-cols-[1fr_1fr] md:gap-10">
                    {isLeft ? (
                      <>
                        <div className="md:col-start-1 md:flex md:justify-end">
                          <ExperienceCard item={item} align="right" />
                        </div>
                        <div className="md:col-start-2" />
                      </>
                    ) : (
                      <>
                        <div className="md:col-start-1" />
                        <div className="md:col-start-2 md:flex md:justify-start">
                          <ExperienceCard item={item} align="left" />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ item, align }: { item: ExperienceItem; align: "left" | "right" }) {
  return (
    <div className="ml-14 md:ml-0 md:w-[88%]">
      <div className="group relative rounded-2xl border border-border/20 bg-card/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow">
        <div className="absolute -top-3 right-4 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-accent/30 bg-white shadow-sm">
          {item.iconType === "image" ? (
            <Image
              src={item.icon}
              alt={item.org}
              width={40}
              height={40}
              className="h-full w-full object-cover rounded-full"
            />
          ) : (
            <span className="text-lg">{item.icon}</span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="text-left">
            <h3 className="text-base font-semibold text-foreground">{item.role}</h3>
            <p className="text-sm text-foreground/70">{item.org}</p>
          </div>
          <span className="ml-auto text-xs text-foreground/50 whitespace-nowrap">{item.dates}</span>
        </div>

        <ul className="mt-3 space-y-2 text-sm text-foreground/70 text-left">
          {item.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="text-accent">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-accent/60 to-transparent transition-all duration-300 group-hover:w-full" />
      </div>
    </div>
  );
}

