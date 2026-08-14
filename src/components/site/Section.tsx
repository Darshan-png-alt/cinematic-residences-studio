import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  children,
  className,
  tone = "light",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark" | "sand";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 overflow-hidden px-6 py-28 md:px-10 md:py-40",
        tone === "dark" && "bg-ink text-ink-foreground",
        tone === "sand" && "bg-secondary",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1500px]">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  heading,
  index,
  className,
}: {
  eyebrow: string;
  heading: string;
  index?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <div className="flex items-center gap-4">
        {index ? <span className="eyebrow text-clay">{index}</span> : null}
        <span className="eyebrow">{eyebrow}</span>
        <span className="h-px flex-1 bg-current opacity-15" />
      </div>
      <h2 className="display-xl mt-8 text-[clamp(2.25rem,5vw,4.25rem)]">{heading}</h2>
    </Reveal>
  );
}