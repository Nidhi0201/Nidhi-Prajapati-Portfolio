"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionContainer } from "@/components/ui";
import Button from "@/components/ui/Button";

const EMAIL = "nprajapati4@horizon.csueastbay.edu";

const SOCIALS = [
  {
    name: "Email",
    href: `mailto:${EMAIL}`,
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "hover:border-accent/50 hover:text-accent-light",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/np124/",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: "hover:border-[#0A66C2]/50 hover:text-[#0A66C2]",
  },
  {
    name: "GitHub",
    href: "https://github.com/Nidhi0201",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
      </svg>
    ),
    color: "hover:border-white/30 hover:text-white",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nidhiii.prajapati/",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    color: "hover:border-[#E4405F]/50 hover:text-[#E4405F]",
  },
];

// Toast component (inline for simplicity)
function Toast({
  message,
  type,
  onClose,
}: {
  message: string;
  type: "success" | "error" | "info";
  onClose: () => void;
}) {
  const typeStyles = {
    success: "border-green-500/30 bg-green-500/10 text-green-400",
    error: "border-red-500/30 bg-red-500/10 text-red-400",
    info: "border-accent/30 bg-accent/10 text-accent-light",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      className={`fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-xl border px-4 py-3 backdrop-blur-lg shadow-lg ${typeStyles[type]}`}
    >
      <span className="text-sm font-medium">{message}</span>
      <button onClick={onClose} className="text-current/50 hover:text-current transition-colors">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
}

export default function Contact() {
  const year = new Date().getFullYear();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

  const showToast = useCallback((message: string, type: "success" | "error" | "info" = "info") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      showToast("Email copied to clipboard!", "success");
    } catch {
      showToast("Failed to copy email", "error");
    }
  }, [showToast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS not configured. Please check environment variables.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: EMAIL,
        },
        publicKey
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      showToast("Message sent successfully!", "success");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      let errorMsg = "Failed to send. Please try again.";

      if (error instanceof Error) {
        errorMsg = error.message;
      }

      setErrorMessage(errorMsg);
      setStatus("error");
      showToast(errorMsg, "error");
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <SectionContainer
      id="contact"
      title="Let's Connect"
      subtitle="Have a project in mind or just want to chat?"
      showDivider={false}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left: Info + Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl glass border-border/8 p-6"
        >
          <p className="text-base leading-relaxed text-foreground/80">
            I&apos;m currently looking for{" "}
            <span className="font-semibold text-accent-light">
              Software Engineering internship opportunities for Summer 2026
            </span>
            . Feel free to reach out!
          </p>

          {/* Copy email button */}
          <div className="mt-6">
            <button
              onClick={copyEmail}
              className="group flex items-center gap-3 rounded-xl bg-card/60 border border-border/10 px-4 py-3 text-sm text-foreground/80 hover:border-accent/30 hover:bg-card/80 transition-all duration-300 w-full"
            >
              <svg className="h-5 w-5 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="flex-1 text-left font-mono text-xs sm:text-sm truncate">{EMAIL}</span>
              <span className="text-xs text-muted group-hover:text-accent-light transition-colors">
                Click to copy
              </span>
            </button>
          </div>

          {/* Social links */}
          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
              Connect with me
            </h4>
            <div className="flex flex-wrap gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 rounded-xl border border-border/10 bg-card/40 px-4 py-2.5 text-sm font-medium text-foreground/70 backdrop-blur-sm transition-all duration-300 hover:shadow-glow-sm ${social.color}`}
                  aria-label={`Connect on ${social.name}`}
                >
                  {social.icon}
                  <span className="hidden sm:inline">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl glass border-border/8 p-6"
        >
          <h3 className="text-sm font-semibold text-foreground mb-4">Send a message</h3>

          <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
            <label className="block">
              <span className="text-xs font-medium text-muted">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                required
                className="mt-1.5 w-full rounded-xl border border-border/10 bg-background/40 px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted/60 focus:border-accent/30 focus:ring-2 focus:ring-accent/20 transition-all duration-200"
              />
            </label>

            <label className="block">
              <span className="text-xs font-medium text-muted">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@example.com"
                required
                className="mt-1.5 w-full rounded-xl border border-border/10 bg-background/40 px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted/60 focus:border-accent/30 focus:ring-2 focus:ring-accent/20 transition-all duration-200"
              />
            </label>

            <label className="block">
              <span className="text-xs font-medium text-muted">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me what you're working on..."
                rows={4}
                required
                className="mt-1.5 w-full resize-none rounded-xl border border-border/10 bg-background/40 px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted/60 focus:border-accent/30 focus:ring-2 focus:ring-accent/20 transition-all duration-200"
              />
            </label>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={status === "sending"}
              className="w-full"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-border/10 pt-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            &copy; {year} Nidhi Prajapati. All rights reserved.
          </p>
          <p className="text-xs text-muted/70">
            Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </footer>

      {/* Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </SectionContainer>
  );
}
