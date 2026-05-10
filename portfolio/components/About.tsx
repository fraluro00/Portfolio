"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users, Code2 } from "lucide-react";

const traits = [
  {
    icon: Shield,
    title: "Security-minded",
    body: "Cybersecurity-trained, applying secure coding principles in every commit.",
  },
  {
    icon: Code2,
    title: "Fullstack fluent",
    body: "From Spring Boot APIs to Next.js frontends — shipping full products end-to-end.",
  },
  {
    icon: Zap,
    title: "Reliability driven",
    body: "REST APIs tested, monitored, and hardened. Products deployed and running in production.",
  },
  {
    icon: Users,
    title: "Cross-functional",
    body: "Agile collaborator across teams, stakeholders, and external partners.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-14 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-tag">
                <span className="h-1 w-1 rounded-full bg-indigo-400" />
                01 — About
              </div>
              <h2 className="mt-4 sm:mt-6 font-[var(--font-display)] text-[clamp(2rem,7vw,3rem)] sm:text-5xl font-semibold tracking-tight leading-[1.05]">
                Engineering software that{" "}
                <span className="gradient-text">survives production</span>.
              </h2>
              <p className="mt-5 sm:mt-6 text-foreground/65 leading-relaxed text-[15px] sm:text-base">
                I&apos;m a software developer based in Madrid who builds and
                ships full-stack products. From Java backend services to Next.js
                frontends, I own features end-to-end — design, implementation,
                and deployment.
              </p>
              <p className="mt-4 text-foreground/65 leading-relaxed text-[15px] sm:text-base">
                I gravitate toward problems where{" "}
                <span className="text-foreground/90">correctness</span>,{" "}
                <span className="text-foreground/90">security</span>, and{" "}
                <span className="text-foreground/90">user experience</span>{" "}
                meet — and I want to keep working on them at scale.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {traits.map((t, i) => {
                const Icon = t.icon;
                return (
                  <motion.div
                    key={t.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group relative rounded-2xl border border-white/5 bg-surface/60 p-4 sm:p-6 hover:bg-surface-2/80 transition-colors border-glow overflow-hidden"
                  >
                    <div className="relative z-10">
                      <div className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-foreground/80 group-hover:text-foreground transition-colors">
                        <Icon size={16} strokeWidth={1.6} />
                      </div>
                      <h3 className="mt-3 sm:mt-5 font-[var(--font-display)] text-base sm:text-lg font-medium tracking-tight">
                        {t.title}
                      </h3>
                      <p className="mt-1.5 sm:mt-2 text-[13px] sm:text-sm text-foreground/55 leading-relaxed">
                        {t.body}
                      </p>
                    </div>
                    <div className="absolute -bottom-12 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
