"use client";

export default function Footer() {
  return (
    <footer
      className="py-8 border-t"
      style={{
        backgroundColor: "#0C1420",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span
          className="text-sm"
          style={{ color: "var(--color-text-muted)" }}
        >
          {`© ${new Date().getFullYear()} Brett T. All rights reserved.`}
        </span>

        <span
          className="text-sm"
          style={{ color: "var(--color-text-muted)" }}
        >
          Built with Next.js &amp; TypeScript
        </span>
      </div>
    </footer>
  );
}
