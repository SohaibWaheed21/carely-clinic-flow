import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

export function Section({
  id,
  children,
  className,
  tone = "base",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "base" | "surface";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 px-4 py-16 sm:px-6 md:py-24 lg:py-28",
        tone === "surface" && "bg-surface",
        className,
      )}
    >
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <span className="eyebrow inline-block rounded-full border border-border bg-card px-3 py-1 text-teal">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-semibold text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}