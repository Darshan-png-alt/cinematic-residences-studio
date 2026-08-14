import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { residences } from "@/content/project";

export function ResidencesSection() {
  return (
    <Section id="residences">
      <SectionHeading eyebrow={residences.eyebrow} heading={residences.heading} index="05" />
      <div className="mt-20">
        {residences.types.map((t, i) => (
          <Reveal key={t.type} delay={i * 100}>
            <article className="group grid items-baseline gap-4 border-t border-border py-8 transition-colors duration-500 hover:border-clay md:grid-cols-12 md:py-10">
              <span className="eyebrow text-clay md:col-span-1">{`0${i + 1}`}</span>
              <h3 className="font-display text-[clamp(1.6rem,3vw,2.5rem)] md:col-span-5">{t.type}</h3>
              <p className="text-sm text-muted-foreground md:col-span-4">{t.note}</p>
              <span className="font-display text-xl md:col-span-2 md:text-right">{t.area}</span>
            </article>
          </Reveal>
        ))}
        <div className="border-t border-border" />
      </div>
    </Section>
  );
}