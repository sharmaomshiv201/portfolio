---
title: "Building this portfolio with Next.js — no backend required"
date: "2026-08-20"
excerpt: "Why a personal site almost never needs a server, and how the pieces fit together when it doesn't."
tags: ["Next.js", "React", "Architecture"]
---

Every few years I rebuild my portfolio, and every time I start by over-engineering
it. This round I made a rule: **no backend unless something genuinely needs one.**
Nothing did.

## What a portfolio actually has to do

- Show some static content: who I am, what I've built, where I've worked.
- Serve a few blog posts.
- Let someone email me.

None of that requires a running server. Here's how each part works instead.

### Content and projects

Plain data in a single TypeScript file. The build turns it into HTML. Editing my
site means editing one object and pushing to Git.

### The blog

Markdown files in a folder. At build time they're parsed with `gray-matter` for
the front-matter and `marked` for the body, then rendered as static pages. Fast,
versioned, and I write posts in my editor.

```ts
const { data, content } = matter(raw);
const html = marked.parse(content);
```

### The contact form

This is the part people assume needs a server. It doesn't. The form posts
directly from the browser to a form-handling service, which emails me the
submission. If I ever outgrow that, swapping in a serverless function is a
one-file change.

## When you *would* add a backend

- User accounts or auth.
- A database-backed CMS or dashboard.
- Server-side spam filtering or rate limiting.
- Anything personalised per visitor.

Until then, static wins: cheaper, faster, and there's nothing to keep running.

> The best backend is the one you didn't have to deploy.
