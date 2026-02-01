import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        "background-elevated": "rgb(var(--background-elevated) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-light": "rgb(var(--accent-light) / <alpha-value>)",
      },
      boxShadow: {
        glow: "0 0 20px rgb(var(--accent) / 0.35), 0 0 40px rgb(var(--accent) / 0.2)",
        "glow-sm": "0 0 10px rgb(var(--accent) / 0.25), 0 0 20px rgb(var(--accent) / 0.15)",
        "glow-lg": "0 0 30px rgb(var(--accent) / 0.4), 0 0 60px rgb(var(--accent) / 0.25)",
        card: "0 4px 24px rgb(0 0 0 / 0.3), 0 1px 2px rgb(0 0 0 / 0.2)",
        "card-hover": "0 8px 32px rgb(0 0 0 / 0.4), 0 2px 4px rgb(0 0 0 / 0.2), 0 0 20px rgb(var(--accent) / 0.15)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgb(var(--accent) / 0.4)" },
          "50%": { boxShadow: "0 0 20px 4px rgb(var(--accent) / 0.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-down": {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-down": "slide-down 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        shimmer: "shimmer 2s linear infinite",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
