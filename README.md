# Portfolio

A personal portfolio. **Frontend only** — Next.js (App Router),
TypeScript, Tailwind CSS v4. No backend, no database. Every page is
statically rendered at build time.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customise

Almost everything lives in **one file**: [`src/content/site.ts`](src/content/site.ts).
Edit your name, role, tagline, about text, skills, projects, experience,
socials, and email there.

| What | Where |
|---|---|
| Personal info, projects, experience, education, skills | `src/content/site.ts` |
| Portrait photo | `public/profile.jpeg` |
| Campus photo (Education) | `public/bits-pilani.jpg` |
| Résumé PDF (local copy for download) | `public/resume.pdf` |
| Résumé link (primary) | `resumeUrl` in `src/content/site.ts` |
| Colours / theme | CSS variables at the top of `src/app/globals.css` |
| Favicon | `src/app/icon.tsx` (generated "OS" monogram) |
| Nav items | `navLinks` in `src/content/site.ts` |

## Contact form

The form POSTs from the browser to [FormSubmit](https://formsubmit.co), which
relays each submission to the address in `site.email`. No server, no API key,
no env vars.

**One-time activation:** the first time the form is submitted (do it yourself
after deploying), FormSubmit emails that address an activation link. Click it
once and every later submission is delivered straight to the inbox.

## Deploy

Works out of the box on **Vercel** (recommended) or **Netlify**:

- Push this repo to GitHub.
- Import it in Vercel → it auto-detects Next.js.
- Deploy. Then submit the contact form once and click FormSubmit's activation
  email.

For a purely static host, add `output: "export"` to `next.config.ts` and run
`npm run build` — the `out/` folder is a static site.

## Build

```bash
npm run build
npm start
```
