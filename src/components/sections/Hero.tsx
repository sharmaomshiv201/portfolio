import Link from "next/link";
import { ArrowDown, FileText, MapPin, Mail, Briefcase, Sparkles } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Portrait } from "@/components/Portrait";
import { CONTAINER } from "@/components/Section";

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
        {/* left — intro */}
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
          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
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

        {/* right — portrait + snapshot */}
        <Reveal delay={220} className="lg:justify-self-end">
          <div className="mx-auto w-full max-w-sm space-y-5">
            <Portrait src={site.profileImage} name={site.name} />
            <dl className="w-full space-y-5 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-7">
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
