/**
 * Original decorative line-art: botanical + geometric motifs.
 * Purely presentational; inherits currentColor.
 */

export function BotanicalBranch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 320"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="0.9"
    >
      <path d="M100 320V20" strokeLinecap="round" />
      {Array.from({ length: 8 }).map((_, i) => {
        const y = 46 + i * 34;
        const s = 1 - i * 0.08;
        const w = 52 * s;
        const h = 22 * s;
        return (
          <g key={i}>
            <path
              d={`M100 ${y} C ${100 - w * 0.5} ${y - h * 0.55}, ${100 - w} ${y + h * 0.2}, ${100 - w * 0.15} ${y + h} C ${100 - w * 0.35} ${y + h * 0.45}, ${100 - w * 0.2} ${y + h * 0.2}, 100 ${y}`}
            />
            <path
              d={`M100 ${y + 17} C ${100 + w * 0.5} ${y + 17 - h * 0.55}, ${100 + w} ${y + 17 + h * 0.2}, ${100 + w * 0.15} ${y + 17 + h} C ${100 + w * 0.35} ${y + 17 + h * 0.45}, ${100 + w * 0.2} ${y + 17 + h * 0.2}, 100 ${y + 17}`}
            />
          </g>
        );
      })}
      <circle cx="100" cy="20" r="5" />
    </svg>
  );
}

export function ArchArc({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="0.8"
    >
      <circle cx="200" cy="200" r="199" />
      <circle cx="200" cy="200" r="150" />
      <circle cx="200" cy="200" r="96" strokeDasharray="2 8" />
      <path d="M40 200h320M200 40v320" strokeDasharray="2 10" />
    </svg>
  );
}

export function FloralMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="1"
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="60"
          cy="36"
          rx="12"
          ry="26"
          transform={`rotate(${i * 45} 60 60)`}
        />
      ))}
      <circle cx="60" cy="60" r="4" />
    </svg>
  );
}

/** Placeholder wordmark logo — replace with the final identity. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className} stroke="currentColor" strokeWidth="1.1">
      <path d="M6 34V10l14 12 14-12v24" strokeLinejoin="round" />
      <path d="M6 34h28" strokeDasharray="2 5" />
    </svg>
  );
}