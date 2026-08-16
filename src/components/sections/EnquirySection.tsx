import { useState } from "react";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { BotanicalBranch, LogoMark } from "@/components/site/Ornaments";
import { enquiry, project } from "@/content/project";

/** Placeholder enquiry form — wire to a backend later. */
export function EnquirySection() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="enquiry" tone="sand">
      <BotanicalBranch className="pointer-events-none absolute -right-8 bottom-0 h-[60%] scale-x-[-1] text-clay/25" />
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="eyebrow text-clay">{enquiry.eyebrow}</span>
            <h2 className="display-xl mt-8 text-[clamp(2.5rem,5.6vw,4.75rem)]">{enquiry.heading}</h2>
            <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">{enquiry.body}</p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-12 space-y-2 font-display text-xl">
              <p>{project.phone}</p>
              <p>{project.email}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="lg:col-span-6 lg:col-start-7">
          <form
            className="space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {[
              { id: "name", label: "Full name", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "phone", label: "Telephone", type: "tel" },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="eyebrow" style={{ fontSize: "0.8125rem" }}>
                  {f.label}
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  required={f.id !== "phone"}
                  className="mt-3 w-full border-0 border-b border-border bg-transparent pb-3 font-display text-xl outline-none transition-colors duration-500 focus:border-clay"
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="eyebrow" style={{ fontSize: "0.8125rem" }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="mt-3 w-full resize-none border-0 border-b border-border bg-transparent pb-3 font-display text-xl outline-none transition-colors duration-500 focus:border-clay"
              />
            </div>
            <button
              type="submit"
              className="eyebrow border border-foreground/30 px-10 py-4 text-foreground transition-colors duration-500 hover:bg-foreground hover:text-background"
            >
              {sent ? "Received — thank you" : "Send enquiry"}
            </button>
          </form>
        </Reveal>
      </div>

      <div className="mt-32 flex flex-col items-center gap-6 border-t border-border pt-12 text-center">
        <LogoMark className="h-8 w-8 text-clay" />
        <span className="font-display text-lg tracking-[0.5em]">{project.name}</span>
        <p className="eyebrow">
          {project.descriptor} — placeholder identity, {project.year}
        </p>
      </div>
    </Section>
  );
}