import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  const projects = [...site.projects].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
  );

  return (
    <Section id="projects" label="04" title="Projects" tint>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 60}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
