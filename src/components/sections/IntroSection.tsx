import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FloralMark } from "@/components/site/Ornaments";
import { intro, project } from "@/content/project";

export function IntroSection() {
  return (
    <Section id="intro" tone="dark" className="py-32 md:py-48">
      <FloralMark className="pointer-events-none absolute -right-16 top-10 h-64 w-64 text-ink-foreground/10" />
      <div className="grid gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <span className="eyebrow text-clay">{intro.eyebrow}</span>
          <div className="mt-10 hairline opacity-30" />
          <p className="mt-6 font-display text-2xl italic text-ink-foreground/70">
            {project.tagline}
          </p>
        </Reveal>

        <div className="md:col-span-8">
          <Reveal>
            <h2 className="display-xl text-[clamp(2rem,4.4vw,3.75rem)]">{intro.heading}</h2>
          </Reveal>
          {intro.body.map((para, i) => (
            <Reveal key={i} delay={120 + i * 120}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-foreground/65 md:text-lg">
                {para}
              </p>
            </Reveal>
          ))}

          <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {intro.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 140}>
                <div className="border-t border-ink-foreground/15 pt-6">
                  <div className="font-display text-5xl">{s.value}</div>
                  <div className="eyebrow mt-3 text-ink-foreground/50">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}