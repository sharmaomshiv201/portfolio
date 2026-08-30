"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { site } from "@/content/site";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard blocked — fall back to the mail client
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <button
      onClick={copy}
      aria-label={`Copy email address ${site.email}`}
      className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-foreground/40 hover:text-foreground"
    >
      {copied ? (
        <>
          <Check size={13} className="text-accent" /> Copied
        </>
      ) : (
        <>
          <Copy size={13} /> {site.email}
        </>
      )}
    </button>
  );
}
