import { Reveal } from "@/components/Reveal";

const clinics = [
  "Smile Studio Dental",
  "Gulberg Physio Care",
  "Aura Aesthetics",
  "Model Town Family Clinic",
  "OrthoLine DHA",
];

export function TrustBar() {
  return (
    <div className="border-y border-border bg-surface px-4 py-10 sm:px-6">
      <Reveal className="mx-auto max-w-[1200px]">
        <p className="eyebrow text-center text-muted-foreground">Trusted by clinics in Lahore</p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clinics.map((c) => (
            <li
              key={c}
              className="font-display text-base font-semibold text-foreground/45 sm:text-lg"
            >
              {c}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}