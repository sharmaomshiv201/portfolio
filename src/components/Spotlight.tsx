"use client";

import { useEffect } from "react";

/**
 * One delegated pointer listener for the whole page:
 *  - drives a page-wide glow that follows the cursor (--cursor-x/y on <body>)
 *  - and, when the pointer is over a `.spotlight-card`, that card's local
 *    highlight (--mx/--my, rect-relative).
 * Updates are coalesced into a single rAF per frame.
 */
export function Spotlight() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    let raf = 0;
    let vx = 0;
    let vy = 0;
    let card: HTMLElement | null = null;
    let cx = 0;
    let cy = 0;

    const flush = () => {
      raf = 0;
      const body = document.body.style;
      body.setProperty("--cursor-x", `${vx}px`);
      body.setProperty("--cursor-y", `${vy}px`);
      if (card) {
        card.style.setProperty("--mx", `${cx}px`);
        card.style.setProperty("--my", `${cy}px`);
      }
    };

    const onMove = (e: PointerEvent) => {
      vx = e.clientX;
      vy = e.clientY;
      const el =
        (e.target as Element | null)?.closest?.(
          ".spotlight-card"
        ) as HTMLElement | null;
      card = el ?? null;
      if (card) {
        const r = card.getBoundingClientRect();
        cx = e.clientX - r.left;
        cy = e.clientY - r.top;
      }
      if (!raf) raf = requestAnimationFrame(flush);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
