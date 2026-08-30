import Link from "next/link";
import { ArrowDown, FileText } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] dark:opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--accent) 22%, transparent) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(70%_50%_at_50%_0%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="mx-auto max-w-5xl px-5 pb-16 pt-24 sm:pt-32">
        <Reveal>
          <p className="mb-4 font-mono text-sm text-accent">
            Hi, my name is
          </p>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {site.name}
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-muted sm:text-5xl">
            {site.role}
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {site.tagline}
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              View my work <ArrowDown size={16} />
            </Link>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-foreground/40"
            >
              <FileText size={16} /> Résumé
            </a>
          </div>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-8 flex gap-5 text-sm text-muted">
            {site.socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
