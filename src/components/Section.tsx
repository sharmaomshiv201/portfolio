import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  label,
  title,
  children,
  className = "",
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-5xl scroll-mt-20 px-5 py-20 ${className}`}>
      <Reveal>
        <div className="mb-10 flex items-baseline gap-3">
          <span className="font-mono text-sm text-accent">{label}</span>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
        </div>
      </Reveal>
      {children}
    </section>
  );
}
