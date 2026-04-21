"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Python", color: "#3776AB" },
  { name: "Java", color: "#ED8B00" },
  { name: "React", color: "#61DAFB" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "C#", color: "#239120" },
  { name: "C/C++", color: "#00599C" },
  { name: "Django REST", color: "#092E20" },
  { name: "RESTful APIs", color: "#FF6B6B" },
];

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="about"
      className="py-24 sm:py-32"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        {/* Section label */}
        <div className="mb-10">
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: "var(--color-text)" }}
          >
            About Me
          </h2>
          <div
            className="mt-2 h-px w-16"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Bio */}
          <div>
            <p
              className="text-base sm:text-lg leading-relaxed mb-6"
              style={{ color: "var(--color-text-muted)" }}
            >
              I&apos;m a software developer focused on backend work, automation, and the systems that manage data behind the scenes. I&apos;m currently a Software Implementation Team Lead at Prometheus Group, where I write Python tooling, automated tests, and PostgreSQL dashboards.
            </p>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              Eagle Scout and UGA Computer Science grad, based in Raleigh, NC. I work best on small teams that care about shipping things that actually work, and I&apos;d rather take the extra hour to get a detail right than ship something I&apos;m not proud of.
            </p>

            {/* Stats row */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: "3+", label: "Yrs. Exp." },
                { value: "5", label: "Roles" },
                { value: "B.S.", label: "Comp. Sci." },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3"
                  style={{
                    borderRadius: "var(--radius-card, 8px)",
                    border: "1px solid var(--color-border)",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs mt-0.5 uppercase tracking-wide"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "var(--color-text-muted)" }}
            >
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <SkillBadge skill={skill} />
                </motion.div>
              ))}
            </div>

            {/* Additional tools */}
            <div className="mt-6">
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--color-text-muted)" }}
              >
                Also familiar with
              </h3>
              <div
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                TensorFlow · SQL · HTML/CSS · Playwright · Git · Jenkins · Postman · Jira
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SkillBadge({ skill }: { skill: { name: string; color: string } }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold"
      style={{
        color: "#F0F4FF",
        border: "1px solid rgba(255,255,255,0.12)",
        backgroundColor: "rgba(255,255,255,0.06)",
        borderRadius: "var(--radius-card, 16px)",
        backdropFilter: "blur(8px)",
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: skill.color }}
      />
      {skill.name}
    </span>
  );
}
