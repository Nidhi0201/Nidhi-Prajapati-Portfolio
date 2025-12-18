import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        card: "rgb(var(--card))",
        border: "rgb(var(--border))",
        accent: "rgb(var(--accent))",
      },
      boxShadow: {
        glow: "0 0 25px rgba(168,85,247,0.35), 0 0 60px rgba(168,85,247,0.25)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(168,85,247,0.35)" },
          "50%": { boxShadow: "0 0 0 12px rgba(168,85,247,0)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;

