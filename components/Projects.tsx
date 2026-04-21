"use client";

import { motion } from "framer-motion";

type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  accent: string;
};

const projects: Project[] = [
  {
    name: "Ranked Albums",
    description:
      "A full-stack web app for ranking music albums. You can search for albums, drop them into drag-and-drop tier lists, and save your rankings. Deployed on Vercel.",
    tech: ["React", "TypeScript", "Next.js"],
    github: "https://github.com/BTouts/Ranked-Albums",
    live: "https://ranked-albums.vercel.app/",
    accent: "#61DAFB",
  },
  {
    name: "Internal QC Automation Tool",
    description:
      "A Python tool I built at Prometheus Group that the implementation team uses daily to validate configuration deployments and catch regressions before they hit production.",
    tech: ["Python", "PostgreSQL"],
    github: "#",
    accent: "#3776AB",
  },
  {
    name: "End-to-End Test Framework",
    description:
      "An automated test suite I wrote with Playwright and C# at Prometheus Group. It gives the team repeatable end-to-end coverage for configuration deployments and runs as part of every sprint.",
    tech: ["C#", "Playwright"],
    github: "#",
    accent: "#239120",
  },
  {
    name: "Warehouse Management Extensions",
    description:
      "Custom extensions and RESTful APIs for Manhattan Associates&apos; warehouse management platform. I built features to client spec, handled JSON data transformation, and traveled on-site for go-lives.",
    tech: ["RESTful APIs", "JSON", "Java"],
    github: "#",
    accent: "#ED8B00",
  },
  {
    name: "MOCI Satellite Flight Software",
    description:
      "Embedded flight software for the MOCI small satellite at UGA&apos;s Small Satellite Research Lab. I worked on a large team through the full software lifecycle, from design to hardware-in-the-loop testing.",
    tech: ["C/C++", "Embedded Systems"],
    github: "#",
    accent: "#00599C",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 sm:py-32"
      style={{ backgroundColor: "rgba(15,23,36,0.98)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: "var(--color-text)" }}
          >
            Featured Projects
          </h2>
          <div
            className="mt-2 h-px w-16"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
          <p
            className="mt-4 text-base max-w-xl"
            style={{ color: "var(--color-text-muted)" }}
          >
            Some of the things I&apos;ve built. Source is on GitHub where available.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" as const }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const cardStyle: React.CSSProperties = {
    backgroundColor: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "16px",
    backdropFilter: "blur(16px) saturate(180%)",
    WebkitBackdropFilter: "blur(16px) saturate(180%)",
  };

  return (
    <div
      className="group flex flex-col h-full p-6 transition-all duration-300"
      style={cardStyle}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.backgroundColor = "rgba(255,255,255,0.1)";
        el.style.borderColor = "rgba(255,255,255,0.18)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        Object.assign(el.style, cardStyle);
        el.style.transform = "none";
      }}
    >
      {/* Project name */}
      <h3
        className="text-lg font-bold mb-3 leading-tight"
        style={{ color: "var(--color-text)" }}
      >
        {project.name}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed flex-1 mb-5"
        style={{ color: "var(--color-text-muted)" }}
      >
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 font-medium"
            style={{
              color: "var(--color-accent-2)",
              border: "1px solid rgba(167,139,250,0.25)",
              backgroundColor: "rgba(167,139,250,0.08)",
              borderRadius: "8px",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 mt-auto">
        {project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 self-start"
            style={{ color: "var(--color-accent)" }}
          >
            <GitHubIcon />
            View Source
            <span className="text-xs opacity-70 transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 self-start"
            style={{ color: "var(--color-accent)" }}
          >
            View Live
            <span className="text-xs opacity-70 transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        )}
      </div>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
