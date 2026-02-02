import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const GridBackground = dynamic(() => import("@/components/GridBackground"), {
  ssr: false,
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  title: "Nidhi Prajapati | Portfolio",
  description:
    "Personal portfolio of Nidhi Prajapati - Computer Science student, aspiring SWE, and community leader.",
  keywords: [
    "Nidhi Prajapati",
    "Software Engineer",
    "Portfolio",
    "Web Developer",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Nidhi Prajapati" }],
  openGraph: {
    title: "Nidhi Prajapati | Portfolio",
    description:
      "Personal portfolio of Nidhi Prajapati - Computer Science student and aspiring SWE.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}
      >
        <GridBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
