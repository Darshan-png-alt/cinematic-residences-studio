import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { BotanicalBranch, ArchArc, LogoMark } from "@/components/site/Ornaments";
import { AmenityFrame } from "@/components/amenities/AmenityFrame";
import { amenitiesPage, amenityCategories } from "@/content/amenities";
import { project } from "@/content/project";

const title = "Amenities — STHITHA";
const description =
  "Shared gardens, courts, an amphitheatre and a clubhouse — the spaces at STHITHA where families, children and neighbours spend their days together.";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AmenitiesPage,
});

function AmenitiesPage() {
  return (
    <main className="bg-background">
      <SiteNav />

      {/* Opening */}
      <Section className="pt-40 md:pt-56">
        <ArchArc className="pointer-events-none absolute -top-10 right-0 h-[70%] text-clay/20" draw />
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="eyebrow text-clay">{project.name}</span>
              <span className="eyebrow">{amenitiesPage.eyebrow}</span>
              <span className="h-px flex-1 bg-current opacity-15" />
            </div>
            <h1 className="display-xl mt-8 text-[clamp(2.5rem,6vw,5rem)]">{amenitiesPage.heading}</h1>
          </Reveal>
          <Reveal delay={160} className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="max-w-md leading-relaxed text-muted-foreground">{amenitiesPage.lede}</p>
          </Reveal>
        </div>
        <Reveal delay={220} className="mt-16 block">
          <AmenityFrame image={amenitiesPage.cover} priority className="shadow-[var(--shadow-frame)]" />
        </Reveal>
      </Section>

      {amenityCategories.map((category, ci) => (
        <Section key={category.id} id={category.id} tone={ci % 2 === 1 ? "sand" : "light"}>
          <SectionHeading
            eyebrow={category.eyebrow}
            heading={category.heading}
            index={category.index}
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <AmenityFrame image={category.cover} />
            </Reveal>
            <Reveal delay={140} className="lg:col-span-4 lg:col-start-9 lg:self-center">
              <p className="max-w-md leading-relaxed text-muted-foreground">{category.intro}</p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {category.items.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 3) * 110}
                className={item.feature ? "sm:col-span-2" : ""}
              >
                <article className="group">
                  <div className="overflow-hidden">
                    <AmenityFrame
                      image={item.image}
                      className="transition-transform duration-[1200ms] ease-[var(--ease-cine)] group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-6 border-t border-border pt-5 transition-colors duration-500 group-hover:border-clay">
                    <div className="flex items-baseline gap-4">
                      <span className="eyebrow text-clay">{`${category.index}.${i + 1}`}</span>
                      <h3 className="font-display text-2xl">{item.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
      ))}

      {/* Closing */}
      <Section tone="dark">
        <BotanicalBranch className="pointer-events-none absolute -left-10 bottom-0 h-[70%] text-clay/25" />
        <div className="relative grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <span className="eyebrow text-clay">{amenitiesPage.closing.eyebrow}</span>
            <h2 className="display-xl mt-8 text-[clamp(2.25rem,5vw,4.25rem)]">
              {amenitiesPage.closing.heading}
            </h2>
            <p className="mt-8 max-w-xl leading-relaxed opacity-70">{amenitiesPage.closing.body}</p>
          </Reveal>
          <Reveal delay={160} className="lg:col-span-3 lg:col-start-10 lg:self-end">
            <LogoMark className="h-10 w-10 opacity-70" />
            <p className="mt-6 font-display text-xl">{project.email}</p>
            <p className="font-display text-xl">{project.phone}</p>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
