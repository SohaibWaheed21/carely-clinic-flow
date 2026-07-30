import { ArrowDownRight, ArrowUpRight, Search } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";

const conversations = [
  { name: "Bilal Ahmed", last: "Wednesday 4:30 works.", tag: "Booked", time: "2m" },
  { name: "Hina Malik", last: "Can I move to Friday?", tag: "Rescheduled", time: "18m" },
  { name: "Usman Tariq", last: "Is Dr. Ayesha available?", tag: "Handed to staff", time: "1h" },
  { name: "Rabia Noor", last: "Thanks, see you then!", tag: "Booked", time: "3h" },
];

const appointments = [
  { t: "Today 3:00 PM", n: "Hamza Iqbal", d: "Dr. Ayesha · Cleaning" },
  { t: "Today 4:30 PM", n: "Bilal Ahmed", d: "Dr. Ayesha · Root canal" },
  { t: "Tomorrow 11:00 AM", n: "Sana Rauf", d: "Dr. Kamran · Consult" },
];

const stats = [
  { label: "Messages handled", value: "4,182", delta: "+18%", up: true },
  { label: "Appointments booked", value: "612", delta: "+24%", up: true },
  { label: "No-show rate", value: "3.1%", delta: "−7.4pt", up: false },
];

export function DashboardPreview() {
  return (
    <Section id="dashboard">
      <SectionHeading
        eyebrow="Clinic side"
        title="Your team sees everything, in one place"
        subtitle="Every conversation, every booking, and the numbers that tell you whether it's working."
      />
      <Reveal className="mt-14">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          <div className="flex items-center gap-3 border-b border-border bg-surface px-4 py-3">
            <div className="flex gap-1.5">
              {["#e5675f", "#e8b64c", "#5fbf7d"].map((c) => (
                <span key={c} className="size-2.5 rounded-full" style={{ backgroundColor: c }} />
              ))}
            </div>
            <div className="mx-auto flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1 font-mono text-[11px] text-muted-foreground">
              <Search className="size-3" /> app.carely.pk/inbox
            </div>
          </div>

          <div className="grid gap-px bg-border lg:grid-cols-[1.3fr_1fr]">
            <div className="bg-card p-5 sm:p-7">
              <h3 className="text-sm font-semibold text-foreground">Conversations</h3>
              <ul className="mt-4 space-y-2">
                {conversations.map((c) => (
                  <li
                    key={c.name}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-foreground">{c.name}</p>
                      <p className="truncate text-xs text-muted-foreground">{c.last}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      <span
                        className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase ${
                          c.tag === "Handed to staff"
                            ? "bg-amber/20 text-amber-foreground dark:text-amber"
                            : "bg-teal/15 text-teal"
                        }`}
                      >
                        {c.tag}
                      </span>
                      <span className="font-mono text-[11px] text-muted-foreground">{c.time}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-surface p-4">
                    <p className="font-display text-2xl font-semibold text-foreground">{s.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                    <p
                      className={`mt-2 inline-flex items-center gap-1 font-mono text-[11px] ${s.up ? "text-teal" : "text-teal"}`}
                    >
                      {s.up ? (
                        <ArrowUpRight className="size-3" />
                      ) : (
                        <ArrowDownRight className="size-3" />
                      )}
                      {s.delta}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-5 sm:p-7">
              <h3 className="text-sm font-semibold text-foreground">Upcoming appointments</h3>
              <ul className="mt-4 space-y-2">
                {appointments.map((a) => (
                  <li key={a.n} className="rounded-xl border border-border bg-surface px-4 py-3">
                    <p className="font-mono text-[11px] text-teal">{a.t}</p>
                    <p className="mt-1 text-sm font-medium text-foreground">{a.n}</p>
                    <p className="text-xs text-muted-foreground">{a.d}</p>
                  </li>
                ))}
              </ul>

              <h3 className="mt-7 text-sm font-semibold text-foreground">Messages this week</h3>
              <div className="mt-4 flex h-28 items-end gap-2">
                {[42, 58, 51, 74, 66, 88, 79].map((h, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-md bg-teal/70"
                      style={{ height: `${h}%` }}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {["M", "T", "W", "T", "F", "S", "S"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}