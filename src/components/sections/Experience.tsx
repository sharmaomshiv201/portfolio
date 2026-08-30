import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <Section id="experience" label="04" title="Experience">
      <ol className="relative border-l border-border">
        {site.experience.map((job, i) => (
          <li key={`${job.company}-${i}`} className="ml-6 pb-10 last:pb-0">
            <span className="absolute -left-[6px] mt-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent" />
            <Reveal delay={i * 60}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-base font-semibold">
                  {job.role}{" "}
                  <span className="text-accent">· {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted">
                  {job.period}
                </span>
              </div>
              {job.location && (
                <p className="mt-0.5 text-xs text-muted">{job.location}</p>
              )}
              <p className="mt-2 text-sm text-muted">{job.summary}</p>
              <ul className="mt-3 space-y-1.5">
                {job.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="relative pl-4 text-sm text-muted before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
      <Reveal>
        <a
          href={site.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-foreground/40"
        >
          Download full résumé (PDF)
        </a>
      </Reveal>
    </Section>
  );
}
