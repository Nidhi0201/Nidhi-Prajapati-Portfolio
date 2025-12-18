import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section id="hero" className="pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20">
          <Hero />
        </section>
        <section id="about" className="py-20 sm:py-28 lg:py-32">
          <About />
        </section>
        <section id="education" className="py-20 sm:py-28 lg:py-32">
          <Education />
        </section>
        <section id="techstack" className="py-20 sm:py-28 lg:py-32">
          <TechStack />
        </section>
        <section id="experience" className="py-20 sm:py-28 lg:py-32">
          <Experience />
        </section>
        <section id="projects" className="py-20 sm:py-28 lg:py-32">
          <Projects />
        </section>
        <section id="skills" className="py-20 sm:py-28 lg:py-32">
          <Skills />
        </section>
        <section id="contact" className="py-20 sm:py-28 lg:py-32">
          <Contact />
        </section>
      </main>
    </>
  );
}

