"use client";

import { useEffect, useRef, useState } from "react";

export function Portrait({ src, name }: { src: string; name: string }) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    // If the image 404'd before hydration, onError never fires — catch it here.
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-card">
      {failed ? (
        <div className="grid h-full w-full place-items-center bg-gradient-to-br from-accent/10 to-accent-2/10 font-mono text-5xl font-bold text-muted">
          {initials}
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={src}
          alt={name}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-top"
        />
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 dark:ring-white/5"
      />
    </div>
  );
}
