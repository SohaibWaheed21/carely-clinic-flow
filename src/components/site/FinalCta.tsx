import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section className="bg-primary px-4 py-20 sm:px-6 md:py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold text-primary-foreground sm:text-[2.75rem] sm:leading-[1.12]">
          See it answer your patients, on your number
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/70">
          A 20-minute demo with your own clinic's timings and services. No commitment, no setup fee
          to look.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="cta" size="pill">
            <Link to="/contact">Book a free demo</Link>
          </Button>
          <Button
            asChild
            size="pill"
            variant="ghost"
            className="border border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link to="/pricing">See pricing</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}