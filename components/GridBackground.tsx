"use client";

import { useEffect, useState, useCallback } from "react";

export default function GridBackground() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    // Initialize to center of screen
    if (typeof window !== "undefined") {
      setMousePos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      setSmoothPos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    }
  }, []);

  // Track mouse position
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  // Smooth animation for glow following cursor
  useEffect(() => {
    if (!mounted) return;

    window.addEventListener("mousemove", handleMouseMove);

    let animationId: number;
    const animate = () => {
      setSmoothPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.05,
        y: prev.y + (mousePos.y - prev.y) * 0.05,
      }));
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [mounted, mousePos, handleMouseMove]);

  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-background" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgb(var(--accent) / 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgb(var(--accent) / 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main cursor-following glow - Gemini style */}
      {!prefersReducedMotion && (
        <div
          className="absolute rounded-full"
          style={{
            width: "800px",
            height: "800px",
            left: smoothPos.x - 400,
            top: smoothPos.y - 400,
            background: `radial-gradient(circle, rgb(var(--accent) / 0.15) 0%, rgb(var(--accent) / 0.08) 25%, rgb(var(--accent) / 0.02) 50%, transparent 70%)`,
            filter: "blur(60px)",
            transition: "opacity 0.3s ease",
          }}
        />
      )}

      {/* Secondary smaller glow - follows faster */}
      {!prefersReducedMotion && (
        <div
          className="absolute rounded-full"
          style={{
            width: "400px",
            height: "400px",
            left: smoothPos.x - 200 + (mousePos.x - smoothPos.x) * 0.5,
            top: smoothPos.y - 200 + (mousePos.y - smoothPos.y) * 0.5,
            background: `radial-gradient(circle, rgb(var(--accent) / 0.2) 0%, rgb(var(--accent) / 0.05) 40%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />
      )}

      {/* Static ambient glow - top left */}
      <div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          left: "-15%",
          top: "-10%",
          background: `radial-gradient(circle, rgb(var(--accent) / 0.08) 0%, transparent 60%)`,
          filter: "blur(80px)",
        }}
      />

      {/* Static ambient glow - bottom right */}
      <div
        className="absolute rounded-full"
        style={{
          width: "700px",
          height: "700px",
          right: "-20%",
          bottom: "-15%",
          background: `radial-gradient(circle, rgb(var(--accent) / 0.06) 0%, transparent 60%)`,
          filter: "blur(100px)",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
