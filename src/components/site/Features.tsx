import {
  BellRing,
  CalendarClock,
  Clock4,
  HeartPulse,
  Network,
  UserRoundCheck,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";

const features = [
  {
    icon: Clock4,
    title: "Instant replies, 24/7",
    body: "Patients get an answer in seconds — after hours, on Sundays, and while your receptionist is on another call.",
  },
  {
    icon: CalendarClock,
    title: "Booking and rescheduling",
    body: "Carely checks real availability, books the slot, and moves it when a patient needs a different time.",
  },
  {
    icon: BellRing,
    title: "No-show reminders",
    body: "Automatic confirmations and timed reminders with one-tap confirm or cancel, so slots free up early.",
  },
  {
    icon: UserRoundCheck,
    title: "Human handoff",
    body: "Anything clinical, sensitive, or unusual is escalated to your staff with the full conversation attached.",
  },
  {
    icon: Network,
    title: "Multi-doctor, multi-branch",
    body: "Route each patient to the right doctor, speciality, and branch using your own rules and schedules.",
  },
  {
    icon: HeartPulse,
    title: "Recall and follow-up",
    body: "Six-month cleanings, post-op check-ins, and treatment plan follow-ups go out on their own.",
  },
];

export function Features() {
  return (
    <Section id="product">
      <SectionHeading
        eyebrow="What it does"
        title="A front desk that never goes home"
        subtitle="Everything a receptionist handles over WhatsApp, handled the same way — just faster and without the queue."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 70} as="article">
            <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-card transition-transform duration-300 hover:-translate-y-1">
              <span className="grid size-11 place-items-center rounded-xl bg-teal/12 text-teal">
                <f.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}