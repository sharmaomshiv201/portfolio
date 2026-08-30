"use client";

import { useRef } from "react";
import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "@/content/site";

export function ProjectCard({ project: p }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/25"
    >
      {/* cursor spotlight — follows the mouse, only visible on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(260px circle at var(--mx, 50%) var(--my, 0%), color-mix(in oklab, var(--accent) 16%, transparent), transparent 65%)",
        }}
      />

      <div className="relative mb-3 flex items-start justify-between gap-3">
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

      <p className="relative flex-1 text-sm leading-relaxed text-muted">
        {p.description}
      </p>

      <ul className="relative mt-4 flex flex-wrap gap-2">
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
