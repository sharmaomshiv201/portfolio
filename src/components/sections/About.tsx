import { MapPin, Mail } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <Section id="about" label="01" title="About">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
          {site.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={80} className="lg:justify-self-end">
          <div className="rounded-xl border border-border bg-card p-6 text-sm lg:max-w-sm">
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
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
