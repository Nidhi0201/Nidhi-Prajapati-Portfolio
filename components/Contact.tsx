"use client";

import Reveal from "@/components/Reveal";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const year = new Date().getFullYear();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      // Debug: Log environment variables (values will be visible in browser console)
      console.log("EmailJS Config:", {
        serviceId: serviceId ? "✓ Set" : "✗ Missing",
        templateId: templateId ? "✓ Set" : "✗ Missing",
        publicKey: publicKey ? "✓ Set" : "✗ Missing",
      });

      if (!serviceId || !templateId || !publicKey) {
        const missing = [];
        if (!serviceId) missing.push("Service ID");
        if (!templateId) missing.push("Template ID");
        if (!publicKey) missing.push("Public Key");
        throw new Error(`Missing EmailJS credentials: ${missing.join(", ")}. Please check your .env.local file and restart the server.`);
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "nprajapati4@horizon.csueastbay.edu",
        },
        publicKey
      );

      console.log("EmailJS success:", result);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      let errorMsg = "Failed to send. Please try again.";
      
      if (error instanceof Error) {
        errorMsg = error.message;
        console.error("Error message:", error.message);
      } else if (typeof error === "object" && error !== null) {
        // EmailJS error format
        const emailjsError = error as { text?: string; status?: number };
        if (emailjsError.text) {
          errorMsg = emailjsError.text;
        } else if (emailjsError.status) {
          errorMsg = `Error ${emailjsError.status}: ${errorMsg}`;
        }
        console.error("Full error:", JSON.stringify(error, null, 2));
      }
      
      setErrorMessage(errorMsg);
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <div>
      <Reveal>
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Let’s Connect
          </h2>
          <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-accent/90 to-accent/30" />
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal delayMs={80}>
          <div className="rounded-2xl border border-border/15 bg-card p-6 shadow-sm transition hover:shadow-glow">
            <p className="text-sm leading-relaxed text-foreground/75">
              I’m currently looking for Software Engineering internship
              opportunities for <span className="font-semibold">Summer 2026</span>.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="mailto:nprajapati4@horizon.csueastbay.edu"
                className="inline-flex items-center gap-2 justify-center rounded-xl bg-gradient-to-br from-accent/90 to-accent/50 px-4 py-2 text-sm font-semibold text-foreground shadow-glow transition hover:scale-[1.02]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/np124/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 justify-center rounded-xl border border-border/15 bg-background/40 px-4 py-2 text-sm font-semibold text-foreground/85 transition hover:shadow-glow hover:border-[#0A66C2]/50"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/Nidhi0201"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 justify-center rounded-xl border border-border/15 bg-background/40 px-4 py-2 text-sm font-semibold text-foreground/85 transition hover:shadow-glow hover:border-white/30"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
                GitHub
              </a>
              <a
                href="https://www.instagram.com/nidhiii.prajapati/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 justify-center rounded-xl border border-border/15 bg-background/40 px-4 py-2 text-sm font-semibold text-foreground/85 transition hover:shadow-glow hover:border-[#E4405F]/50"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={140}>
          <div className="rounded-2xl border border-border/15 bg-card p-6 shadow-sm transition hover:shadow-glow">
            <p className="text-sm font-semibold text-foreground">
              Send a message
            </p>
            <form onSubmit={handleSubmit} className="mt-4 space-y-3" aria-label="Contact form">
              <label className="block">
                <span className="text-xs font-medium text-foreground/70">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="mt-1 w-full rounded-xl border border-border/15 bg-background/40 px-3 py-2 text-sm text-foreground outline-none ring-accent/40 placeholder:text-foreground/40 focus:ring-2"
                />
              </label>

              <label className="block">
                <span className="text-xs font-medium text-foreground/70">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  required
                  className="mt-1 w-full rounded-xl border border-border/15 bg-background/40 px-3 py-2 text-sm text-foreground outline-none ring-accent/40 placeholder:text-foreground/40 focus:ring-2"
                />
              </label>

              <label className="block">
                <span className="text-xs font-medium text-foreground/70">
                  Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me what you're working on..."
                  rows={4}
                  required
                  className="mt-1 w-full resize-none rounded-xl border border-border/15 bg-background/40 px-3 py-2 text-sm text-foreground outline-none ring-accent/40 placeholder:text-foreground/40 focus:ring-2"
                />
              </label>

              {status === "success" && (
                <div className="rounded-xl bg-green-500/20 border border-green-500/30 px-4 py-2 text-sm text-green-400">
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="rounded-xl bg-red-500/20 border border-red-500/30 px-4 py-2 text-sm text-red-400">
                  ❌ {errorMessage || "Failed to send. Please try again."}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-br from-accent/90 to-accent/50 px-4 py-2 text-sm font-semibold text-foreground shadow-glow transition hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </Reveal>
      </div>

      <footer className="mt-12 border-t border-border/15 py-6 text-sm text-foreground/60">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Nidhi Prajapati</p>
          <p className="text-foreground/50">
            Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

