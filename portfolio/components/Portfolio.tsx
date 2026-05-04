"use client";

import { motion } from "framer-motion";
import { Lock, Sparkles, ArrowUpRight } from "lucide-react";

const placeholders = [
  {
    title: "Secure Banking API",
    domain: "Backend · Spring Boot · JPA",
    status: "In progress",
    accent: "from-indigo-500/40 via-fuchsia-500/30 to-transparent",
  },
  {
    title: "Angular Dashboard Suite",
    domain: "Frontend · Angular · PrimeNG",
    status: "Coming soon",
    accent: "from-fuchsia-500/40 via-pink-500/30 to-transparent",
  },
  {
    title: "Cybersec Playground",
    domain: "Research · CEHOS · Pentesting",
    status: "Coming soon",
    accent: "from-cyan-500/40 via-teal-500/30 to-transparent",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-14 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="orb"
        style={{
          width: 480,
          height: 480,
          background: "radial-gradient(circle, #6366f1, transparent 70%)",
          top: "20%",
          left: "-15%",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="section-tag">
              <span className="h-1 w-1 rounded-full bg-pink-400" />
              05 — Portfolio
            </div>
            <h2 className="mt-4 sm:mt-6 font-[var(--font-display)] text-[clamp(2rem,7vw,3rem)] sm:text-5xl font-semibold tracking-tight leading-[1.05]">
              Selected work,{" "}
              <span className="gradient-text">currently under construction</span>.
            </h2>
            <p className="mt-5 sm:mt-6 text-foreground/60 leading-relaxed text-[15px] sm:text-base">
              This space will host case studies, side projects, and open-source
              contributions. Stay tuned — or reach out if you&apos;d like an
              early walkthrough.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-foreground/85 hover:bg-white/[0.06] hover:border-white/20 transition-all"
          >
            Request a preview
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="mt-8 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {placeholders.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/5 bg-surface/50 overflow-hidden hover:border-white/15 transition-all"
            >
              <div className="relative aspect-[16/9] sm:aspect-[4/3] overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.accent}`}
                />
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3 text-foreground/40 group-hover:text-foreground/70 transition-colors">
                    <Lock size={28} strokeWidth={1.4} />
                    <span className="text-[10px] uppercase tracking-[0.3em]">
                      {p.status}
                    </span>
                  </div>
                </div>
                <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-foreground/70">
                  <Sparkles size={10} />
                  Soon
                </div>
              </div>

              <div className="p-5 border-t border-white/5">
                <div className="font-[var(--font-display)] text-lg font-medium tracking-tight">
                  {p.title}
                </div>
                <div className="mt-1 text-xs text-foreground/50 font-mono">
                  {p.domain}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
