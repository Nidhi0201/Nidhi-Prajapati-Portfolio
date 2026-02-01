"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui";
import Badge from "@/components/ui/Badge";

const HIGHLIGHTS = [
  { label: "CS Student", icon: "🎓" },
  { label: "Full Stack Dev", icon: "💻" },
  { label: "AI/ML Enthusiast", icon: "🤖" },
  { label: "Community Leader", icon: "🌟" },
];

export default function About() {
  return (
    <SectionContainer id="about" title="About Me" subtitle="A quick intro">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl glass border-border/8 p-6 sm:p-8"
        >
          <p className="text-base leading-relaxed text-foreground/80">
            I&apos;m a Computer Science student specializing in{" "}
            <span className="text-accent-light font-medium">AI/ML, LLMs, and scalable software development</span>.
            I love turning ideas into real, functional systems—whether it&apos;s building intelligent models,
            designing clean backend architecture, or crafting smooth full-stack experiences.
          </p>

          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            My work spans Python, Java, C++, React, FastAPI, SQL, and cloud technologies. I thrive on
            learning, experimenting, and transforming complexity into solutions that feel{" "}
            <span className="text-accent-light font-medium">simple, intuitive, and useful</span>.
          </p>

          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            Through leading technical initiatives and community building, I&apos;ve learned to
            build with intention, curiosity, and a focus on impact.
          </p>

          {/* Quick facts */}
          <div className="mt-6 pt-6 border-t border-border/10">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
              Quick Facts
            </h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Based in the Bay Area, California
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Passionate about developer communities
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Always learning something new
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Highlights sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          {HIGHLIGHTS.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-xl glass border-border/8 p-4 flex items-center gap-3 transition-all duration-300 hover:border-accent/20 hover:shadow-glow-sm"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-medium text-foreground/90">{item.label}</span>
            </motion.div>
          ))}

          {/* Current status */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: HIGHLIGHTS.length * 0.1 }}
            className="rounded-xl bg-gradient-to-br from-accent/10 to-accent-light/5 border border-accent/20 p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-light">
                Currently
              </span>
            </div>
            <p className="text-sm text-foreground/80">
              Looking for Summer 2026 SWE internships
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
