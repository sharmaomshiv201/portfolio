import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "@/content/site";

export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="spotlight-card group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/25">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <div className="flex shrink-0 gap-2 text-muted">
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} source code`}
              className="transition-colors hover:text-foreground"
            >
              <Code2 size={17} />
            </a>
          )}
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} live site`}
              className="transition-colors hover:text-foreground"
            >
              <ArrowUpRight size={17} />
            </a>
          )}
        </div>
      </div>

      <p className="flex-1 text-sm leading-relaxed text-muted">{p.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <li
            key={t}
            className="rounded-md bg-foreground/[0.04] px-2 py-1 font-mono text-[11px] text-muted dark:bg-foreground/[0.06]"
          >
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
