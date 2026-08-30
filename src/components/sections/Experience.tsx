import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";

export function Experience() {
  return (
    <Section id="experience" label="04" title="Experience" tint>
      <ol className="relative border-l border-border">
        {site.experience.map((job, i) => (
          <li key={`${job.company}-${i}`} className="ml-6 pb-12 last:pb-0">
            <span className="absolute -left-[6px] mt-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent" />
            <Reveal
              delay={i * 60}
              className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-12"
            >
              <div>
                {job.logo && (
                  <div className="mb-3 inline-flex rounded-lg bg-white p-2 ring-1 ring-black/10">
                    <SmartImage
                      src={job.logo}
                      alt={job.company}
                      className="h-6 w-auto"
                    />
                  </div>
                )}
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="text-lg font-semibold">
                    {job.role}{" "}
                    <span className="text-accent">· {job.company}</span>
                  </h3>
                </div>
                <p className="mt-1 font-mono text-xs text-muted">{job.period}</p>
                {job.location && (
                  <p className="mt-0.5 text-xs text-muted">{job.location}</p>
                )}
                <p className="mt-3 text-sm text-muted">{job.summary}</p>
              </div>
              <ul className="space-y-2 lg:pt-1">
                {job.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent"
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
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={site.resumePdf}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-foreground/40"
          >
            Download résumé (PDF)
          </a>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            View on Google Drive
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
