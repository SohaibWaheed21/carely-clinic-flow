import { BadgeCheck, Lock, PhoneCall } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";

const items = [
  {
    icon: BadgeCheck,
    title: "Official WhatsApp Business API",
    body: "Carely runs on Meta's approved API — no unofficial workarounds, no screen-scraping, no ban risk from automation.",
  },
  {
    icon: Lock,
    title: "Patient data stays private",
    body: "Conversations are encrypted in transit and at rest, access is limited to your clinic's staff accounts, and nothing is sold or shared.",
  },
  {
    icon: PhoneCall,
    title: "Your number stays yours",
    body: "We connect your existing clinic number. If you ever leave, the number, the history and the patients remain with you.",
  },
];

export function Security() {
  return (
    <Section id="security" tone="surface">
      <SectionHeading
        eyebrow="Trust & security"
        title="Built to be safe with patients' messages"
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 90}>
            <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-card">
              <span className="grid size-11 place-items-center rounded-xl bg-primary/8 text-teal">
                <it.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}