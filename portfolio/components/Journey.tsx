"use client";

import { motion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";

const roles = [
  {
    company: "EBN Banco",
    role: "Java Fullstack Developer",
    period: "Dec 2023 — Present",
    location: "Madrid",
    duration: "2 yrs 6 mos",
    accent: "from-indigo-500 to-fuchsia-500",
    bullets: [
      "Develop and maintain backend services in Java, Spring Boot, JPA, and SQL for client-facing banking applications.",
      "Build and enhance Angular + TypeScript frontends, ensuring responsiveness and usability.",
      "Implement and harden REST APIs, validating contracts with Postman and improving integration reliability.",
      "Apply cybersecurity principles in code review and feature work to reduce risk surface.",
      "Participate across the full SDLC: design, deployment, and ongoing maintenance.",
      "Engaged as an external contractor for one year before joining directly.",
    ],
    stack: ["Java", "Spring Boot", "JPA", "SQL", "Angular", "TypeScript", "REST", "Postman"],
  },
  {
    company: "Eviden",
    role: "Application Developer",
    period: "Apr 2022 — Dec 2023",
    location: "Madrid, Spain",
    duration: "1 yr 9 mos",
    accent: "from-cyan-500 to-indigo-500",
    bullets: [
      "Developed frontend applications using Angular, TypeScript, Google Cloud, and Looker.",
      "Improved MINISDEF's frontend with Angular, TypeScript, and PrimeNG — focused on usability and responsiveness.",
      "Wrote technical documentation and reports for stakeholders, supporting transparency and project continuity.",
      "Started with a 4-month internship and progressed into the full role.",
    ],
    stack: ["Angular", "TypeScript", "PrimeNG", "Google Cloud", "Looker"],
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative py-14 sm:py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-2xl">
          <div className="section-tag">
            <span className="h-1 w-1 rounded-full bg-fuchsia-400" />
            02 — Career
          </div>
          <h2 className="mt-4 sm:mt-6 font-[var(--font-display)] text-[clamp(2rem,7vw,3rem)] sm:text-5xl font-semibold tracking-tight leading-[1.05]">
            From <span className="gradient-text">internship</span> to shipping
            production products.
          </h2>
          <p className="mt-5 sm:mt-6 text-foreground/60 leading-relaxed text-[15px] sm:text-base">
            A focused trajectory — from government-facing apps at Eviden, to
            banking systems at EBN Banco, to building and shipping my own
            products.
          </p>
        </div>

        <div className="mt-10 sm:mt-20 relative">
          {/* Timeline rail */}
          <div className="absolute left-3 sm:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-fuchsia-500/40 to-transparent" />

          <div className="space-y-6 sm:space-y-12">
            {roles.map((r, i) => (
              <motion.div
                key={r.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-9 sm:pl-20"
              >
                {/* Node */}
                <div className="absolute left-3 sm:left-8 -translate-x-1/2 top-2">
                  <div
                    className={`relative h-3 w-3 rounded-full bg-gradient-to-br ${r.accent}`}
                  >
                    <div
                      className={`absolute -inset-2 rounded-full bg-gradient-to-br ${r.accent} opacity-30 blur-md`}
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/5 bg-surface/50 backdrop-blur-sm p-4 sm:p-8 hover:border-white/10 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start sm:justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-foreground/55 text-xs uppercase tracking-[0.18em]">
                        <Building2 size={12} />
                        {r.company}
                      </div>
                      <h3 className="mt-2 font-[var(--font-display)] text-xl sm:text-3xl font-semibold tracking-tight">
                        {r.role}
                      </h3>
                    </div>
                    <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 sm:gap-1.5 text-xs flex-wrap">
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-foreground/70 font-mono whitespace-nowrap">
                        {r.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-foreground/45 whitespace-nowrap">
                        <MapPin size={11} />
                        {r.location} · {r.duration}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-2.5">
                    {r.bullets.map((b, k) => (
                      <li
                        key={k}
                        className="flex gap-3 text-[13px] sm:text-sm text-foreground/70 leading-relaxed"
                      >
                        <span
                          className={`mt-2 h-px w-4 flex-none bg-gradient-to-r ${r.accent} opacity-70`}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 sm:mt-6 flex flex-wrap gap-1.5">
                    {r.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[11px] font-mono tracking-tight text-foreground/65"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
