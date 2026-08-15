import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { BotanicalBranch } from "@/components/site/Ornaments";
import { concept } from "@/content/project";

export function ConceptSection() {
  return (
    <Section id="concept">
      <BotanicalBranch className="pointer-events-none absolute -left-10 top-24 h-[70%] scale-y-[-1] text-clay/25" />
      <SectionHeading eyebrow={concept.eyebrow} heading={concept.heading} index="01" className="ml-auto md:w-2/3" />

      <Reveal delay={160} className="ml-auto mt-20 md:w-2/3">
        <blockquote className="border-l border-clay/50 pl-8 font-display text-[clamp(1.5rem,3.2vw,2.5rem)] italic leading-snug text-foreground/80">
          {concept.quote}
        </blockquote>
      </Reveal>

      <div className="ml-auto mt-24 grid gap-12 md:w-2/3 md:grid-cols-3">
        {concept.pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 140}>
            <div className="eyebrow text-clay">{`0${i + 1}`}</div>
            <h3 className="mt-5 font-display text-2xl">{p.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}