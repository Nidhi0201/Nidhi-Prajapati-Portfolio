import Reveal from "@/components/Reveal";

type SkillSection = {
  title: string;
  items: string[];
};

const SECTIONS: SkillSection[] = [
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "C++", "C", "SQL"],
  },
  {
    title: "Web & Frameworks",
    items: ["React", "Next.js", "Node.js", "FastAPI", "Flask", "Angular", "Redux", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  },
  {
    title: "AI/ML & Data Science",
    items: ["scikit-learn", "Machine Learning", "LLMs", "Data Analytics"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Docker", "AWS", "Azure", "Firebase", "Render Cloud", "VS Code", "Figma"],
  },
  {
    title: "Core CS & Concepts",
    items: ["Data Structures & Algorithms", "Operating Systems", "Multithreading", "Concurrency", "TCP/IP", "Socket Programming"],
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/15 bg-background/40 px-3 py-1 text-xs font-medium text-foreground/80 transition hover:shadow-glow">
      {children}
    </span>
  );
}

export default function Skills() {
  return (
    <div>
      <Reveal>
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Skills
          </h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-accent/90 to-accent/30" />
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {SECTIONS.map((section, idx) => (
          <Reveal key={section.title} delayMs={idx * 60}>
            <div className="rounded-2xl border border-border/15 bg-card p-5 shadow-sm transition hover:shadow-glow">
              <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

