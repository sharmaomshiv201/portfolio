import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* bottom bookend glow — mirrors the hero backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 opacity-40 dark:opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(60% 120% at 50% 100%, color-mix(in oklab, var(--accent) 16%, transparent) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-4 px-5 py-10 text-sm text-muted sm:flex-row sm:px-8 lg:px-12 xl:px-16">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center gap-4">
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
      </div>
    </footer>
  );
}
