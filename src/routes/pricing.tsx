import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { FAQ } from "@/components/site/FAQ";
import { FinalCta } from "@/components/site/FinalCta";

const title = "Pricing — Carely for clinics";
const description =
  "Carely is quoted per clinic based on branches, doctors and message volume. Book a call for a fixed monthly price.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Pricing,
});

const included = [
  "Your existing WhatsApp Business number",
  "24/7 replies in English, Urdu and Roman Urdu",
  "Booking, rescheduling and cancellations",
  "Confirmation and no-show reminders",
  "Human handoff to your staff",
  "Multi-doctor and multi-branch routing",
  "Clinic dashboard with conversations and analytics",
  "Setup, training and a supervised test week",
];

function Pricing() {
  return (
    <>
      <Section className="pt-14 md:pt-20">
        <SectionHeading
          eyebrow="Pricing"
          title="One monthly price, quoted for your clinic"
          subtitle="Clinics differ — two doctors and one branch is not the same as twelve doctors across three locations. We quote a flat monthly fee after a short call, with no per-message surprises."
        />

        <Reveal className="mx-auto mt-14 max-w-4xl">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-soft md:grid-cols-[1.1fr_1fr]">
            <div className="bg-card p-8 sm:p-10">
              <span className="eyebrow text-teal">Everything included</span>
              <ul className="mt-6 grid gap-3">
                {included.map((i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-teal" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center bg-surface p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-foreground">Get your quote</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Tell us your branches, doctors and rough appointment volume. You'll have a fixed
                monthly number the same day, plus a one-time setup fee.
              </p>
              <Button asChild variant="cta" size="pill" className="mt-7">
                <Link to="/contact">Book a call for pricing</Link>
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                Month-to-month. No long contract, cancel with 30 days' notice.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>
      <FAQ />
      <FinalCta />
    </>
  );
}