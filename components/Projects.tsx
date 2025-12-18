import Reveal from "@/components/Reveal";

type Project = {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Personal Portfolio Website",
    description:
      "A dynamic, interactive single-page portfolio featuring an animated 3D topology background, typewriter effects, scroll-triggered animations, and an interactive experience timeline. Built with modern web technologies including smooth scrolling navigation, responsive design, EmailJS contact form integration, and a custom rocket rain animation effect for an engaging user experience.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Vanta.js", "EmailJS"],
    github: "#",
    live: "#",
  },
  {
    name: "Multi-Client Banking System",
    description:
      "Architected a client-server banking application with TCP/IP socket communication supporting ATM and Teller clients with concurrent user access. Implemented multi-threaded server using Executor Service thread pool with synchronized file operations for thread-safe data persistence.",
    tech: ["Java", "Java Swing", "TCP/IP", "Socket Programming", "Multithreading", "Concurrency"],
    github: "#",
    live: "#",
  },
  {
    name: "AI CRM Insight Dashboard",
    description:
      "A full-stack AI-powered CRM dashboard that leverages machine learning to provide intelligent insights and analytics. Features real-time data visualization, customer relationship management, and predictive analytics to help businesses make data-driven decisions.",
    tech: ["FastAPI", "React", "scikit-learn", "Render Cloud", "Python", "JavaScript"],
    github: "https://github.com/Nidhi0201/ai-crm-insight-dashboard",
    live: "#",
  },
  {
    name: "Ethical Dilemma Simulator",
    description:
      "An interactive web app presenting 10 real-life moral scenarios that calculates user honesty and empathy scores. Built with ASP.NET Core Razor Pages, integrated Google Charts API for data visualization, and architected with OOP design using encapsulated Player, Choice, and Scenario classes for extensibility.",
    tech: ["C#", "ASP.NET Core", "Razor Pages", "Google Charts API", "OOP"],
    github: "#",
    live: "#",
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/15 bg-background/40 px-3 py-1 text-xs font-medium text-foreground/80 transition hover:shadow-glow">
      {children}
    </span>
  );
}

function LinkButton({
  href,
  children,
  variant = "secondary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-br from-accent/90 to-accent/50 text-foreground shadow-glow hover:scale-[1.02]"
      : "border border-border/15 bg-card text-foreground/85 hover:shadow-glow";
  return (
    <a href={href} className={`${base} ${styles}`} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function Projects() {
  return (
    <div>
      <Reveal>
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Projects
          </h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-accent/90 to-accent/30" />
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, idx) => (
          <Reveal key={p.name} delayMs={idx * 80}>
            <article className="group h-full rounded-2xl border border-border/15 bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow">
              <h3 className="text-base font-semibold text-foreground">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <LinkButton href={p.github ?? "#"}>View on GitHub</LinkButton>
                <LinkButton href={p.live ?? "#"} variant="primary">
                  Live Demo
                </LinkButton>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

