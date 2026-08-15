import { Reveal } from "@/components/site/Reveal";
import { FloralMark } from "@/components/site/Ornaments";
import courtyard from "@/assets/landscape-courtyard.jpg";
import { nature } from "@/content/project";

export function NatureSection() {
  return (
    <section id="landscape" className="relative scroll-mt-24 overflow-hidden bg-ink text-ink-foreground">
      <div className="relative h-[78vh] min-h-[480px] w-full overflow-hidden md:h-[96vh]">
        <img
          src={courtyard}
          alt="Shaded courtyard with olive trees and a reflecting pool"
          loading="lazy"
          width={1600}
          height={1104}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--ink)_4%,transparent_60%)]" />
      </div>

      <div className="mx-auto -mt-16 max-w-[1500px] px-6 pb-16 md:px-10 md:pb-20">
        <div className="relative grid gap-12 md:grid-cols-12">
          <FloralMark className="pointer-events-none absolute right-0 top-0 h-40 w-40 text-ink-foreground/10" />
          <Reveal className="md:col-span-6">
            <span className="eyebrow text-clay">{nature.eyebrow}</span>
            <h2 className="display-xl mt-8 text-[clamp(2rem,4.6vw,3.75rem)]">{nature.heading}</h2>
          </Reveal>
          <Reveal delay={160} className="md:col-span-5 md:col-start-8 md:self-end">
            <p className="leading-relaxed text-ink-foreground/65">{nature.body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}