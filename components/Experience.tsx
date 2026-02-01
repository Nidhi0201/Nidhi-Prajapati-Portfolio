"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionContainer } from "@/components/ui";
import Badge from "@/components/ui/Badge";

type ExperienceItem = {
  role: string;
  org: string;
  dates: string;
  year: string;
  icon: string;
  iconType?: "emoji" | "image";
  bullets: string[];
  expanded?: boolean;
};

const ITEMS: ExperienceItem[] = [
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
    role: "President",
    org: "HackHayward",
    dates: "Aug 2025 – Present",
    year: "2025",
    icon: "/hackhayward-logo.png",
    iconType: "image",
    bullets: [
      "Lead hackathon strategy, team coordination, and partner communications.",
      "Work closely with organizers and mentors to create a great developer experience.",
      "Drive initiatives that improve event operations and attendee success.",
    ],
  },
  {
    role: "Student Assistant",
    org: "College Link Program, CSUEB",
    dates: "Aug 2025 – Present",
    year: "2025",
    icon: "/college-link.png",
    iconType: "image",
    bullets: [
      "Support students with Autism Spectrum Disorder (ASD) using structured workflows and clear documentation.",
      "Maintain consistent progress tracking and provide individualized coaching in a high-responsibility environment.",
      "Collaborate with program coordinators to develop inclusive strategies that promote student independence and success.",
      "Facilitate weekly check-ins and in-class support to build executive functioning and problem-solving skills.",
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
      className="absolute left-6 top-0 h-full w-0.5 overflow-hidden rounded-full bg-border/10 md:left-1/2 md:-ml-px"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-accent/5 to-transparent" />
      
      {/* Progress fill */}
      <div
        className="absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-accent via-accent/80 to-accent-light transition-all duration-150 ease-out"
        style={{ height: `${progress}%` }}
      >
        {/* Glow at the bottom of progress */}
        <div className="absolute -bottom-2 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-accent/60 blur-lg" />
      </div>
    </div>
  );
}

function ExperienceCard({
  item,
  index,
  isExpanded,
  onToggle,
}: {
  item: ExperienceItem;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute left-6 top-3 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent/50 bg-background md:left-1/2">
        <div className="absolute inset-0.5 rounded-full bg-accent/70" />
      </div>

      {/* Card positioning for alternating layout */}
      <div className="md:grid md:grid-cols-[1fr_1fr] md:gap-10">
        {isLeft ? (
          <>
            <div className="md:col-start-1 md:flex md:justify-end">
              <ExperienceCardContent
                item={item}
                align="right"
                isExpanded={isExpanded}
                onToggle={onToggle}
              />
            </div>
            <div className="md:col-start-2" />
          </>
        ) : (
          <>
            <div className="md:col-start-1" />
            <div className="md:col-start-2 md:flex md:justify-start">
              <ExperienceCardContent
                item={item}
                align="left"
                isExpanded={isExpanded}
                onToggle={onToggle}
              />
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

function ExperienceCardContent({
  item,
  align,
  isExpanded,
  onToggle,
}: {
  item: ExperienceItem;
  align: "left" | "right";
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="ml-14 md:ml-0 md:w-[90%]">
      <div className="group relative rounded-2xl glass border-border/8 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover hover:border-accent/20">
        {/* Organization icon */}
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

        {/* Header */}
        <div className="flex items-start gap-3 pr-12">
          <div className="flex-1 text-left">
            <h3 className="text-base font-semibold text-foreground">{item.role}</h3>
            <p className="text-sm text-muted">{item.org}</p>
          </div>
          <Badge variant="outline" size="sm" className="flex-shrink-0">
            {item.dates}
          </Badge>
        </div>

        {/* Bullets - Collapsible */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 space-y-2 text-sm text-muted text-left overflow-hidden"
            >
              {item.bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                  <span>{b}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <button
          onClick={onToggle}
          className="mt-3 flex items-center gap-1 text-xs text-accent-light hover:text-accent transition-colors"
        >
          {isExpanded ? (
            <>
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              Show less
            </>
          ) : (
            <>
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Show details
            </>
          )}
        </button>

        {/* Bottom accent line on hover */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-accent to-accent-light transition-all duration-300 group-hover:w-full" />
      </div>
    </div>
  );
}

export default function Experience() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0]));

  const toggleItem = (index: number) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedItems(new Set(ITEMS.map((_, i) => i)));
  };

  const collapseAll = () => {
    setExpandedItems(new Set());
  };

  return (
    <SectionContainer
      id="experience"
      title="Experience & Leadership"
      subtitle="My journey in tech and community building"
      centered
    >
      {/* Expand/Collapse controls */}
      <div className="mb-8 flex justify-center gap-2">
        <button
          onClick={expandAll}
          className="text-xs text-muted hover:text-foreground transition-colors px-3 py-1 rounded-full border border-border/10 hover:border-accent/20"
        >
          Expand all
        </button>
        <button
          onClick={collapseAll}
          className="text-xs text-muted hover:text-foreground transition-colors px-3 py-1 rounded-full border border-border/10 hover:border-accent/20"
        >
          Collapse all
        </button>
      </div>

      {/* Timeline */}
      <div className="relative">
        <TimelineLine />

        <div className="space-y-8">
          {ITEMS.map((item, idx) => (
            <ExperienceCard
              key={item.role + item.org}
              item={item}
              index={idx}
              isExpanded={expandedItems.has(idx)}
              onToggle={() => toggleItem(idx)}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
