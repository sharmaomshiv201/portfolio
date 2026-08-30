import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export const CONTAINER =
  "mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16";

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
    <section
      id={id}
      className={`${CONTAINER} scroll-mt-20 py-16 sm:py-24 ${className}`}
    >
      <Reveal>
        <div className="mb-10 flex items-baseline gap-3 sm:mb-12">
          <span className="font-mono text-sm text-accent">{label}</span>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
        </div>
      </Reveal>
      {children}
    </section>
  );
}
