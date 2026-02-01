"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionContainer } from "@/components/ui";
import Badge, { FilterChip } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

type Project = {
  name: string;
  description: string;
  impact: string;
  tech: string[];
  category: string[];
  role?: string;
  github?: string;
  live?: string;
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    name: "SignalOps - Log Observability Platform",
    description:
      "Engineered a full-stack tool to ingest/index structured logs, reducing system debugging time by approximately 40%. Built automated alert pipelines using Python and OpenSearch to detect anomalies in real-time. Containerized the application using Docker for consistent deployment.",
    impact: "Reduced debugging time by ~40% and lowered Mean Time to Detection",
    tech: ["FastAPI", "PostgreSQL", "OpenSearch", "Docker", "Next.js"],
    category: ["Full Stack", "Backend", "Web"],
    role: "Full Stack Developer",
    github: "https://github.com/Nidhi0201/SignalOps",
    live: "http://agent-69731e76b0fb0e35005a44ee--signalop.netlify.app",
    featured: true,
  },
  {
    name: "Autonomous Resume Reviewer Agent",
    description:
      "Developed a GenAI backend using FastAPI to parse resumes and provide actionable, structured feedback via LLM chains. Optimized API response time by 30% through efficient prompt engineering and asynchronous request handling. Built a responsive Next.js frontend to visualize feedback.",
    impact: "Optimized API response time by 30% with efficient prompt engineering",
    tech: ["Python", "FastAPI", "LangGraph", "LLMs (Groq)", "Next.js"],
    category: ["AI/ML", "Full Stack", "Backend"],
    role: "Full Stack Developer",
    github: "https://github.com/Nidhi0201/Autonomous-Resume-Reviewer-Agent",
    live: "https://6968a0fa478f0214e9b0fe88--autonomous-resume-reviewer-agent.netlify.app",
    featured: true,
  },
  {
    name: "Personal Portfolio Website",
    description:
      "A dynamic, interactive single-page portfolio featuring an animated 3D topology background, typewriter effects, scroll-triggered animations, and an interactive experience timeline.",
    impact: "Modern web experience with smooth interactions and responsive design",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    category: ["Frontend", "Web"],
    role: "Full Stack Developer",
    github: "https://github.com/Nidhi0201/Nidhi-Prajapati-Portfolio",
    live: "https://nidhiprajapati.dev",
  },
  {
    name: "AI CRM Insight Dashboard",
    description:
      "A full-stack AI-powered CRM dashboard leveraging machine learning for intelligent insights and predictive analytics.",
    impact: "Helps businesses make data-driven decisions with real-time analytics",
    tech: ["FastAPI", "React", "scikit-learn", "Python"],
    category: ["AI/ML", "Full Stack"],
    role: "Full Stack Developer",
    github: "https://github.com/Nidhi0201/ai-crm-insight-dashboard",
    live: "https://aicrminsight.netlify.app",
  },
  {
    name: "Scalable Banking System",
    description:
      "Client-server banking application with TCP/IP socket communication supporting ATM and Teller clients with concurrent user access.",
    impact: "Multi-threaded server handling concurrent banking transactions securely",
    tech: ["Java", "Java Swing", "TCP/IP", "Multithreading"],
    category: ["Backend", "Systems"],
    role: "Software Engineer",
    github: "https://github.com/Nidhi0201/Multi-Client-Banking-System",
    live: "https://multi-client-banking-system.vercel.app",
  },
  {
    name: "Ethical Dilemma Simulator",
    description:
      "Interactive web app presenting moral scenarios that calculates user honesty and empathy scores with data visualization.",
    impact: "Engaging ethical decision-making experience with analytics",
    tech: ["C#", "ASP.NET Core", "Razor Pages", "Google Charts"],
    category: ["Web", "Backend"],
    role: "Full Stack Developer",
    github: "https://github.com/Nidhi0201/DilemmaSimWeb",
  },
];

const CATEGORIES = ["All", "Frontend", "Backend", "Full Stack", "AI/ML", "Web", "Systems"];

function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full rounded-2xl glass border-border/8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-accent/20 shine-effect p-5"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="font-semibold text-foreground text-base">
              {project.name}
            </h3>
            {project.role && (
              <Badge variant="accent" size="sm" className="mt-1.5">
                {project.role}
              </Badge>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-2 flex-shrink-0">
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card/60 border border-border/10 text-foreground/60 hover:text-foreground hover:border-accent/30 hover:bg-accent/10 transition-all duration-300"
                aria-label={`View ${project.name} on GitHub`}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-accent/20 border border-accent/30 text-accent-light hover:bg-accent/30 transition-all duration-300"
                aria-label={`View ${project.name} live demo`}
              >
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Impact statement */}
        <p className="text-accent-light/90 font-medium mb-2 text-sm">
          {project.impact}
        </p>

        {/* Description */}
        <p className="text-muted leading-relaxed flex-grow text-sm line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="default" size="sm">
              {t}
            </Badge>
          ))}
        </div>

        {/* View details hint on hover */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs text-accent-light flex items-center gap-1">
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            View project details
          </span>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-accent to-accent-light transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(activeFilter));

  return (
    <SectionContainer
      id="projects"
      title="Featured Projects"
      subtitle="Building real-world applications that solve problems"
    >
      {/* Filter Chips */}
      <div className="mb-8 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <FilterChip
            key={cat}
            active={activeFilter === cat}
            onClick={() => setActiveFilter(cat)}
            size="md"
          >
            {cat}
          </FilterChip>
        ))}
      </div>

      {/* Uniform Grid Layout - All cards same size */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-muted">No projects found in this category.</p>
          <button
            onClick={() => setActiveFilter("All")}
            className="mt-4 text-accent-light hover:underline"
          >
            View all projects
          </button>
        </motion.div>
      )}

      {/* View more on GitHub */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-10 text-center"
      >
        <ButtonLink
          href="https://github.com/Nidhi0201"
          external
          variant="secondary"
          icon={
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          }
        >
          View More on GitHub
        </ButtonLink>
      </motion.div>
    </SectionContainer>
  );
}
