import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

const sectionLinks = [
  { id: "product", label: "Product" },
  { id: "how-it-works", label: "How it works" },
  { id: "solutions", label: "Solutions" },
  { id: "faq", label: "FAQ" },
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const els = sectionLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [isHome]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {sectionLinks.map((l) => (
            <a
              key={l.id}
              href={isHome ? `#${l.id}` : `/#${l.id}`}
              className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                isHome && active === l.id
                  ? "text-teal"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/pricing"
            className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-teal" }}
          >
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="cta" size="pillSm" className="hidden sm:inline-flex">
            <Link to="/contact">Book a demo</Link>
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card lg:hidden"
          >
            {open ? <X className="size-[18px]" /> : <Menu className="size-[18px]" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-[1200px] flex-col px-4 py-3 sm:px-6">
            {sectionLinks.map((l) => (
              <a
                key={l.id}
                href={isHome ? `#${l.id}` : `/#${l.id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <Link to="/pricing" onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 text-sm text-muted-foreground">
              Pricing
            </Link>
            <Button asChild variant="cta" size="pillSm" className="mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Book a demo
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}