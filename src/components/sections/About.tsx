import { MapPin, Mail, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
        <div className="space-y-10">
          <Reveal className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
            {site.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={60}>
            <dl className="grid max-w-2xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              {site.stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-muted">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <Reveal delay={80} className="lg:justify-self-end">
          <div className="spotlight-card rounded-xl border border-border bg-card p-6 text-sm lg:max-w-sm">
            <div className="flex items-center gap-2 text-muted">
              <MapPin size={15} className="text-accent" />
              {site.location}
            </div>
            <div className="mt-3 flex items-center gap-2 text-muted">
              <Mail size={15} className="text-accent" />
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-foreground"
              >
                {site.email}
              </a>
            </div>
            {site.socials.map((s) => (
              <div
                key={s.href}
                className="mt-3 flex items-center gap-2 text-muted"
              >
                <ArrowUpRight size={15} className="text-accent" />
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
