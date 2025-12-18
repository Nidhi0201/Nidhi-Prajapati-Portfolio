import Reveal from "@/components/Reveal";

const COURSEWORK = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Systems",
  "Web Development",
  "Software Engineering",
  "Operating Systems",
];

const ACHIEVEMENTS: string[] = [
  // Add your academic achievements here, for example:
  // "Outstanding Academic Performance",
  // "Hackathon Winner - [Event Name]",
  // "Research Project - [Topic]",
  // "Scholarship Recipient",
  // "Honor Society Member",
];

export default function Education() {
  return (
    <div>
      <Reveal>
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Education
          </h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-accent/90 to-accent/30" />
        </div>
      </Reveal>

      <Reveal delayMs={80}>
        <div className="rounded-2xl border border-border/15 bg-card p-6 shadow-sm transition hover:shadow-glow">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground">
                Bachelor of Science in Computer Science
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                California State University, East Bay
              </p>
              <p className="mt-1 text-sm text-foreground/70">
                Expected Graduation: 2026
              </p>
            </div>
            <div className="text-sm font-medium text-foreground/60">
              2022 - 2026
            </div>
          </div>

          <div className="mt-6 border-t border-border/15 pt-6">
            <h4 className="text-sm font-semibold text-foreground">
              Relevant Coursework
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {COURSEWORK.map((course) => (
                <span
                  key={course}
                  className="inline-flex items-center rounded-full border border-border/15 bg-background/40 px-3 py-1 text-xs font-medium text-foreground/80"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {ACHIEVEMENTS.length > 0 && (
            <div className="mt-6 border-t border-border/15 pt-6">
              <h4 className="text-sm font-semibold text-foreground">
                Academic Achievements
              </h4>
              <ul className="mt-3 space-y-2">
                {ACHIEVEMENTS.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-foreground/70"
                  >
                    <span className="text-accent">✨</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Reveal>
    </div>
  );
}

