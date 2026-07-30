import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              WhatsApp front desk for clinics. Answers patients, books appointments, and keeps your
              calendar full — quietly, all day.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href="https://wa.me/923000000000"
                className="grid size-9 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:text-teal"
                aria-label="WhatsApp"
              >
                <MessageCircle className="size-4" />
              </a>
              <a
                href="mailto:hello@carely.pk"
                className="grid size-9 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:text-teal"
                aria-label="Email"
              >
                <Mail className="size-4" />
              </a>
              <a
                href="tel:+924200000000"
                className="grid size-9 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:text-teal"
                aria-label="Phone"
              >
                <Phone className="size-4" />
              </a>
            </div>
          </div>

          <FooterCol
            title="Product"
            items={[
              { label: "Features", href: "/#product" },
              { label: "How it works", href: "/#how-it-works" },
              { label: "Dashboard", href: "/#dashboard" },
              { label: "ROI calculator", href: "/#roi" },
            ]}
          />
          <FooterCol
            title="Solutions"
            items={[
              { label: "Dental", href: "/#solutions" },
              { label: "Physiotherapy", href: "/#solutions" },
              { label: "Aesthetic medicine", href: "/#solutions" },
              { label: "General clinics", href: "/#solutions" },
            ]}
          />
          <div>
            <h3 className="eyebrow text-muted-foreground">Company</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-teal">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-teal">
                  Contact
                </Link>
              </li>
              <li>
                <a href="/#security" className="text-muted-foreground hover:text-teal">
                  Security
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-muted-foreground hover:text-teal">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Carely. Built in Lahore, Pakistan.</p>
          <p>Official WhatsApp Business API partner stack.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="eyebrow text-muted-foreground">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.label}>
            <a href={i.href} className="text-muted-foreground hover:text-teal">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}