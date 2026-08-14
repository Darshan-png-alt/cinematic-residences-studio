import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { LogoMark } from "./Ornaments";
import { nav, project } from "@/content/project";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-700",
        scrolled
          ? "border-b border-border/60 bg-background/80 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-6",
      )}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className={cn(
            "flex items-center gap-3 transition-colors duration-700",
            scrolled ? "text-foreground" : "text-ink-foreground",
          )}
        >
          <LogoMark className="h-7 w-7" />
          <span className="font-display text-lg tracking-[0.4em]">{project.name}</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "eyebrow relative py-1 transition-colors duration-500 hover:text-clay",
                scrolled ? "text-muted-foreground" : "text-ink-foreground/70",
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#enquiry"
            className={cn(
              "eyebrow border px-5 py-2.5 transition-colors duration-500",
              scrolled
                ? "border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
                : "border-ink-foreground/40 text-ink-foreground hover:bg-ink-foreground hover:text-ink",
            )}
          >
            Enquire
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden",
            scrolled ? "text-foreground" : "text-ink-foreground",
          )}
        >
          <span
            className={cn(
              "h-px w-6 bg-current transition-transform duration-500",
              open && "translate-y-[3.5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "h-px w-6 bg-current transition-transform duration-500",
              open && "-translate-y-[3.5px] -rotate-45",
            )}
          />
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-700 lg:hidden",
          open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-5 px-6 py-8">
          {[...nav, { label: "Enquire", href: "#enquiry" }].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="eyebrow text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}