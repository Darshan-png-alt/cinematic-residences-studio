import { useEffect, useRef, useState } from "react";
import heroTower from "@/assets/hero-tower.jpg";
import { project } from "@/content/project";
import { ArchArc, BotanicalBranch } from "./Ornaments";

/**
 * Cinematic opening.
 *
 * The section is two viewports tall; an inner sticky stage holds all layers so
 * the scroll gesture plays a continuous film rather than jumping to the next
 * section. A single rAF-throttled scroll listener drives every transform.
 *
 * Layer map (back -> front):
 *   1. architectural plate (slow scale + rise)
 *   2. tonal depth washes
 *   3. line-art ornaments (draw on load, drift on scroll)
 *   4. typography (recedes as the building takes over)
 *   5. building cutout — a masked duplicate of the plate that overlaps the
 *      section below. Swap `heroTower` here for a transparent PNG render from
 *      the client and remove the mask utility classes; positioning stays.
 */
export function Hero() {
  // p  -> 0..1 across the first viewport (typography beat)
  // q  -> 0..1 across the whole sticky run (building beat)
  const [p, setP] = useState(0);
  const [q, setQ] = useState(0);
  const [entered, setEntered] = useState(false);
  const frame = useRef(0);
  const wrap = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const t = window.setTimeout(() => setEntered(true), 150);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      if (frame.current) return;
      frame.current = window.requestAnimationFrame(() => {
        frame.current = 0;
        const h = window.innerHeight || 1;
        const y = window.scrollY;
        const total = Math.max(1, (wrap.current?.offsetHeight ?? h * 2) - h);
        setP(Math.min(1, Math.max(0, y / h)));
        setQ(Math.min(1, Math.max(0, y / total)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  const ease = (t: number) => t * t * (3 - 2 * t);
  const qe = ease(q);

  return (
    <section
      id="top"
      ref={wrap}
      className="relative z-20 h-[200svh] w-full bg-ink text-ink-foreground"
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* Layer 1 — architectural plate */}
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `scale(${1.05 + qe * 0.16}) translate3d(0, ${qe * -7}%, 0)`,
            transition: "transform 120ms linear",
          }}
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

        {/* Layer 2 — tonal depth; lifts slightly so the building gains presence */}
        <div className="absolute inset-0 bg-ink/45" style={{ opacity: 1 - qe * 0.45 }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--ink)_2%,transparent_45%)]" />
        <div
          className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_35%,var(--ink)_115%)]"
          style={{ opacity: 0.65 + qe * 0.35 }}
        />

        {/* Layer 3 — line-art depth cues */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
          style={{
            transform: `translate3d(-50%, -50%, 0) scale(${1 - qe * 0.12}) rotate(${qe * 8}deg)`,
            opacity: 1 - qe * 0.55,
          }}
        >
          <ArchArc draw className="h-[130vmin] w-[130vmin] text-ink-foreground/15" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 will-change-transform"
          style={{ transform: `translate3d(0, ${qe * 16}%, 0)`, opacity: 1 - qe * 0.85 }}
        >
          <BotanicalBranch className="absolute -left-6 bottom-0 hidden h-[52vh] text-ink-foreground/25 md:block" />
          <BotanicalBranch className="absolute -right-6 bottom-0 hidden h-[38vh] scale-x-[-1] text-ink-foreground/20 md:block" />
        </div>

        {/* Layer 4 — typography */}
        <div
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center will-change-transform"
          style={{
            transform: `translate3d(0, ${p * -16}vh, 0) scale(${1 - p * 0.06})`,
            opacity: Math.max(0, 1 - p * 1.4),
            filter: `blur(${p * 6}px)`,
          }}
        >
          <div
            className="eyebrow text-ink-foreground/70 transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: entered ? 1 : 0,
              transform: entered ? "none" : "translateY(16px)",
              filter: entered ? "blur(0px)" : "blur(6px)",
            }}
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
                className="inline-block will-change-[opacity,transform,filter] transition-all duration-[2600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  opacity: entered ? 1 : 0,
                  transform: entered ? "none" : "translateY(34px) scale(1.04)",
                  filter: entered ? "blur(0px)" : "blur(14px)",
                  transitionDelay: `${300 + i * 160}ms`,
                }}
              >
                {ch}
              </span>
            ))}
          </h1>

          <p
            className="mt-6 max-w-xl font-display text-[clamp(1.05rem,2.2vw,1.6rem)] italic text-ink-foreground/80 transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: entered ? 1 : 0,
              transform: entered ? "none" : "translateY(20px)",
              filter: entered ? "blur(0px)" : "blur(8px)",
              transitionDelay: `${300 + project.name.length * 160 + 200}ms`,
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
      </div>

      {/* Building cutout — overlaps the section below. Replace the src with the
          client's transparent building render when supplied. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 hidden h-[34svh] translate-y-[62%] overflow-hidden md:block"
        style={{ opacity: Math.max(0, qe * 1.2 - 0.35) * 0.42 }}
      >
        <div
          className="h-[200%] w-full [mask-image:radial-gradient(58%_58%_at_52%_8%,black_20%,transparent_78%)] [-webkit-mask-image:radial-gradient(58%_58%_at_52%_8%,black_20%,transparent_78%)]"
          style={{ transform: `translate3d(0, ${-18 + qe * 8}%, 0)` }}
        >
          <img
            src={heroTower}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover object-[60%_20%]"
          />
        </div>
      </div>
    </section>
  );
}