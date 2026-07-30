import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";

const quotes = [
  {
    quote:
      "No-shows used to sit around 14%. Three months in we're under 4%, and nobody at the front desk is chasing anyone on the phone.",
    name: "Dr. Ayesha Siddiqui",
    clinic: "Smile Studio Dental, DHA Phase 5",
  },
  {
    quote:
      "Patients message at 11 at night and get a real answer. We used to find those messages the next afternoon — usually after they'd booked elsewhere.",
    name: "Hassan Raza",
    clinic: "Gulberg Physio Care",
  },
  {
    quote:
      "Our receptionist now handles walk-ins and payments instead of the same six WhatsApp questions all day.",
    name: "Dr. Nida Farooq",
    clinic: "Aura Aesthetics, Johar Town",
  },
];

export function Testimonials() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Results"
        title="What clinics notice in the first month"
        subtitle="Less phone tag, fewer empty slots, and a front desk that can breathe."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {quotes.map((q, i) => (
          <Reveal key={q.name} as="article" delay={i * 90}>
            <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-card">
              <blockquote className="text-[0.95rem] leading-relaxed text-foreground">
                “{q.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <p className="text-sm font-semibold text-foreground">{q.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{q.clinic}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}