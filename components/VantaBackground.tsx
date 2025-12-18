"use client";

import { useEffect, useRef } from "react";

type VantaEffect = {
  destroy: () => void;
  setOptions?: (opts: Record<string, unknown>) => void;
};

function cssRgbToHexNumber(input: string): number | null {
  const cleaned = input.trim().replace(/^rgb\(/i, "").replace(/\)$/i, "").replaceAll(",", " ");
  const parts = cleaned.split(/\s+/).filter(Boolean).slice(0, 3);
  if (parts.length !== 3) return null;
  const nums = parts.map((p) => Number(p));
  if (nums.some((n) => Number.isNaN(n))) return null;
  const [r, g, b] = nums.map((n) => Math.max(0, Math.min(255, Math.round(n))));
  return (r << 16) + (g << 8) + b;
}

export default function VantaBackground() {
  const elRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<VantaEffect | null>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let mounted = true;

    const init = async () => {
      const [{ default: TOPOLOGY }, THREE] = await Promise.all([
        import("vanta/dist/vanta.topology.min"),
        import("three"),
      ]);

      if (!mounted || !elRef.current) return;

      const style = getComputedStyle(document.documentElement);
      const accentRaw = style.getPropertyValue("--accent").trim();
      const backgroundRaw = style.getPropertyValue("--background").trim();

      const color = cssRgbToHexNumber(accentRaw) ?? 0xc084fc;
      const backgroundColor = cssRgbToHexNumber(backgroundRaw) ?? 0x000000;

      effectRef.current = TOPOLOGY({
        el: elRef.current,
        THREE: (THREE as unknown as { default?: unknown }).default ?? (THREE as unknown),
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color,
        backgroundColor,
      }) as VantaEffect;
    };

    void init();

    return () => {
      mounted = false;
      effectRef.current?.destroy?.();
      effectRef.current = null;
    };
  }, []);

  return (
    <div
      ref={elRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}

