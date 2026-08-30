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
  tint = false,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
  /** Render on a subtly toned, grid-textured panel for scroll rhythm */
  tint?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 ${tint ? "section-tint" : "overflow-x-clip"}`}
    >
      <div className={`${CONTAINER} relative z-[1] py-20 sm:py-28 ${className}`}>
        <Reveal>
          <header className="relative mb-12 sm:mb-16">
            <span aria-hidden className="section-numeral">
              {label}
            </span>
            <h2 className="relative text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <div className="relative mt-5 h-px w-full max-w-[420px] bg-gradient-to-r from-accent/60 via-border to-transparent" />
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
