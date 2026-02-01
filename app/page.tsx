"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import CommandPalette from "@/components/CommandPalette";
import BackToTop from "@/components/BackToTop";

export default function Page() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const openCommandPalette = useCallback(() => {
    setCommandPaletteOpen(true);
  }, []);

  const closeCommandPalette = useCallback(() => {
    setCommandPaletteOpen(false);
  }, []);

  return (
    <>
      <Navbar onOpenCommandPalette={openCommandPalette} />
      
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section id="hero" className="py-8 sm:py-12 lg:py-16">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="py-8 sm:py-10">
          <About />
        </section>

        {/* Education Section */}
        <section id="education" className="py-8 sm:py-10">
          <Education />
        </section>

        {/* Tech Stack Section */}
        <section id="techstack" className="py-8 sm:py-10">
          <TechStack />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-8 sm:py-10">
          <Projects />
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-8 sm:py-10">
          <Experience />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-8 sm:py-10">
          <Skills />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-8 sm:py-10">
          <Contact />
        </section>
      </main>

      {/* Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={closeCommandPalette}
      />

      {/* Back to Top Button */}
      <BackToTop />
    </>
  );
}
