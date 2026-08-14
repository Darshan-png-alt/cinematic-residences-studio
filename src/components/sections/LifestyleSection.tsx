import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import pool from "@/assets/amenity-pool.jpg";
import interior from "@/assets/interior-residence.jpg";
import { lifestyle } from "@/content/project";

export function LifestyleSection() {
  return (
    <Section id="lifestyle">
      <SectionHeading eyebrow={lifestyle.eyebrow} heading={lifestyle.heading} index="03" />

      <div className="mt-20 grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <img
            src={pool}
            alt="Rooftop infinity pool terrace at sunset"
            loading="lazy"
            width={1200}
            height={1504}
            className="aspect-[3/4] w-full object-cover"
          />
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal delay={140}>
            <img
              src={interior}
              alt="Interior of a residence with floor to ceiling windows"
              loading="lazy"
              width={1408}
              height={1008}
              className="aspect-[16/10] w-full object-cover"
            />
          </Reveal>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {lifestyle.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <div className="border-t border-border pt-5">
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}