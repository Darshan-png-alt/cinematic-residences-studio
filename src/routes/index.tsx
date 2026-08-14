import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { IntroSection } from "@/components/sections/IntroSection";
import { ConceptSection } from "@/components/sections/ConceptSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { LifestyleSection } from "@/components/sections/LifestyleSection";
import { NatureSection } from "@/components/sections/NatureSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { ResidencesSection } from "@/components/sections/ResidencesSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { EnquirySection } from "@/components/sections/EnquirySection";

const title = "Maraya — Residences in dialogue with light";
const description =
  "A conceptual residential development: architecture, landscape and residences presented as one cinematic architectural narrative.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <SiteNav />
      <Hero />
      <IntroSection />
      <ConceptSection />
      <ArchitectureSection />
      <LifestyleSection />
      <NatureSection />
      <CommunitySection />
      <ResidencesSection />
      <LocationSection />
      <EnquirySection />
    </main>
  );
}
