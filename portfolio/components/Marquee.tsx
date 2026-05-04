const items = [
  "Java",
  "Spring Boot",
  "JPA",
  "SQL",
  "Angular",
  "TypeScript",
  "REST APIs",
  "Postman",
  "Linux",
  "Cybersecurity",
  "AWS",
  "Google Cloud",
  "Looker",
  "PrimeNG",
  "Agile",
];

export default function Marquee() {
  return (
    <div className="relative border-y border-white/5 bg-background/40 py-4 sm:py-5 overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--background), transparent)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, var(--background), transparent)",
        }}
      />
      <div className="marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-4 sm:mx-6 text-[12px] sm:text-sm uppercase tracking-[0.25em] text-foreground/50 font-medium"
          >
            {item}
            <span className="ml-12 text-foreground/15">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
