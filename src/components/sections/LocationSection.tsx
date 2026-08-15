import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ArchArc } from "@/components/site/Ornaments";
import { location, project } from "@/content/project";

export function LocationSection() {
  return (
    <Section id="location" tone="dark">
      <ArchArc className="pointer-events-none absolute -right-40 top-1/2 h-[42rem] w-[42rem] -translate-y-1/2 text-ink-foreground/10" />
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeading eyebrow={location.eyebrow} heading={location.heading} index="06" />
          <Reveal delay={180}>
            <p className="mt-8 font-display text-xl italic text-ink-foreground/70">{project.location}</p>
          </Reveal>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 lg:self-center">
          {location.points.map((p, i) => (
            <Reveal key={p.label} delay={i * 120}>
              <div className="flex items-baseline gap-6 border-b border-ink-foreground/15 py-5">
                <span className="font-display text-4xl text-clay">{p.time}</span>
                <span className="text-base text-ink-foreground/85">{p.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}