import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import aerial from "@/assets/masterplan-aerial.jpg";
import { community } from "@/content/project";

export function CommunitySection() {
  return (
    <Section id="masterplan" tone="sand">
      <SectionHeading eyebrow={community.eyebrow} heading={community.heading} index="04" />
      <div className="mt-20 grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <img
            src={aerial}
            alt="Aerial view of the masterplanned community at dusk"
            loading="lazy"
            width={1600}
            height={1104}
            className="aspect-[16/11] w-full object-cover shadow-[var(--shadow-frame)]"
          />
        </Reveal>
        <div className="lg:col-span-4 lg:self-center">
          {community.legend.map((l, i) => (
            <Reveal key={l.k} delay={i * 120}>
              <div className="flex items-baseline gap-6 border-b border-border py-5">
                <span className="eyebrow text-clay">{l.k}</span>
                <span className="font-display text-xl">{l.v}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}