import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";

const tabs = [
  {
    key: "dental",
    label: "Dental",
    headline: "Fill the chair, keep the recall list moving",
    points: [
      "Six-month cleaning recalls sent automatically to past patients",
      "Treatment plan follow-ups for patients who never came back",
      "Emergency toothache triage routed to the on-call dentist",
    ],
  },
  {
    key: "physio",
    label: "Physiotherapy",
    headline: "Sessions are a series — Carely keeps the series intact",
    points: [
      "Books the whole treatment block, not just the first session",
      "Reminds patients before each session and reschedules missed ones",
      "Flags patients who drop off mid-programme for a staff call",
    ],
  },
  {
    key: "aesthetic",
    label: "Aesthetic medicine",
    headline: "Answer price and procedure questions without losing the lead",
    points: [
      "Handles the first round of pricing and procedure questions instantly",
      "Books consultations while the patient is still interested",
      "Post-treatment check-ins and top-up reminders on schedule",
    ],
  },
  {
    key: "general",
    label: "General clinics",
    headline: "One number, many doctors, no confusion",
    points: [
      "Routes patients to the right doctor and branch by symptom or request",
      "Handles timings, fees, location and parking questions on repeat",
      "Escalates anything clinical to your staff straight away",
    ],
  },
];

export function Solutions() {
  const [active, setActive] = useState(tabs[0].key);
  const current = tabs.find((t) => t.key === active)!;

  return (
    <Section id="solutions" tone="surface">
      <SectionHeading
        eyebrow="By clinic type"
        title="Set up for the way your speciality actually runs"
        subtitle="Same assistant, different playbook — tuned to the questions your patients really ask."
      />
      <Reveal className="mt-12">
        <div className="flex flex-wrap justify-center gap-2" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={active === t.key}
              onClick={() => setActive(t.key)}
              className={`rounded-xl border px-5 py-2.5 text-sm transition-colors ${
                active === t.key
                  ? "border-teal bg-teal/12 font-medium text-teal"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-card sm:p-10">
          <span className="eyebrow text-teal">{current.label}</span>
          <h3 className="mt-3 text-2xl font-semibold text-foreground sm:text-[1.75rem]">
            {current.headline}
          </h3>
          <ul className="mt-6 space-y-3">
            {current.points.map((p) => (
              <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-teal" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}