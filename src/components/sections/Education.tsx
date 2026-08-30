import { GraduationCap } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";

export function Education() {
  return (
    <Section id="education" label="05" title="Education">
      <div className="space-y-5">
        {site.education.map((ed, i) => (
          <Reveal key={`${ed.school}-${i}`} delay={i * 60}>
            <div className="grid overflow-hidden rounded-xl border border-border bg-card md:grid-cols-[1.4fr_1fr]">
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <GraduationCap size={20} className="text-accent" />
                <h3 className="mt-4 text-xl font-semibold">{ed.degree}</h3>
                <p className="mt-1 text-muted">{ed.school}</p>
                <p className="mt-4 font-mono text-xs text-muted">{ed.period}</p>
              </div>
              {ed.image && (
                <div className="relative grid min-h-[200px] place-items-center overflow-hidden border-t border-border bg-gradient-to-br from-accent/10 to-accent-2/10 md:border-l md:border-t-0">
                  <GraduationCap
                    size={40}
                    className="text-accent/30"
                    aria-hidden
                  />
                  <SmartImage
                    src={ed.image}
                    alt={`${ed.school} campus`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
