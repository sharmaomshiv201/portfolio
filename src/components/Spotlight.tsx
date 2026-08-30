"use client";

import { useEffect } from "react";

/**
 * One delegated pointer listener for the whole page. When the cursor is
 * over any `.spotlight-card`, it writes rect-relative coordinates to that
 * element's `--mx` / `--my`, which the CSS radial-gradient reads.
 */
export function Spotlight() {
  useEffect(() => {
    let raf = 0;
    let last: HTMLElement | null = null;

    const onMove = (e: PointerEvent) => {
      const target = e.target as Element | null;
      const card =
        (target?.closest?.(".spotlight-card") as HTMLElement | null) ?? null;
      last = card;
      if (!card) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (last !== card) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
