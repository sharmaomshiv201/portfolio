"use client";

import { useState } from "react";
import { Send, Check, AlertCircle } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const hasKey = Boolean(site.web3formsKey);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill hidden fields, humans don't.
    if (data.get("botcheck")) return;

    data.append("access_key", site.web3formsKey);
    data.append("subject", `Portfolio message from ${data.get("name")}`);

    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.message || "Something went wrong. Please email me directly.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please email me directly.");
    }
  }

  return (
    <Section id="contact" label="05" title="Get in touch">
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <Reveal className="space-y-4 text-[1.0625rem] leading-relaxed text-muted">
          <p>
            Have a project in mind, a role to fill, or just want to say hello?
            The fastest way to reach me is email.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="inline-block font-mono text-sm text-accent transition-colors hover:text-foreground"
          >
            {site.email}
          </a>
          <div className="flex gap-5 pt-2 text-sm">
            {site.socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          {status === "success" ? (
            <div className="flex items-center gap-3 rounded-xl border border-accent/40 bg-accent/[0.06] p-5 text-sm">
              <Check size={18} className="shrink-0 text-accent" />
              Thanks — your message is on its way. I&apos;ll get back to you soon.
            </div>
          ) : hasKey ? (
            <form onSubmit={onSubmit} className="space-y-4">
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" />
                <Field label="Email" name="email" type="email" />
              </div>
              <Field label="Message" name="message" textarea />

              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-500">
                  <AlertCircle size={15} /> {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Send message"}
                <Send size={15} />
              </button>
            </form>
          ) : (
            <div className="rounded-xl border border-border bg-card p-5 text-sm text-muted">
              <p>
                The contact form isn&apos;t configured yet. Add a free{" "}
                <a
                  href="https://web3forms.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-2"
                >
                  Web3Forms
                </a>{" "}
                key to <code className="font-mono">.env.local</code> to enable it.
                Until then, use the email link.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 font-medium text-background"
              >
                Email me <Send size={14} />
              </a>
            </div>
          )}
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-accent";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted">{label}</span>
      {textarea ? (
        <textarea name={name} required rows={5} className={cls} />
      ) : (
        <input name={name} type={type} required className={cls} />
      )}
    </label>
  );
}
