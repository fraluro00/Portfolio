"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    school: "EIP International Business School",
    degree: "Postgraduate Degree, CEHOS (Cybersecurity)",
    period: "May 2024 — October 2025",
  },
  {
    school: "Joyfe",
    degree: "Higher Education — Multiplatform Application Development",
    period: "September 2020 — June 2022",
  },
  {
    school: "Francisco de Quevedo",
    degree: "Microcomputer Systems and Networks",
    period: "September 2018 — June 2020",
  },
];

const certifications = [
  "AWS Academy Cloud Foundations",
  "JAVA — JF Java Fundamentals (Oracle Academy)",
  "Harvard ManageMentor — Team Management",
  "Harvard ManageMentor — Coaching",
  "Harvard ManageMentor — Delegating",
];

export default function Education() {
  return (
    <section id="education" className="relative py-14 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="section-tag">
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              04 — Education & Certs
            </div>
            <h2 className="mt-4 sm:mt-6 font-[var(--font-display)] text-[clamp(2rem,7vw,3rem)] sm:text-5xl font-semibold tracking-tight leading-[1.05]">
              Always <span className="gradient-text">leveling up</span>.
            </h2>
            <p className="mt-5 sm:mt-6 text-foreground/60 leading-relaxed text-[15px] sm:text-base">
              A trajectory that combines formal CS education, applied vocational
              training, and ongoing specialization in cybersecurity and cloud.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            <div>
              <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-foreground/55 mb-4 sm:mb-5">
                <GraduationCap size={14} />
                Education
              </div>
              <div className="space-y-3">
                {education.map((e, i) => (
                  <motion.div
                    key={e.school}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="rounded-xl border border-white/5 bg-surface/40 p-4 sm:p-5 hover:border-white/15 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start sm:justify-between gap-2 sm:gap-3">
                      <div className="min-w-0">
                        <div className="font-[var(--font-display)] text-base sm:text-lg font-medium tracking-tight">
                          {e.school}
                        </div>
                        <div className="mt-1 text-[13px] sm:text-sm text-foreground/60">
                          {e.degree}
                        </div>
                      </div>
                      <div className="font-mono text-xs text-foreground/45 sm:whitespace-nowrap">
                        {e.period}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-foreground/55 mb-4 sm:mb-5">
                <Award size={14} />
                Certifications
              </div>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid sm:grid-cols-2 gap-2"
              >
                {certifications.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3.5 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-sm text-foreground/75"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-400 flex-none" />
                    {c}
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
