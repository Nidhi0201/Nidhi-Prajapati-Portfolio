"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Badge";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative flex flex-col items-center text-center"
    >
      {/* Status Badge */}
      <motion.div variants={item}>
        <StatusBadge status="online" pulse className="mb-5">
          Open to Summer 2026 Internships
        </StatusBadge>
      </motion.div>

      {/* Profile Image */}
      <motion.div variants={item} className="relative mb-5">
        <div className="relative h-44 w-44 sm:h-52 sm:w-52 lg:h-60 lg:w-60">
          {/* Glow behind image */}
          <div
            className="absolute inset-0 rounded-full opacity-70"
            style={{
              background: "radial-gradient(circle, rgb(var(--accent) / 0.5) 0%, transparent 70%)",
              filter: "blur(40px)",
              transform: "scale(1.3)",
            }}
          />
          <Image
            src="/profile.jpg"
            alt="Nidhi Prajapati"
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 240px"
            priority
            style={{
              maskImage: "radial-gradient(circle, black 45%, rgba(0,0,0,0.5) 65%, transparent 85%)",
              WebkitMaskImage: "radial-gradient(circle, black 45%, rgba(0,0,0,0.5) 65%, transparent 85%)",
            }}
          />
        </div>
      </motion.div>

      {/* Intro Text */}
      <motion.p
        variants={item}
        className="text-sm font-medium text-muted uppercase tracking-wider"
      >
        Hi, I&apos;m
      </motion.p>

      {/* Name */}
      <motion.h1
        variants={item}
        className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
      >
        Nidhi Prajapati
      </motion.h1>

      {/* Role/Tagline */}
      <motion.p
        variants={item}
        className="mt-2 text-lg font-medium text-accent-light sm:text-xl"
      >
        Aspiring Software Engineer
      </motion.p>

      {/* Affiliations */}
      <motion.p
        variants={item}
        className="mt-1 text-sm text-muted sm:text-base"
      >
        CS @ CSU East Bay · VP @ GDG &amp; HackHayward
      </motion.p>

      {/* Value Proposition */}
      <motion.p
        variants={item}
        className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/70 sm:text-base"
      >
        Building real-world applications with Python, JavaScript, and full-stack
        technologies. Passionate about turning ideas into clean, user-friendly
        experiences.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={item}
        className="mt-6 flex flex-wrap justify-center gap-3"
      >
        <ButtonLink
          href="#projects"
          variant="primary"
          size="md"
          icon={
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          }
        >
          View Projects
        </ButtonLink>

        <ButtonLink
          href="#contact"
          variant="secondary"
          size="md"
          icon={
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          }
        >
          Contact Me
        </ButtonLink>

        <ButtonLink
          href="/resume.pdf"
          variant="ghost"
          size="md"
          external
          icon={
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          }
        >
          Resume
        </ButtonLink>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        variants={item}
        className="mt-10 flex flex-col items-center gap-1"
      >
        <span className="text-[10px] text-muted">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-6 w-4 rounded-full border border-border/30 p-0.5"
        >
          <div className="h-1.5 w-full rounded-full bg-accent/50" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
