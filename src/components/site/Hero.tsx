import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { CalendarCheck, Check, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

type Msg = { from: "patient" | "carely"; text: string; time: string };

const script: Msg[] = [
  { from: "patient", text: "Assalam o alaikum, do you have a slot for a root canal this week?", time: "9:41 PM" },
  {
    from: "carely",
    text: "Wa alaikum assalam! Yes — Dr. Ayesha has Wed 4:30 PM or Thu 11:00 AM at DHA Phase 5. Which suits you?",
    time: "9:41 PM",
  },
  { from: "patient", text: "Wednesday 4:30 works.", time: "9:42 PM" },
  {
    from: "carely",
    text: "Booked. Wed 12 Aug, 4:30 PM with Dr. Ayesha. I'll remind you 24 hours before, and again on the day.",
    time: "9:42 PM",
  },
];

export function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = script.map((_, i) =>
      setTimeout(() => setStep(i + 1), 700 + i * 1400),
    );
    const loop = setInterval(() => {
      setStep(0);
      script.forEach((_, i) => setTimeout(() => setStep(i + 1), 700 + i * 1400));
    }, 12000);
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(loop);
    };
  }, []);

  const booked = step >= 4;

  return (
    <section className="bg-hero-glow relative overflow-hidden px-4 pt-12 pb-16 sm:px-6 md:pt-20 md:pb-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-teal">
            <span className="size-1.5 rounded-full bg-teal" />
            WhatsApp front desk for clinics
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.6rem]">
            Your clinic replies in seconds. Even at 2 AM.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Carely answers patient messages on your existing WhatsApp number, books and reschedules
            appointments, and hands over to your staff the moment a human is needed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="cta" size="pill">
              <Link to="/contact">Book a free demo</Link>
            </Button>
            <Button asChild variant="outlineTeal" size="pill">
              <a href="#how-it-works">See how it works</a>
            </Button>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6">
            {[
              ["< 5 sec", "average reply"],
              ["80%", "fewer no-shows"],
              ["24/7", "always answering"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl font-semibold text-foreground">{v}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-border bg-card p-4 shadow-soft sm:p-5">
            <div className="flex items-center gap-3 border-b border-border pb-3">
              <div className="grid size-9 shrink-0 place-items-center rounded-full bg-[#25D366]/15 text-[#128C7E]">
                <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.6 14.1c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .7.5l.9 2.1c.1.2.1.4 0 .6l-.4.5c-.1.2-.3.3-.1.6.5.9 1.1 1.5 1.8 2 .4.3.8.5 1.2.7.2.1.4.1.6-.1l.7-.9c.2-.2.3-.2.6-.1l2 .9c.3.1.5.2.5.4.1.2.1.9-.2 1.4Z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-foreground">Smile Studio Dental</p>
                <p className="text-xs text-teal">answered by Carely · online</p>
              </div>
            </div>

            <div className="mt-4 flex min-h-[300px] flex-col justify-end gap-3">
              {script.slice(0, step).map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.from === "patient" ? "justify-start" : "justify-end"}`}
                  style={{ animation: "fadeUp .45s cubic-bezier(.16,1,.3,1) both" }}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[0.9rem] leading-relaxed ${
                      m.from === "patient"
                        ? "rounded-tl-sm bg-muted text-foreground"
                        : "rounded-tr-sm bg-[#25D366]/18 text-foreground"
                    }`}
                  >
                    {m.text}
                    <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
                      {m.time}
                      {m.from === "carely" && <CheckCheck className="size-3 text-teal" />}
                    </span>
                  </div>
                </div>
              ))}
              {step < script.length && (
                <div className="flex gap-1 pl-2">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="size-1.5 animate-bounce rounded-full bg-muted-foreground/50"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-border bg-card p-5 shadow-card sm:absolute sm:-bottom-8 sm:-left-6 sm:mt-0 sm:w-[19rem]">
            <div className="flex items-center justify-between">
              <span className="eyebrow text-muted-foreground">Clinic calendar</span>
              <CalendarCheck
                className={`size-4 transition-colors ${booked ? "text-teal" : "text-muted-foreground/50"}`}
              />
            </div>
            <div className="mt-4 space-y-2.5">
              {[
                { t: "3:00 PM", n: "Hamza Iqbal", filled: true },
                { t: "3:45 PM", n: "Sana Rauf", filled: true },
                {
                  t: "4:30 PM",
                  n: booked ? "Bilal Ahmed · Root canal" : "Open slot",
                  filled: booked,
                  highlight: true,
                },
              ].map((row) => (
                <div
                  key={row.t}
                  className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 transition-all duration-500 ${
                    row.highlight && row.filled
                      ? "border-teal/40 bg-teal/10"
                      : row.highlight
                        ? "border-dashed border-border bg-transparent"
                        : "border-border bg-surface"
                  }`}
                >
                  <span className="w-14 shrink-0 font-mono text-[11px] text-muted-foreground">
                    {row.t}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm text-foreground">{row.n}</span>
                  {row.filled && <Check className="size-3.5 shrink-0 text-teal" />}
                </div>
              ))}
            </div>
            <p
              className={`mt-4 text-xs transition-opacity duration-500 ${booked ? "text-teal opacity-100" : "opacity-0"}`}
            >
              Confirmed by Carely · staff notified
            </p>
          </div>
        </div>
      </div>

      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}