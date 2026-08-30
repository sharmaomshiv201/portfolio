import { GraduationCap } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Education() {
  const campus = site.education.find((e) => e.image)?.image;

  return (
    <Section
      id="education"
      label="05"
      title="Education"
      bgImage={campus}
      bgImageAlt="BITS Pilani campus"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:max-w-3xl">
        {site.education.map((ed, i) => (
          <Reveal key={`${ed.school}-${i}`} delay={i * 60}>
            <div className="flex h-full flex-col rounded-xl border border-border bg-card/80 p-6 backdrop-blur-sm">
              <GraduationCap size={20} className="text-accent" />
              <h3 className="mt-4 text-lg font-semibold">{ed.degree}</h3>
              <p className="mt-1 text-sm text-muted">{ed.school}</p>
              <p className="mt-auto pt-4 font-mono text-xs text-muted">
                {ed.period}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
