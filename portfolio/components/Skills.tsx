"use client";

import { motion } from "framer-motion";

const groups = [
  {
    label: "Backend",
    color: "indigo",
    items: ["Java", "Spring Boot", "JPA / Hibernate", "REST APIs", "SQL", "Maven"],
  },
  {
    label: "Frontend",
    color: "fuchsia",
    items: ["Angular", "TypeScript", "JavaScript", "PrimeNG", "HTML / CSS"],
  },
  {
    label: "Cloud & Tooling",
    color: "cyan",
    items: ["AWS Foundations", "Google Cloud", "Looker", "Linux", "Postman", "Git"],
  },
  {
    label: "Practice",
    color: "emerald",
    items: ["Cybersecurity", "Agile / Scrum", "Code Review", "Secure SDLC", "Documentation"],
  },
];

const colorMap: Record<string, string> = {
  indigo: "from-indigo-500/30 to-indigo-500/0 text-indigo-300",
  fuchsia: "from-fuchsia-500/30 to-fuchsia-500/0 text-fuchsia-300",
  cyan: "from-cyan-500/30 to-cyan-500/0 text-cyan-300",
  emerald: "from-emerald-500/30 to-emerald-500/0 text-emerald-300",
};

const dotMap: Record<string, string> = {
  indigo: "bg-indigo-400",
  fuchsia: "bg-fuchsia-400",
  cyan: "bg-cyan-400",
  emerald: "bg-emerald-400",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-14 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="section-tag">
              <span className="h-1 w-1 rounded-full bg-cyan-400" />
              03 — Skills
            </div>
            <h2 className="mt-4 sm:mt-6 font-[var(--font-display)] text-[clamp(2rem,7vw,3rem)] sm:text-5xl font-semibold tracking-tight leading-[1.05]">
              The <span className="gradient-text">stack</span> I reach for.
            </h2>
          </div>
          <p className="max-w-md text-foreground/55 text-sm leading-relaxed">
            Day-to-day tools and methodologies I&apos;ve sharpened across two
            enterprise engagements — with cybersecurity woven through every
            layer.
          </p>
        </div>

        <div className="mt-8 sm:mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/5 bg-surface/40 p-4 sm:p-6 hover:border-white/15 transition-all overflow-hidden"
            >
              <div
                className={`absolute -top-12 -right-10 h-40 w-40 rounded-full bg-gradient-to-br ${
                  colorMap[g.color]
                } blur-2xl opacity-60 group-hover:opacity-100 transition-opacity`}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-foreground/55">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${dotMap[g.color]}`}
                  />
                  {g.label}
                </div>
                <ul className="mt-3 sm:mt-5 space-y-1.5 sm:space-y-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="text-[13px] sm:text-sm text-foreground/80 font-medium tracking-tight"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
        >
          <div className="rounded-2xl border border-white/5 bg-surface/40 p-4 sm:p-6 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-foreground/55">
                Español
              </div>
              <div className="mt-2 font-[var(--font-display)] text-xl font-medium">
                Native / Bilingual
              </div>
            </div>
            <div className="font-mono text-3xl text-foreground/30">ES</div>
          </div>
          <div className="rounded-2xl border border-white/5 bg-surface/40 p-4 sm:p-6 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-foreground/55">
                English
              </div>
              <div className="mt-2 font-[var(--font-display)] text-xl font-medium">
                Professional Working
              </div>
            </div>
            <div className="font-mono text-3xl text-foreground/30">EN</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
