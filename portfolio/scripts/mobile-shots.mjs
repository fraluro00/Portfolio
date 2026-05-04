import { chromium, devices } from "@playwright/test";
import fs from "node:fs";

const out = "scripts/shots";
fs.mkdirSync(out, { recursive: true });

const profiles = [
  { name: "iphone-se", viewport: { width: 375, height: 667 }, dpr: 2 },
  { name: "iphone-14", viewport: { width: 390, height: 844 }, dpr: 3 },
  { name: "ipad-mini", viewport: { width: 768, height: 1024 }, dpr: 2 },
];

const browser = await chromium.launch();

for (const p of profiles) {
  const ctx = await browser.newContext({
    viewport: p.viewport,
    deviceScaleFactor: p.dpr,
    isMobile: p.name !== "ipad-mini",
    hasTouch: true,
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Version/17.0 Mobile/15E148 Safari/604.1",
  });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);

  // Force-reveal Framer Motion `whileInView` content by overriding initial opacity
  await page.addStyleTag({
    content: `[style*="opacity:0"], [style*="opacity: 0"] { opacity: 1 !important; transform: none !important; }`,
  });
  // Also scroll once to trigger any IntersectionObserver-bound animations
  await page.evaluate(async () => {
    const total = document.body.scrollHeight;
    for (let y = 0; y <= total; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 200));
  });

  // Full page screenshot
  await page.screenshot({
    path: `${out}/${p.name}-full.png`,
    fullPage: true,
  });

  // Top viewport
  await page.screenshot({
    path: `${out}/${p.name}-hero.png`,
    fullPage: false,
  });

  // Measure section gaps
  const measurements = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll("section"));
    return sections.map((s) => {
      const r = s.getBoundingClientRect();
      const cs = getComputedStyle(s);
      return {
        id: s.id,
        height: Math.round(r.height),
        top: Math.round(r.top + window.scrollY),
        paddingTop: cs.paddingTop,
        paddingBottom: cs.paddingBottom,
      };
    });
  });

  const totalHeight = await page.evaluate(() => document.body.scrollHeight);

  console.log(`\n=== ${p.name} ${p.viewport.width}x${p.viewport.height} ===`);
  console.log(`Total page height: ${totalHeight}px`);
  console.table(measurements);

  await ctx.close();
}

await browser.close();
console.log("\nShots saved to", out);
