import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const VantaBackground = dynamic(() => import("@/components/VantaBackground"), { ssr: false });
const RocketRain = dynamic(() => import("@/components/RocketRain"), { ssr: false });

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nidhi Prajapati | Portfolio",
  description: "Personal portfolio of Nidhi Prajapati.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}
      >
        <VantaBackground />
        <RocketRain />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

