"use client";

import { useEffect, useRef, useState } from "react";

/** Plain <img> that removes itself if the file is missing (404),
 *  including the case where it errors before React hydrates. */
export function SmartImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
