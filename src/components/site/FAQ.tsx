import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";

const faqs = [
  {
    q: "Do patients know they're talking to an assistant?",
    a: "Yes. Carely introduces itself as your clinic's assistant on the first message and hands over to a person whenever the patient asks. We don't pretend to be your receptionist.",
  },
  {
    q: "How hard is setup?",
    a: "You share your timings, doctors, services and common answers. We connect your WhatsApp Business number, load your schedule, and run a test week with your staff watching every reply.",
  },
  {
    q: "Can WhatsApp ban our number for automation?",
    a: "No. Carely runs on the official WhatsApp Business API, which is built for exactly this. Unofficial bots that automate the consumer app are the ones that get blocked.",
  },
  {
    q: "What happens with an unexpected or clinical question?",
    a: "Carely doesn't guess. Anything medical, sensitive or outside its scope is passed to your staff with the conversation attached, and the patient is told a team member will reply.",
  },
  {
    q: "How long until we're live?",
    a: "Most clinics go live within five to seven working days, including WhatsApp Business verification and a supervised test period.",
  },
  {
    q: "Does it work in Urdu and Roman Urdu?",
    a: "Yes. Carely replies in English, Urdu and Roman Urdu, and matches whatever the patient writes in.",
  },
];

export function FAQ() {
  return (
    <Section id="faq">
      <SectionHeading eyebrow="FAQ" title="Questions clinics ask before signing up" />
      <Reveal className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-6 shadow-card"
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline data-[state=open]:text-teal">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}