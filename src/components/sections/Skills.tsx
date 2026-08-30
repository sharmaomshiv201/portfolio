import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { TechGlyphs } from "@/components/TechGlyphs";

export function Skills() {
  return (
    <Section id="skills" title="Skills" backdrop={<TechGlyphs />}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {site.skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 60}>
            <div className="spotlight-card h-full rounded-xl border border-border bg-card/75 p-5 backdrop-blur-sm">
              <h3 className="mb-3 text-sm font-semibold text-muted">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-background/40 px-2.5 py-1 font-mono text-xs text-foreground/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
