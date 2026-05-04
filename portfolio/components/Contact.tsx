"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="relative py-14 sm:py-24 lg:py-32 overflow-hidden">
      <div
        className="orb"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, #ec4899, transparent 70%)",
          bottom: "-30%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.3,
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-surface/80 to-surface-2/80 backdrop-blur-xl p-6 sm:p-10 lg:p-14 relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="section-tag">
                <span className="h-1 w-1 rounded-full bg-indigo-400" />
                06 — Get in touch
              </div>
              <h2 className="mt-4 sm:mt-6 font-[var(--font-display)] text-[clamp(2rem,7vw,3rem)] sm:text-5xl font-semibold tracking-tight leading-[1.05]">
                Got an idea or a role?{" "}
                <span className="gradient-text">Let&apos;s talk</span>.
              </h2>
              <p className="mt-5 sm:mt-6 text-foreground/65 leading-relaxed max-w-xl text-[15px] sm:text-base">
                Open to mid-level Software Developer opportunities across Spain
                or fully remote. Banking, fintech, and security-driven projects
                are especially welcome.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                <a
                  href="mailto:fraluro00@gmail.com"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition-all min-w-0"
                >
                  <Mail size={15} className="flex-none" />
                  <span className="truncate">fraluro00@gmail.com</span>
                  <ArrowUpRight
                    size={15}
                    className="flex-none transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/fran-luengo"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-foreground/90 hover:bg-white/[0.08] hover:border-white/25 transition-all"
                >
                  <LinkedInIcon width={15} height={15} />
                  LinkedIn
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              {[
                {
                  icon: MapPin,
                  label: "Based in",
                  value: "Madrid, Spain",
                },
                {
                  icon: Phone,
                  label: "Mobile",
                  value: "+34 644 055 902",
                  href: "tel:+34644055902",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "fraluro00@gmail.com",
                  href: "mailto:fraluro00@gmail.com",
                },
              ].map((c) => {
                const Icon = c.icon;
                const Inner = (
                  <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06] hover:border-white/20 transition-all">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-foreground/80">
                      <Icon size={16} strokeWidth={1.6} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-foreground/45">
                        {c.label}
                      </div>
                      <div className="mt-0.5 font-medium tracking-tight truncate text-sm sm:text-base">
                        {c.value}
                      </div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="block">
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label}>{Inner}</div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
