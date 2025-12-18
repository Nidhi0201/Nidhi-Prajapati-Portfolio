"use client";

import { useEffect, useMemo, useState } from "react";

type NavItem = { label: string; id: string };

export default function Navbar() {
  const items = useMemo<NavItem[]>(
    () => [
      { label: "About", id: "about" },
      { label: "Education", id: "education" },
      { label: "Tech", id: "techstack" },
      { label: "Experience", id: "experience" },
      { label: "Projects", id: "projects" },
      { label: "Contact", id: "contact" },
    ],
    [],
  );

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b",
        scrolled
          ? "border-border/15 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50"
          : "border-transparent bg-transparent",
      ].join(" ")}
      aria-label="Site header"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Left: Brand */}
        <button
          type="button"
          onClick={() => scrollToId("hero")}
          className="group inline-flex items-center gap-2 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] hover:drop-shadow-[0_0_16px_rgba(168,85,247,0.4)]"
          aria-label="Scroll to top"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent/70 to-accent/30 shadow-glow group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]">
            <span className="text-sm font-semibold text-foreground">NP</span>
          </span>
          <span className="text-sm font-semibold tracking-tight group-hover:text-accent transition-colors duration-300">
            Nidhi Prajapati
          </span>
        </button>

        {/* Right: Desktop links / Mobile menu */}
        <div className="flex items-center">
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {items.map((it) => (
              <button
                key={it.id}
                type="button"
                onClick={() => scrollToId(it.id)}
                className="text-sm text-foreground/80 transition-all duration-300 hover:text-accent hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] hover:drop-shadow-[0_0_16px_rgba(168,85,247,0.4)]"
              >
                {it.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-border/15 bg-card px-3 py-2 text-sm text-foreground/90 shadow-sm transition hover:shadow-glow md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/15 bg-background/80 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 sm:px-6 lg:px-8 py-3">
            {items.map((it) => (
              <button
                key={it.id}
                type="button"
                onClick={() => scrollToId(it.id)}
                className="w-full rounded-xl px-3 py-2 text-left text-sm text-foreground/85 transition-all duration-300 hover:bg-card hover:text-accent hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] hover:drop-shadow-[0_0_16px_rgba(168,85,247,0.4)]"
              >
                {it.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

