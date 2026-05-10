"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { LinkedInIcon, GithubIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] sm:min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-10 sm:pt-28 sm:pb-20"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg" />

      {/* Orbs */}
      <div
        className="orb"
        style={{
          width: 520,
          height: 520,
          background: "radial-gradient(circle, #6366f1, transparent 70%)",
          top: "-10%",
          left: "-10%",
        }}
      />
      <div
        className="orb"
        style={{
          width: 460,
          height: 460,
          background: "radial-gradient(circle, #ec4899, transparent 70%)",
          bottom: "-15%",
          right: "-10%",
        }}
      />
      <div
        className="orb"
        style={{
          width: 380,
          height: 380,
          background: "radial-gradient(circle, #06b6d4, transparent 70%)",
          top: "30%",
          right: "20%",
          opacity: 0.25,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-foreground/70 mb-6 sm:mb-8"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Fullstack Developer · Madrid, Spain
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-[var(--font-display)] text-[clamp(2.6rem,12vw,4rem)] sm:text-7xl md:text-8xl font-semibold leading-[0.95] tracking-tight break-words"
        >
          <span className="block text-foreground/95">Fran Luengo</span>
          <span className="block gradient-text">Rojas</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 mx-auto max-w-2xl text-[14px] sm:text-lg text-foreground/65 leading-relaxed px-1"
        >
          Software developer building and shipping{" "}
          <span className="text-foreground/90">full-stack products</span>{" "}
          — from backend APIs to polished frontends. Two years of{" "}
          <span className="text-foreground/90">production code</span> at EBN Banco,
          now shipping products in public.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition-all"
          >
            Let&apos;s build together
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#journey"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-foreground/85 hover:bg-white/[0.06] hover:border-white/20 transition-all"
          >
            View career journey
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 sm:mt-10 flex items-center justify-center gap-5 text-foreground/50"
        >
          <a
            href="https://www.linkedin.com/in/fran-luengo"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-foreground transition-colors"
          >
            <LinkedInIcon width={18} height={18} />
          </a>
          <a
            href="mailto:fraluro00@gmail.com"
            aria-label="Email"
            className="hover:text-foreground transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/fraluro00?tab=repositories"
            aria-label="Github"
            className="hover:text-foreground transition-colors"
          >
            <GithubIcon width={18} height={18} />
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5"
        >
          {[
            { k: "4+", v: "Years building" },
            { k: "2", v: "Enterprise clients" },
            { k: "TS · Python", v: "Stack core" },
            { k: "EU / Remote", v: "Available" },
          ].map((s) => (
            <div
              key={s.v}
              className="bg-background/60 backdrop-blur px-4 py-4 sm:py-5 text-left"
            >
              <div className="font-[var(--font-display)] text-xl sm:text-2xl font-semibold tracking-tight">
                {s.k}
              </div>
              <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-foreground/45">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/40 text-[10px] uppercase tracking-[0.3em] flex flex-col items-center gap-2">
        <span>Scroll</span>
        <span className="block h-8 w-px bg-gradient-to-b from-foreground/40 to-transparent" />
      </div>
    </section>
  );
}
