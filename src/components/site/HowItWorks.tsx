import { BellRing, CalendarCheck, MessageSquareText, UsersRound } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";

const steps = [
  {
    icon: MessageSquareText,
    title: "Patient messages your number",
    body: "Same WhatsApp number on your signboard. Carely picks up in under five seconds.",
  },
  {
    icon: CalendarCheck,
    title: "Carely finds a real slot",
    body: "It reads your live schedule, offers two or three options, and confirms the one the patient picks.",
  },
  {
    icon: UsersRound,
    title: "Your staff is notified",
    body: "The booking lands in the dashboard and your team gets a ping with the full conversation.",
  },
  {
    icon: BellRing,
    title: "Reminders keep the seat filled",
    body: "Confirmation now, reminder 24 hours out, nudge on the day. Cancellations reopen the slot.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="surface">
      <SectionHeading
        eyebrow="How it works"
        title="From message to confirmed appointment"
        subtitle="Four steps, no app for the patient to download, no change to how your clinic already works."
      />
      <ol className="relative mt-16 grid gap-8 md:grid-cols-4 md:gap-6">
        <div
          className="absolute top-6 right-6 left-6 hidden h-px bg-border md:block"
          aria-hidden="true"
        />
        {steps.map((s, i) => (
          <Reveal key={s.title} as="li" delay={i * 100} className="relative">
            <span className="relative z-10 grid size-12 place-items-center rounded-full border border-border bg-card font-mono text-sm font-medium text-teal shadow-card">
              0{i + 1}
            </span>
            <s.icon className="mt-6 size-5 text-teal" />
            <h3 className="mt-3 text-base font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}