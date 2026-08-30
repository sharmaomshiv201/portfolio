"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";

const sectionIds = navLinks
  .map((l) => l.href.split("#")[1])
  .filter(Boolean) as string[];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        }
        const first = sectionIds.find((id) => visible.has(id));
        if (first) setActiveId(first);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const initials = site.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
        <Link
          href="/"
          className="grid h-9 w-9 place-items-center rounded-lg bg-foreground font-mono text-sm font-bold text-background"
          aria-label={`${site.name}, home`}
        >
          {initials}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => {
            const id = l.href.split("#")[1];
            const active = id === activeId;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "true" : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-foreground/[0.06] text-foreground dark:bg-foreground/[0.08]"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex w-full max-w-[1600px] flex-col px-5 py-2 sm:px-8">
            {navLinks.map((l) => {
              const id = l.href.split("#")[1];
              const active = id === activeId;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "true" : undefined}
                  className={`rounded-md px-2 py-3 text-sm transition-colors ${
                    active ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
