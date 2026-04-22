import type { Metadata } from "next";
import {
  Inter,
  Space_Grotesk,
  JetBrains_Mono,
  Syne,
  DM_Sans,
  Outfit,
  Share_Tech_Mono,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-share-tech-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brett Toutkoushian — Software Engineer",
  description:
    "Backend-focused software engineer with 3+ years building automation tooling, CI pipelines, and data systems in production. Based in Raleigh, NC.",
  keywords: ["software engineer", "backend engineer", "Python", "PostgreSQL", "automation", "Raleigh NC"],
  authors: [{ name: "Brett Toutkoushian" }],
  openGraph: {
    title: "Brett Toutkoushian — Software Engineer",
    description:
      "Backend-focused software engineer with 3+ years building automation tooling, CI pipelines, and data systems in production.",
    type: "website",
    siteName: "Brett Toutkoushian",
  },
  twitter: {
    card: "summary",
    title: "Brett Toutkoushian — Software Engineer",
    description:
      "Backend-focused software engineer with 3+ years building automation tooling, CI pipelines, and data systems in production.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="frost"
      className={[
        inter.variable,
        spaceGrotesk.variable,
        jetbrainsMono.variable,
        syne.variable,
        dmSans.variable,
        outfit.variable,
        shareTechMono.variable,
        "antialiased",
      ].join(" ")}
    >
      <body>{children}</body>
    </html>
  );
}
