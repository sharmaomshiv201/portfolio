"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    const label = next ? "dark mode" : "light mode";

    // This site is designed for dark mode — make switching a deliberate choice.
    if (
      !window.confirm(
        `Switch to ${label}? This portfolio is designed to be viewed in dark mode.`
      )
    )
      return;
    if (
      !window.confirm(`Are you sure? This will switch the whole site to ${label}.`)
    )
      return;

    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted transition-colors hover:text-foreground hover:border-foreground/30"
    >
      {mounted && dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
