import { MapPin, Mail } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <Section id="about" label="01" title="About">
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <Reveal className="space-y-4 text-[1.0625rem] leading-relaxed text-muted">
          {site.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={80}>
          <div className="rounded-xl border border-border bg-card p-5 text-sm">
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
