import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { SmartImage } from "./SmartImage";

export const CONTAINER =
  "mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16";

export function Section({
  id,
  title,
  children,
  className = "",
  tint = false,
  bgImage,
  bgImageAlt = "",
  backdrop,
}: {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  /** Render on a subtly toned, grid-textured panel for scroll rhythm */
  tint?: boolean;
  /** Full-bleed photo behind the whole section, under a legibility scrim */
  bgImage?: string;
  bgImageAlt?: string;
  /** Arbitrary decorative layer rendered full-bleed behind the content */
  backdrop?: ReactNode;
}) {
  const decorated = Boolean(bgImage || backdrop);

  return (
    <section
      id={id}
      className={`relative scroll-mt-20 ${
        tint ? "section-tint" : "overflow-x-clip"
      } ${decorated ? "isolate" : ""}`}
    >
      {backdrop && (
        <div aria-hidden className="absolute inset-0 -z-10">
          {backdrop}
        </div>
      )}
      {bgImage && (
        <>
          <SmartImage
            src={bgImage}
            alt={bgImageAlt}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-background/55" />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/20 to-background"
          />
        </>
      )}
      <div className={`${CONTAINER} relative z-[1] py-20 sm:py-28 ${className}`}>
        <Reveal>
          <header className="mb-12 sm:mb-16">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <div className="mt-5 h-px w-full max-w-[420px] bg-gradient-to-r from-accent/60 via-border to-transparent" />
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
