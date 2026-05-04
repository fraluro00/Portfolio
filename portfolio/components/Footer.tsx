export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-background/60">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/45">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="font-mono">
            © {year} Fran Luengo Rojas — Crafted in Madrid
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="#top"
            className="hover:text-foreground/80 transition-colors uppercase tracking-[0.18em]"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
