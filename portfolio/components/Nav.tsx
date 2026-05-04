"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-3 sm:px-6">
        <nav
          className={`flex items-center justify-between gap-2 rounded-full px-3 sm:px-5 py-2.5 sm:py-3 transition-all duration-500 ${
            scrolled
              ? "glass shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]"
              : "bg-transparent"
          }`}
        >
          <a
            href="#top"
            className="flex items-center gap-2 font-[var(--font-display)] tracking-tight"
          >
            <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 text-[11px] font-bold text-black">
              FL
              <span className="absolute -inset-px rounded-md bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/40 to-cyan-400/40 blur-md -z-10" />
            </span>
            <span className="text-sm font-semibold tracking-wide">
              Fran Luengo
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-7 text-sm text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="link-underline text-foreground/70 hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-foreground/90 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <span className="pulse-dot text-emerald-400">
                <span className="block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Available for hire
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden rounded-md border border-white/10 bg-white/5 p-2"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {open ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
