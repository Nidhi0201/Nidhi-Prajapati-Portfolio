"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Rocket = {
  id: string;
  startX: number;
  startY: number;
  sizePx: number;
  durationMs: number;
  delayMs: number;
  driftPx: number;
  opacity: number;
};

export default function RocketRain() {
  const [rockets, setRockets] = useState<Rocket[]>([]);
  const boundsRef = useRef({ w: 1440, h: 900 });
  const reduceMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const updateBounds = () => {
      boundsRef.current = {
        w: window.innerWidth || 1440,
        h: window.innerHeight || 900,
      };
    };
    updateBounds();
    window.addEventListener("resize", updateBounds);

    const maxRockets = 56;
    const spawnEveryMs = 180;

    const spawn = () => {
      setRockets((prev) => {
        if (prev.length >= maxRockets) return prev;

        const { w, h } = boundsRef.current;
        const startX = Math.random() * (w + 200) - 100; // start anywhere across width with slight padding
        const startY = h + Math.random() * (0.3 * h); // below viewport
        const sizePx = 16 + Math.random() * 14;
        const durationMs = 3600 + Math.random() * 2400;
        const delayMs = Math.random() * 350;
        const driftPx = 220 + Math.random() * 220; // drift right/up
        const opacity = 0.22 + Math.random() * 0.28;

        const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
        return [
          ...prev,
          { id, startX, startY, sizePx, durationMs, delayMs, driftPx, opacity },
        ];
      });
    };

    const interval = window.setInterval(spawn, spawnEveryMs);
    return () => {
      window.removeEventListener("resize", updateBounds);
      window.clearInterval(interval);
    };
  }, [reduceMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden"
    >
      {rockets.map((r) => (
        <span
          key={r.id}
          className="rocket-fall"
          style={{
            left: 0,
            fontSize: `${r.sizePx}px`,
            animationDuration: `${r.durationMs}ms`,
            animationDelay: `${r.delayMs}ms`,
            opacity: r.opacity,
            ["--start-x" as never]: `${r.startX}px`,
            ["--start-y" as never]: `${r.startY}px`,
            ["--drift" as never]: `${r.driftPx}px`,
          }}
          onAnimationEnd={() => {
            setRockets((prev) => prev.filter((x) => x.id !== r.id));
          }}
        >
          🚀
        </span>
      ))}
    </div>
  );
}

