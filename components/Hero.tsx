"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
    }),
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 frost-mesh" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32 text-center">
        {/* Main heading */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-4 leading-none"
            style={{ color: "var(--color-text)" }}
          >
            Brett Toutkoushian
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <p
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6"
            style={{
              color: "var(--color-text)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Software Engineer
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Three years building backend systems and automation tooling in production. Open to backend engineering roles.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <HeroPrimaryButton href="#projects">
            View Projects
          </HeroPrimaryButton>
          <HeroSecondaryButton href="/resume.pdf" target="_blank">
            View Resume
          </HeroSecondaryButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-20 flex justify-center"
        >
          <div
            className="flex flex-col items-center gap-2 opacity-50 hover:opacity-80 transition-opacity cursor-pointer"
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-xs tracking-widest uppercase" style={{ color: "var(--color-text-muted)" }}>
              Scroll
            </span>
            <div
              className="w-5 h-8 border rounded-full flex items-start justify-center pt-1.5"
              style={{ borderColor: "var(--color-border)" }}
            >
              <motion.div
                className="w-1 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--color-accent)" }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroPrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="px-8 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-105"
      style={{
        color: "#F0F4FF",
        background: "linear-gradient(135deg, #60A5FA, #A78BFA)",
        borderRadius: "10px",
        boxShadow: "0 4px 20px rgba(96,165,250,0.3)",
      }}
    >
      {children}
    </a>
  );
}

function HeroSecondaryButton({
  href,
  target,
  children,
}: {
  href: string;
  target?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="px-8 py-3.5 text-sm font-semibold border transition-all duration-300 hover:scale-105"
      style={{
        color: "var(--color-text)",
        borderColor: "var(--color-border)",
        borderRadius: "var(--radius-btn, 6px)",
        backgroundColor: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(8px)",
      }}
    >
      {children}
    </a>
  );
}
