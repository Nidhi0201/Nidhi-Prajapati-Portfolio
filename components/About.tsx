import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <Reveal>
      <div className="rounded-2xl border border-border/15 bg-card p-6 shadow-sm transition hover:shadow-glow">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">About</h2>
        <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-accent/90 to-accent/30" />
        <p className="mt-4 text-sm leading-relaxed text-foreground/70">
          I&apos;m a Computer Science student specializing in AI/ML, LLMs, and scalable software development. I love turning ideas into real, functional systems—whether it&apos;s building intelligent models, designing clean backend architecture, or crafting smooth full-stack experiences.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-foreground/70">
          My work spans Python, Java, C++, React, FastAPI, SQL, and cloud technologies, and I enjoy exploring how modern AI tools and software frameworks can solve real problems. I thrive on learning, experimenting, and transforming complexity into solutions that feel simple, intuitive, and useful.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-foreground/70">
          I&apos;ve grown through leading and collaborating on technical initiatives where I support others, share ideas, and help bring projects to life. These experiences shaped how I build: with intention, curiosity, and a focus on impact.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-foreground/70">
          At my core, I&apos;m a problem solver who loves to build, constantly exploring new technologies and looking for opportunities to create meaningful, thoughtful software.
        </p>
      </div>
    </Reveal>
  );
}

