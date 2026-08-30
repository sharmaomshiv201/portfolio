import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <Section id="skills" label="02" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2">
        {site.skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 60}>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-3 text-sm font-semibold text-muted">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-foreground/90"
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
