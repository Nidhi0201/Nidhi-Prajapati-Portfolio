"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionContainerProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  showDivider?: boolean;
  centered?: boolean;
}

export default function SectionContainer({
  id,
  title,
  subtitle,
  children,
  className = "",
  showDivider = true,
  centered = false,
}: SectionContainerProps) {
  return (
    <section id={id} className={`relative ${className}`}>
      {/* Section header */}
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`mb-10 ${centered ? "text-center" : ""}`}
        >
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm text-muted sm:text-base">{subtitle}</p>
          )}
          <div
            className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent/30 ${
              centered ? "mx-auto" : ""
            }`}
          />
        </motion.div>
      )}

      {/* Section content */}
      <div>{children}</div>

      {/* Section divider */}
      {showDivider && (
        <div className="mt-20 flex items-center justify-center">
          <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-border/20 to-transparent" />
        </div>
      )}
    </section>
  );
}

// Gradient Separator - decorative divider between sections
export function GradientSeparator({ className = "" }: { className?: string }) {
  return (
    <div className={`relative py-8 ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-px w-32 bg-gradient-to-r from-accent/40 via-accent to-accent/40 blur-sm" />
      </div>
    </div>
  );
}

// Glow Orb - decorative floating orb
export function GlowOrb({
  size = "md",
  position = "center",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  position?: "left" | "center" | "right";
  className?: string;
}) {
  const sizes = {
    sm: "h-32 w-32",
    md: "h-48 w-48",
    lg: "h-64 w-64",
  };

  const positions = {
    left: "left-0",
    center: "left-1/2 -translate-x-1/2",
    right: "right-0",
  };

  return (
    <div
      className={`absolute ${sizes[size]} ${positions[position]} rounded-full bg-accent/10 blur-3xl pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
