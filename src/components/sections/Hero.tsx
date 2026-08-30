import Link from "next/link";
import { ArrowDown, FileText, MapPin, Mail, Briefcase, Sparkles } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Portrait } from "@/components/Portrait";
import { CopyEmail } from "@/components/CopyEmail";
import { CONTAINER } from "@/components/Section";

const BRAND: Record<string, string> = {
  GitHub:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  LinkedIn:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
};

export function Hero() {
  const current = site.experience[0];

  return (
    <section className="relative overflow-hidden">
      {/* backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] dark:opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(50% 45% at 30% 0%, color-mix(in oklab, var(--accent) 22%, transparent) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(75%_55%_at_35%_0%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div
        className={`${CONTAINER} grid items-center gap-12 pb-16 pt-20 sm:pt-28 lg:grid-cols-[1.55fr_1fr] lg:gap-16 lg:pb-24`}
      >
        {/* left: intro */}
        <div>
          <Reveal>
            <p className="mb-4 font-mono text-sm text-accent">Hi, my name is</p>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl">
              {site.name}
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-muted sm:text-5xl xl:text-6xl">
              {site.role}
            </h2>
          </Reveal>

          <Reveal delay={170}>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              {site.socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
                >
                  {BRAND[s.label] ? (
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d={BRAND[s.label]} />
                    </svg>
                  ) : null}
                  {s.label}
                </a>
              ))}
              <CopyEmail />
            </div>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {site.tagline}
            </p>
          </Reveal>
          <Reveal delay={280}>
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
        </div>

        {/* right: portrait + snapshot */}
        <Reveal delay={220} className="lg:justify-self-end">
          <div className="mx-auto w-full max-w-sm space-y-5">
            <Portrait src={site.profileImage} name={site.name} />
            <dl className="spotlight-card w-full space-y-5 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-7">
              <Fact icon={<Briefcase size={15} />} term="Currently">
                {current.role} · {current.company}
              </Fact>
              <Fact icon={<Sparkles size={15} />} term="Focus">
                Backend infrastructure · fintech · RAG &amp; agentic systems
              </Fact>
              <Fact icon={<MapPin size={15} />} term="Location">
                {site.location}
              </Fact>
              <Fact icon={<Mail size={15} />} term="Email">
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-foreground"
                >
                  {site.email}
                </a>
              </Fact>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Fact({
  icon,
  term,
  children,
}: {
  icon: React.ReactNode;
  term: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted">
        <span className="text-accent">{icon}</span>
        {term}
      </dt>
      <dd className="mt-1 text-sm text-foreground/90">{children}</dd>
    </div>
  );
}
