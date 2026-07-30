import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";

const RECOVERY = 0.8;
const fmt = (n: number) => new Intl.NumberFormat("en-US").format(Math.round(n));

export function RoiCalculator() {
  const [perDay, setPerDay] = useState(40);
  const [noShow, setNoShow] = useState(12);
  const [margin, setMargin] = useState(4000);

  const perMonth = perDay * 26;
  const missed = (perMonth * noShow) / 100;
  const recovered = missed * RECOVERY;
  const revenue = recovered * margin;

  return (
    <Section id="roi">
      <SectionHeading
        eyebrow="ROI in numbers"
        title="Plug in your numbers. See what you recover."
        subtitle="Most clinics pay back Carely in the first month, just from avoided no-shows."
      />

      <Reveal className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-7 shadow-card sm:p-9">
          <SliderRow
            label="Appointments per day"
            value={perDay}
            display={fmt(perDay)}
            min={10}
            max={200}
            step={5}
            minLabel="10"
            maxLabel="200"
            onChange={setPerDay}
          />
          <SliderRow
            label="Current no-shows"
            value={noShow}
            display={`${noShow}%`}
            min={3}
            max={35}
            step={1}
            minLabel="3%"
            maxLabel="35%"
            onChange={setNoShow}
          />
          <SliderRow
            label="Average margin per visit"
            value={margin}
            display={`PKR ${fmt(margin)}`}
            min={1000}
            max={25000}
            step={500}
            minLabel="PKR 1,000"
            maxLabel="PKR 25,000"
            onChange={setMargin}
          />
          <p className="mt-8 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
            Assumption: Carely reduces no-shows by <strong className="text-foreground">80%</strong>{" "}
            (basis: measured results at a real customer after 3 months).
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-7 shadow-card sm:p-9">
          <p className="eyebrow text-teal">You could recover</p>
          <p className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            ~PKR {fmt(revenue)}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">per month, in revenue lost today</p>

          <dl className="mt-9 space-y-0">
            <Row label="Appts/month" value={`${fmt(perMonth)}`} />
            <Row label="No-shows today" value={`${fmt(missed)} appts/month`} />
            <Row
              label="Appts recovered with Carely"
              value={`${fmt(recovered)} appts/month`}
              highlight
            />
          </dl>

          <Button asChild variant="tealSolid" size="pill" className="mt-9 w-full">
            <Link to="/contact">Book a demo</Link>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}

function Row({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border py-4">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd
        className={`text-sm font-semibold ${highlight ? "text-teal" : "text-foreground"}`}
      >
        {value}
      </dd>
    </div>
  );
}

function SliderRow({
  label,
  value,
  display,
  min,
  max,
  step,
  minLabel,
  maxLabel,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  minLabel: string;
  maxLabel: string;
  onChange: (v: number) => void;
}) {
  return (
    <div className="mb-9 last:mb-0">
      <div className="flex items-end justify-between gap-4">
        <label className="text-sm text-foreground">{label}</label>
        <span className="font-display text-xl font-semibold text-teal">{display}</span>
      </div>
      <Slider
        className="mt-4"
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(v) => onChange(v[0])}
        aria-label={label}
      />
      <div className="mt-2 flex justify-between font-mono text-[11px] text-muted-foreground">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}