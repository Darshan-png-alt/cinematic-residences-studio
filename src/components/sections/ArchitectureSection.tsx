import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ArchArc } from "@/components/site/Ornaments";
import facade from "@/assets/facade-detail.jpg";
import { architecture } from "@/content/project";

export function ArchitectureSection() {
  return (
    <Section id="architecture" tone="sand">
      <div className="grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={architecture.eyebrow} heading={architecture.heading} index="02" />
          <Reveal delay={160}>
            <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">{architecture.body}</p>
          </Reveal>
          <dl className="mt-12 max-w-md">
            {architecture.notes.map((n, i) => (
              <Reveal key={n.k} delay={200 + i * 120}>
                <div className="flex items-baseline justify-between gap-6 border-t border-border py-4">
                  <dt className="eyebrow">{n.k}</dt>
                  <dd className="font-display text-lg">{n.v}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>

        <Reveal delay={120} className="relative lg:col-span-7">
          <ArchArc className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 text-clay/30" />
          <figure className="relative overflow-hidden shadow-[var(--shadow-frame)]">
            <img
              src={facade}
              alt="Close view of the vertical stone fins on the facade"
              loading="lazy"
              width={1200}
              height={1504}
              className="aspect-[4/5] w-full object-cover saturate-[0.32] contrast-[1.16] brightness-[1.06] transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 mix-blend-color bg-[#8a92a0]/35" />
          </figure>
          <div className="absolute -bottom-8 -right-4 hidden bg-background px-8 py-6 shadow-[var(--shadow-lift)] md:block">
            <span className="eyebrow">Facade study</span>
            <p className="mt-2 font-display text-2xl italic">Shadow as material</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}