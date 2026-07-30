import { Link } from "@tanstack/react-router";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5">
      <span
        className={`grid size-9 place-items-center rounded-xl ${
          inverted ? "bg-teal text-teal-foreground" : "bg-primary text-primary-foreground"
        }`}
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
          <path
            d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4.6 3.5a.6.6 0 0 1-.96-.48V6.5Z"
            fill="currentColor"
            opacity="0.95"
          />
          <path
            d="M12 7.2v5.4M9.3 9.9h5.4"
            stroke="var(--background)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="font-display text-xl font-semibold tracking-tight">Carely</span>
    </Link>
  );
}