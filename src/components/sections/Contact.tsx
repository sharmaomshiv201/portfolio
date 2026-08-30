"use client";

import { useState } from "react";
import { Send, Check, AlertCircle } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

type Status = "idle" | "submitting" | "success" | "error";

// FormSubmit relays the submission straight to my inbox — no server,
// no API key. https://formsubmit.co
const ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — real people leave it empty.
    if (data.get("_honey")) return;

    data.set("_subject", `Portfolio note from ${data.get("name") || "someone"}`);
    data.set("_template", "table");
    data.set("_captcha", "false");

    setStatus("submitting");
    setError("");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (res.ok && (json.success === "true" || json.success === true)) {
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
    <Section id="contact" title="Leave a note" tint>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal className="max-w-md space-y-4 text-lg leading-relaxed text-muted">
          <p>
            Have a project in mind, a role to fill, or just want to say hello?
            Drop a note below and it&apos;ll land in my inbox — or email me
            directly.
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

        <Reveal delay={80} className="w-full max-w-2xl">
          {status === "success" ? (
            <Confirmation>
              Thanks — your note is on its way. I&apos;ll get back to you soon.
            </Confirmation>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your name" name="name" placeholder="Ada Lovelace" />
                <Field
                  label="Your email"
                  name="email"
                  type="email"
                  placeholder="ada@example.com"
                />
              </div>
              <Field
                label="Note"
                name="message"
                textarea
                placeholder="Hi Om — I'd love to talk about…"
              />

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
                {status === "submitting" ? "Sending…" : "Send note"}
                <Send size={15} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}

function Confirmation({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-accent/40 bg-accent/[0.06] p-5 text-sm">
      <Check size={18} className="mt-0.5 shrink-0 text-accent" />
      <p>{children}</p>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  placeholder?: string;
}) {
  const cls =
    "w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/50 focus:border-accent";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          required
          rows={5}
          placeholder={placeholder}
          className={cls}
        />
      ) : (
        <input
          name={name}
          type={type}
          required
          placeholder={placeholder}
          className={cls}
        />
      )}
    </label>
  );
}
