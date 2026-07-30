import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const types = ["Dental", "Physiotherapy", "Aesthetic medicine", "General clinic", "Other"];

export function DemoForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl border border-teal/40 bg-teal/8 p-9 text-center shadow-card">
        <CheckCircle2 className="mx-auto size-9 text-teal" />
        <h2 className="mt-4 text-2xl font-semibold text-foreground">Request received</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thanks — we'll message you on WhatsApp within one working day to set up your demo.
        </p>
        <Button variant="outlineTeal" size="pillSm" className="mt-6" onClick={() => setSent(false)}>
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-2xl border border-border bg-card p-7 shadow-card sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Your name" placeholder="Dr. Ayesha Siddiqui" />
        <Field id="clinic" label="Clinic name" placeholder="Smile Studio Dental" />
        <Field id="phone" label="WhatsApp number" placeholder="+92 300 1234567" type="tel" />
        <Field id="email" label="Email" placeholder="you@clinic.pk" type="email" />
        <div className="sm:col-span-2">
          <Label htmlFor="type" className="text-sm">
            Clinic type
          </Label>
          <select
            id="type"
            name="type"
            defaultValue={types[0]}
            className="mt-2 h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
          >
            {types.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message" className="text-sm">
            Anything we should know?
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Two branches, four doctors, roughly 60 appointments a day."
            className="mt-2 rounded-xl"
          />
        </div>
      </div>
      <Button type="submit" variant="cta" size="pill" className="mt-7 w-full sm:w-auto">
        Book a free demo
      </Button>
      <p className="mt-4 text-xs text-muted-foreground">
        We reply on WhatsApp within one working day. No sales calls out of the blue.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm">
        {label}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 h-11 rounded-xl"
      />
    </div>
  );
}