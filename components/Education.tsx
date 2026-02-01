"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui";
import Badge from "@/components/ui/Badge";

const COURSEWORK = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Systems",
  "Web Development",
  "Software Engineering",
  "Operating Systems",
];

export default function Education() {
  return (
    <SectionContainer
      id="education"
      title="Education"
      subtitle="My academic background"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl glass border-border/8 p-6 sm:p-8"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <svg
                  className="h-5 w-5 text-accent-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-sm font-medium text-accent-light">
                  California State University, East Bay
                </p>
              </div>
            </div>
            <p className="mt-2 text-sm text-muted">
              Expected Graduation: Spring 2026
            </p>
          </div>
          <Badge variant="outline" size="md">
            2022 - 2026
          </Badge>
        </div>

        <div className="mt-6 pt-6 border-t border-border/10">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
            Relevant Coursework
          </h4>
          <div className="flex flex-wrap gap-2">
            {COURSEWORK.map((course) => (
              <Badge
                key={course}
                variant="default"
                size="sm"
                className="hover:border-accent/30 hover:shadow-glow-sm transition-all duration-200"
              >
                {course}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
