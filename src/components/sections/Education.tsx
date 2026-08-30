import { GraduationCap } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Education() {
  const campus = site.education.find((e) => e.image)?.image;

  return (
    <Section
      id="education"
      label="02"
      title="Education"
      bgImage={campus}
      bgImageAlt="BITS Pilani campus"
    >
      <div className="flex flex-col gap-3">
        {site.education.map((ed, i) => (
          <Reveal key={`${ed.school}-${i}`} delay={i * 60}>
            <div className="inline-flex w-full max-w-xl flex-col gap-3 rounded-2xl border border-border/60 bg-background/30 px-5 py-4 backdrop-blur-md sm:flex-row sm:items-center sm:gap-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                <GraduationCap size={18} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold leading-tight">{ed.degree}</p>
                <p className="text-sm text-muted">{ed.school}</p>
              </div>
              <span className="shrink-0 font-mono text-xs text-muted">
                {ed.period}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
