"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CommandItem = {
  id: string;
  label: string;
  description?: string;
  icon: React.ReactNode;
  action: () => void;
  keywords?: string[];
  category: "navigation" | "actions" | "external";
};

const EMAIL = "nprajapati4@horizon.csueastbay.edu";

export default function CommandPalette({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToSection = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        onClose();
      }
    },
    [onClose]
  );

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(EMAIL);
    onClose();
  }, [onClose]);

  const downloadResume = useCallback(() => {
    window.open("/resume.pdf", "_blank");
    onClose();
  }, [onClose]);

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-hero",
      label: "Go to Home",
      description: "Jump to the top of the page",
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      action: () => scrollToSection("hero"),
      keywords: ["home", "top", "start"],
      category: "navigation",
    },
    {
      id: "nav-about",
      label: "Go to About",
      description: "Learn more about me",
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      action: () => scrollToSection("about"),
      keywords: ["about", "bio", "introduction"],
      category: "navigation",
    },
    {
      id: "nav-projects",
      label: "Go to Projects",
      description: "View my portfolio projects",
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      action: () => scrollToSection("projects"),
      keywords: ["projects", "work", "portfolio"],
      category: "navigation",
    },
    {
      id: "nav-experience",
      label: "Go to Experience",
      description: "View my work experience",
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      action: () => scrollToSection("experience"),
      keywords: ["experience", "work", "jobs", "leadership"],
      category: "navigation",
    },
    {
      id: "nav-skills",
      label: "Go to Skills",
      description: "View my technical skills",
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      action: () => scrollToSection("skills"),
      keywords: ["skills", "technologies", "tech stack"],
      category: "navigation",
    },
    {
      id: "nav-contact",
      label: "Go to Contact",
      description: "Get in touch with me",
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      action: () => scrollToSection("contact"),
      keywords: ["contact", "email", "message", "connect"],
      category: "navigation",
    },
    // Actions
    {
      id: "action-copy-email",
      label: "Copy Email Address",
      description: EMAIL,
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
      ),
      action: copyEmail,
      keywords: ["copy", "email", "clipboard"],
      category: "actions",
    },
    {
      id: "action-resume",
      label: "Download Resume",
      description: "Open resume PDF",
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      action: downloadResume,
      keywords: ["resume", "cv", "download", "pdf"],
      category: "actions",
    },
    // External
    {
      id: "ext-github",
      label: "Open GitHub",
      description: "github.com/Nidhi0201",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
        </svg>
      ),
      action: () => {
        window.open("https://github.com/Nidhi0201", "_blank");
        onClose();
      },
      keywords: ["github", "code", "repository"],
      category: "external",
    },
    {
      id: "ext-linkedin",
      label: "Open LinkedIn",
      description: "linkedin.com/in/np124",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      action: () => {
        window.open("https://www.linkedin.com/in/np124/", "_blank");
        onClose();
      },
      keywords: ["linkedin", "connect", "professional"],
      category: "external",
    },
  ];

  // Filter commands based on search
  const filteredCommands = commands.filter((cmd) => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return (
      cmd.label.toLowerCase().includes(searchLower) ||
      cmd.description?.toLowerCase().includes(searchLower) ||
      cmd.keywords?.some((k) => k.toLowerCase().includes(searchLower))
    );
  });

  // Group by category
  const groupedCommands = {
    navigation: filteredCommands.filter((c) => c.category === "navigation"),
    actions: filteredCommands.filter((c) => c.category === "actions"),
    external: filteredCommands.filter((c) => c.category === "external"),
  };

  // Reset selection when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setSearch("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((i) => Math.min(i + 1, filteredCommands.length - 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((i) => Math.max(i - 1, 0));
          break;
        case "Enter":
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
          }
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  // Get flat index for an item
  const getFlatIndex = (category: keyof typeof groupedCommands, idx: number) => {
    let flatIdx = 0;
    for (const cat of ["navigation", "actions", "external"] as const) {
      if (cat === category) {
        return flatIdx + idx;
      }
      flatIdx += groupedCommands[cat].length;
    }
    return flatIdx;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-1/2 top-[15%] z-50 w-full max-w-lg -translate-x-1/2"
          >
            <div className="mx-4 overflow-hidden rounded-2xl glass-strong border border-border/10 shadow-2xl">
              {/* Search input */}
              <div className="flex items-center gap-3 border-b border-border/10 px-4 py-3">
                <svg
                  className="h-5 w-5 text-muted"
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
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
                />
                <kbd className="hidden sm:inline-flex items-center gap-1 rounded-md border border-border/20 bg-card/50 px-2 py-1 text-[10px] text-muted">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto py-2">
                {filteredCommands.length === 0 ? (
                  <div className="px-4 py-8 text-center text-sm text-muted">
                    No commands found for &ldquo;{search}&rdquo;
                  </div>
                ) : (
                  <>
                    {groupedCommands.navigation.length > 0 && (
                      <CommandGroup
                        title="Navigation"
                        commands={groupedCommands.navigation}
                        selectedIndex={selectedIndex}
                        getFlatIndex={(idx) => getFlatIndex("navigation", idx)}
                      />
                    )}
                    {groupedCommands.actions.length > 0 && (
                      <CommandGroup
                        title="Actions"
                        commands={groupedCommands.actions}
                        selectedIndex={selectedIndex}
                        getFlatIndex={(idx) => getFlatIndex("actions", idx)}
                      />
                    )}
                    {groupedCommands.external.length > 0 && (
                      <CommandGroup
                        title="External Links"
                        commands={groupedCommands.external}
                        selectedIndex={selectedIndex}
                        getFlatIndex={(idx) => getFlatIndex("external", idx)}
                      />
                    )}
                  </>
                )}
              </div>

              {/* Footer hint */}
              <div className="border-t border-border/10 px-4 py-2 flex items-center gap-4 text-[10px] text-muted">
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-border/20 bg-card/50 px-1">↑↓</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-border/20 bg-card/50 px-1">↵</kbd>
                  Select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-border/20 bg-card/50 px-1">esc</kbd>
                  Close
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function CommandGroup({
  title,
  commands,
  selectedIndex,
  getFlatIndex,
}: {
  title: string;
  commands: CommandItem[];
  selectedIndex: number;
  getFlatIndex: (idx: number) => number;
}) {
  return (
    <div className="px-2">
      <div className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
        {title}
      </div>
      {commands.map((cmd, idx) => {
        const flatIdx = getFlatIndex(idx);
        const isSelected = selectedIndex === flatIdx;

        return (
          <button
            key={cmd.id}
            onClick={cmd.action}
            className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
              isSelected
                ? "bg-accent/20 text-foreground"
                : "text-foreground/80 hover:bg-card/60"
            }`}
          >
            <span
              className={`flex-shrink-0 ${
                isSelected ? "text-accent-light" : "text-muted"
              }`}
            >
              {cmd.icon}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">{cmd.label}</div>
              {cmd.description && (
                <div className="text-xs text-muted truncate">{cmd.description}</div>
              )}
            </div>
            {isSelected && (
              <kbd className="flex-shrink-0 rounded border border-accent/30 bg-accent/10 px-1.5 py-0.5 text-[10px] text-accent-light">
                ↵
              </kbd>
            )}
          </button>
        );
      })}
    </div>
  );
}
