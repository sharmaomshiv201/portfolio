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

The form posts straight from the browser to [Web3Forms](https://web3forms.com),
which emails you each submission — no server required.

1. Get a free access key at https://web3forms.com (enter your email, they send
   you a key — ~30 seconds, no account needed).
2. Add it to `.env.local`:

   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your-key-here
   ```

3. On your host (e.g. Vercel), add the same environment variable.

Without a key the form falls back to opening the visitor's mail client with the
note pre-filled.

## Deploy

Works out of the box on **Vercel** (recommended) or **Netlify**:

- Push this repo to GitHub.
- Import it in Vercel → it auto-detects Next.js.
- Add the `NEXT_PUBLIC_WEB3FORMS_KEY` env var.
- Deploy.

For a purely static host, add `output: "export"` to `next.config.ts` and run
`npm run build` — the `out/` folder is a static site.

## Build

```bash
npm run build
npm start
```
