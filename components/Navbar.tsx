"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = { label: string; id: string };

export default function Navbar({
  onOpenCommandPalette,
}: {
  onOpenCommandPalette?: () => void;
}) {
  const items = useMemo<NavItem[]>(
    () => [
      { label: "About", id: "about" },
      { label: "Projects", id: "projects" },
      { label: "Experience", id: "experience" },
      { label: "Skills", id: "skills" },
      { label: "Contact", id: "contact" },
    ],
    []
  );

  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Track scroll position for background change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    });

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  }, []);

  // Keyboard shortcut for command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenCommandPalette?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onOpenCommandPalette]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong border-b border-border/10 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
      aria-label="Site header"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Left: Brand */}
        <button
          type="button"
          onClick={() => scrollToId("hero")}
          className="group inline-flex items-center gap-2.5 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-light shadow-glow-sm group-hover:shadow-glow transition-shadow duration-300">
            <span className="text-sm font-bold text-white">NP</span>
          </span>
          <span className="text-sm font-semibold tracking-tight text-foreground/90 group-hover:text-foreground transition-colors duration-300">
            Nidhi Prajapati
          </span>
        </button>

        {/* Right: Desktop links / Mobile menu */}
        <div className="flex items-center gap-3">
          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-1 rounded-full bg-card/40 backdrop-blur-sm border border-border/10 px-1.5 py-1.5 md:flex"
            aria-label="Primary"
          >
            {items.map((it) => (
              <button
                key={it.id}
                type="button"
                onClick={() => scrollToId(it.id)}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === it.id
                    ? "text-foreground"
                    : "text-foreground/60 hover:text-foreground/90"
                }`}
              >
                {/* Active indicator pill */}
                {activeSection === it.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-full bg-accent/20 border border-accent/30"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{it.label}</span>
              </button>
            ))}
          </nav>

          {/* Command Palette Trigger */}
          {onOpenCommandPalette && (
            <button
              type="button"
              onClick={onOpenCommandPalette}
              className="hidden md:flex items-center gap-2 rounded-full bg-card/40 backdrop-blur-sm border border-border/10 px-3 py-1.5 text-xs text-foreground/50 hover:text-foreground/70 hover:border-accent/20 transition-all duration-300"
              aria-label="Open command palette"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <kbd className="font-mono text-[10px] bg-background/50 px-1.5 py-0.5 rounded">
                ⌘K
              </kbd>
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-border/10 bg-card/60 backdrop-blur-sm px-4 py-2 text-sm font-medium text-foreground/90 transition-all duration-300 hover:bg-card/80 hover:border-accent/20 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <motion.div
              animate={open ? "open" : "closed"}
              className="relative h-4 w-4"
            >
              <motion.span
                variants={{
                  open: { rotate: 45, y: 6 },
                  closed: { rotate: 0, y: 0 },
                }}
                className="absolute top-0 left-0 h-0.5 w-4 bg-current rounded-full"
              />
              <motion.span
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 },
                }}
                className="absolute top-1.5 left-0 h-0.5 w-4 bg-current rounded-full"
              />
              <motion.span
                variants={{
                  open: { rotate: -45, y: -6 },
                  closed: { rotate: 0, y: 0 },
                }}
                className="absolute top-3 left-0 h-0.5 w-4 bg-current rounded-full"
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-border/10 glass-strong md:hidden overflow-hidden"
          >
            <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 sm:px-6 lg:px-8 py-4">
              {items.map((it, idx) => (
                <motion.button
                  key={it.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  type="button"
                  onClick={() => scrollToId(it.id)}
                  className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                    activeSection === it.id
                      ? "bg-accent/20 text-foreground border border-accent/30"
                      : "text-foreground/70 hover:bg-card/60 hover:text-foreground"
                  }`}
                >
                  {it.label}
                </motion.button>
              ))}

              {/* Command Palette in Mobile */}
              {onOpenCommandPalette && (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: items.length * 0.05 }}
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="mt-2 w-full rounded-xl border border-border/10 bg-card/40 px-4 py-3 text-left text-sm text-foreground/60 transition-all duration-300 hover:border-accent/20 hover:text-foreground/80 flex items-center gap-2"
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Quick Search
                  <kbd className="ml-auto font-mono text-[10px] bg-background/50 px-1.5 py-0.5 rounded">
                    ⌘K
                  </kbd>
                </motion.button>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
