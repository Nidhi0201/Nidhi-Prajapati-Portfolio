"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  delayMs?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
  className?: string;
}

export default function Reveal({
  children,
  delayMs = 0,
  direction = "up",
  once = true,
  className = "",
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Direction-based initial position
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 24, x: 0 };
      case "down":
        return { y: -24, x: 0 };
      case "left":
        return { y: 0, x: 24 };
      case "right":
        return { y: 0, x: -24 };
      default:
        return { y: 24, x: 0 };
    }
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If user prefers reduced motion, show immediately
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (once) {
              observer.disconnect();
            }
          } else if (!once) {
            setIsInView(false);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, prefersReducedMotion]);

  // If reduced motion preferred, render without animation wrapper
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const { x, y } = getInitialPosition();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        duration: 0.6,
        delay: delayMs / 1000,
        ease: [0.22, 1, 0.36, 1], // Custom smooth easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for animating children in sequence
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger item to be used inside StaggerContainer
export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
