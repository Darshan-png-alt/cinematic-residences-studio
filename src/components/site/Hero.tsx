import { useEffect, useRef, useState } from "react";
import heroTower from "@/assets/hero-tower.jpg";
import { project } from "@/content/project";
import { ArchArc, BotanicalBranch } from "./Ornaments";

/**
 * Full-screen cinematic opening.
 * A single rAF-throttled scroll listener drives all layer transforms.
 */
export function Hero() {
  const [p, setP] = useState(0); // 0 -> 1 across the first viewport
  const [entered, setEntered] = useState(false);
  const frame = useRef(0);

  useEffect(() => {
    const t = window.setTimeout(() => setEntered(true), 120);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const onScroll = () => {
      if (frame.current) return;
      frame.current = window.requestAnimationFrame(() => {
        frame.current = 0;
        const h = window.innerHeight || 1;
        setP(Math.min(1, Math.max(0, window.scrollY / h)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden bg-ink text-ink-foreground">
      {/* Layer 1 — architectural image, slow scale + rise */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `scale(${1.06 + p * 0.12}) translate3d(0, ${p * -6}%, 0)` }}
      >
        <img
          src={heroTower}
          alt="Architectural view of the residential tower at golden hour"
          width={1600}
          height={1920}
          fetchPriority="high"
          className="h-full w-full object-cover object-[60%_center]"
        />
      </div>

      {/* Layer 2 — tonal depth */}
      <div className="absolute inset-0 bg-ink/45" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--ink)_2%,transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_35%,var(--ink)_115%)]" />

      {/* Layer 3 — line-art depth cues */}
      <ArchArc
        className="pointer-events-none absolute left-1/2 top-1/2 h-[130vmin] w-[130vmin] -translate-x-1/2 -translate-y-1/2 text-ink-foreground/15 will-change-transform"
        // subtle counter-motion
      />
      <div
        className="pointer-events-none absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${p * 14}%, 0)`, opacity: 1 - p * 0.8 }}
      >
        <BotanicalBranch className="absolute -left-6 bottom-0 hidden h-[52vh] text-ink-foreground/25 md:block" />
        <BotanicalBranch className="absolute -right-6 bottom-0 hidden h-[38vh] scale-x-[-1] text-ink-foreground/20 md:block" />
      </div>

      {/* Layer 4 — typography */}
      <div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center will-change-transform"
        style={{
          transform: `translate3d(0, ${p * -18}vh, 0)`,
          opacity: Math.max(0, 1 - p * 1.55),
          filter: `blur(${p * 5}px)`,
        }}
      >
        <div
          className="eyebrow text-ink-foreground/70 transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ opacity: entered ? 1 : 0, transform: entered ? "none" : "translateY(14px)" }}
        >
          {project.descriptor}
        </div>

        <h1
          className="display-xl mt-8 text-[clamp(3.5rem,15vw,13rem)] tracking-[0.12em]"
          aria-label={project.name}
        >
          {project.name.split("").map((ch, i) => (
            <span
              key={`${ch}-${i}`}
              className="inline-block transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: entered ? 1 : 0,
                transform: entered ? "none" : "translateY(26px)",
                transitionDelay: `${240 + i * 90}ms`,
              }}
            >
              {ch}
            </span>
          ))}
        </h1>

        <p
          className="mt-6 max-w-xl font-display text-[clamp(1.05rem,2.2vw,1.6rem)] italic text-ink-foreground/80 transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: entered ? 1 : 0,
            transform: entered ? "none" : "translateY(18px)",
            transitionDelay: "900ms",
          }}
        >
          {project.tagline}
        </p>
      </div>

      {/* Layer 5 — footer rail */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 px-6 pb-8 md:px-10"
        style={{ opacity: Math.max(0, 1 - p * 2) }}
      >
        <div className="mx-auto flex max-w-[1500px] items-end justify-between">
          <span className="eyebrow text-ink-foreground/60">{project.location}</span>
          <div className="flex flex-col items-center gap-3">
            <span className="eyebrow text-ink-foreground/60">Scroll</span>
            <span className="relative block h-14 w-px overflow-hidden bg-ink-foreground/25">
              <span className="absolute inset-x-0 top-0 block h-5 animate-[scrollcue_2.4s_var(--ease-cine)_infinite] bg-ink-foreground/80" />
            </span>
          </div>
          <span className="eyebrow hidden text-ink-foreground/60 md:block">{project.year}</span>
        </div>
      </div>
    </section>
  );
}