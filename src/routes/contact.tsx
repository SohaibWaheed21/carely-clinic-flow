import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/site/Section";
import { DemoForm } from "@/components/site/DemoForm";

const title = "Book a demo — Carely";
const description =
  "Book a 20-minute Carely demo with your clinic's own timings and services. We reply on WhatsApp within one working day.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Section className="pt-14 md:pt-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow inline-block rounded-full border border-border bg-card px-3 py-1 text-teal">
            Book a demo
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl">
            See Carely handle your clinic's messages
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Twenty minutes, set up with your real timings, doctors and services. You'll message the
            assistant yourself and see exactly what your patients would get.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              { icon: MessageCircle, label: "WhatsApp", value: "+92 300 000 0000" },
              { icon: Mail, label: "Email", value: "hello@carely.pk" },
              { icon: MapPin, label: "Office", value: "Gulberg III, Lahore" },
              { icon: Clock, label: "Hours", value: "Mon–Sat, 10 AM – 7 PM PKT" },
            ].map((c) => (
              <li key={c.label} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-teal/12 text-teal">
                  <c.icon className="size-4" />
                </span>
                <div className="min-w-0">
                  <p className="eyebrow text-muted-foreground">{c.label}</p>
                  <p className="mt-1 text-sm text-foreground">{c.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <DemoForm />
        </Reveal>
      </div>
    </Section>
  );
}