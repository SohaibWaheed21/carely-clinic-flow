import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function apply(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("carely-theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("carely-theme") as "light" | "dark" | null;
    const initial =
      stored ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    apply(initial);
  }, []);

  return (
    <button
      type="button"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        apply(next);
      }}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:text-teal"
    >
      {theme === "dark" ? <Moon className="size-[18px]" /> : <Sun className="size-[18px]" />}
    </button>
  );
}