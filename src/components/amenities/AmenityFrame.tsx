import { cn } from "@/lib/utils";
import { FloralMark } from "@/components/site/Ornaments";
import type { AmenityImage } from "@/content/amenities";

const ratioClass: Record<AmenityImage["ratio"], string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[16/10]",
  wide: "aspect-[16/7]",
  square: "aspect-square",
};

/**
 * Image slot. Renders the supplied asset when `src` is set, otherwise a quiet
 * placeholder in the STHITHA palette — so real photography can be dropped in
 * later without touching any layout.
 */
export function AmenityFrame({
  image,
  className,
  priority,
}: {
  image: AmenityImage;
  className?: string;
  priority?: boolean;
}) {
  if (image.src) {
    return (
      <img
        src={image.src}
        alt={image.alt}
        loading={priority ? "eager" : "lazy"}
        className={cn("w-full object-cover", ratioClass[image.ratio], className)}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={image.alt}
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden border border-border bg-secondary",
        ratioClass[image.ratio],
        className,
      )}
    >
      <FloralMark className="h-12 w-12 text-clay/40" />
      <span className="eyebrow absolute bottom-4 left-4 right-4 truncate text-clay/60">Image</span>
    </div>
  );
}
