"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navBg = scrolled
    ? "backdrop-blur-xl border-b"
    : "border-b border-transparent";

  return (
    <nav
      style={{
        backgroundColor: scrolled
          ? "rgba(15, 23, 36, 0.88)"
          : "transparent",
        borderColor: "var(--color-border)",
        fontFamily: "var(--font-sans)",
        transition: "all 0.3s ease",
      }}
      className={`fixed top-0 left-0 right-0 z-50 ${navBg}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            style={{ color: "var(--color-accent)" }}
            className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            Brett T.
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ color: "var(--color-text-muted)" }}
                className="text-sm font-medium hover:opacity-100 transition-all duration-200 relative group"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-text-muted)")
                }
              >
                {link.label}
                <span
                  style={{ backgroundColor: "var(--color-accent)" }}
                  className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            style={{ color: "var(--color-text)" }}
            aria-label="Toggle menu"
          >
            <span
              style={{ backgroundColor: "var(--color-text)" }}
              className={`block h-0.5 w-5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              style={{ backgroundColor: "var(--color-text)" }}
              className={`block h-0.5 w-5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              style={{ backgroundColor: "var(--color-text)" }}
              className={`block h-0.5 w-5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden pb-4 pt-2 border-t"
            style={{ borderColor: "var(--color-border)" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-sm font-medium transition-colors"
                style={{ color: "var(--color-text-muted)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
