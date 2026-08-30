/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE TO PERSONALISE YOUR PORTFOLIO
 * ─────────────────────────────────────────────────────────────
 *  Everything the site displays comes from here. No backend,
 *  no database — just this file plus the Markdown posts in
 *  /content/blog.
 */

export type Social = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  /** Live/demo URL — omit if none */
  link?: string;
  /** Source code URL — omit if private */
  repo?: string;
  /** Optional "Featured" flag to pull it to the top */
  featured?: boolean;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  /** e.g. "2023 — Present" */
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
};

export const site = {
  /** Used in <title>, meta tags, the hero, and the footer */
  name: "Om Sharma",
  role: "Full-Stack Developer",
  /** One or two sentences. Shows under your name in the hero. */
  tagline:
    "I build fast, accessible web apps with React, Next.js and TypeScript — from first sketch to production deploy.",
  /** Longer paragraph(s) for the About section */
  about: [
    "I'm a developer focused on the frontend and the seams where it meets the backend. I care about clean interfaces, sensible data flow, and shipping things people actually enjoy using.",
    "Outside of work I tinker with side projects, contribute to open source, and write about what I learn.",
  ],
  location: "India",
  /** Shown on the Contact section and used for the mailto: link */
  email: "sharmaomshiv201@gmail.com",
  /** Résumé — hosted on Google Drive */
  resumeUrl:
    "https://drive.google.com/file/d/1V3tz4HcmyDSnPhLVA0yjCRZ4EFZJo1rO/view",

  /** Absolute URL of the deployed site — used for SEO/OpenGraph */
  url: "https://your-domain.com",

  socials: [
    { label: "GitHub", href: "https://github.com/sharmaomshiv201" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/om-shiv/" },
  ] as Social[],

  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Redux", "Vite", "Framer Motion"],
    },
    {
      category: "Backend & Data",
      items: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST", "GraphQL"],
    },
    {
      category: "Tooling",
      items: ["Git", "Docker", "Vercel", "Jest", "Playwright", "GitHub Actions"],
    },
  ] as SkillGroup[],

  projects: [
    {
      title: "Stringer — News Digest Assistant",
      description:
        "A RAG news assistant: FastAPI over a NumPy cosine-similarity index on SQLite, with hybrid retrieval (semantic + keyword + recency decay) and near-duplicate suppression. A grounding gate withholds an answer rather than responding from unrelated articles, and an enrichment pipeline fetches full article context to fix headline-only feeds. Runs with zero API keys.",
      tags: ["Python", "FastAPI", "React", "RAG", "NumPy", "SQLite"],
      repo: "https://github.com/sharmaomshiv201/stringer",
      featured: true,
    },
    {
      title: "Estimated Credit Loss (ECL) Processing System",
      description:
        "An audit-grade ECL platform built at NeoGrowth that removed human intervention from the monthly regulatory reporting process. Asynchronous file-processing pipelines on AWS S3, Lambda and SNS raised throughput by ~80%, and MySQL reporting/validation tuning cut report generation time by ~40%.",
      tags: ["Django", "Celery", "Redis", "AWS", "MySQL", "Pandas"],
      featured: true,
    },
    {
      title: "Treasury Management System (TMS)",
      description:
        "Backend modules and REST APIs for the full investment lifecycle — cashflows, fixed deposits, mutual funds, borrowings and repayments — across 10+ banking integrations, including account validation, penny-drop verification and automated reconciliation. Systematized ~90% of treasury operations and eliminated 100+ daily manual entries.",
      tags: ["Django", "REST APIs", "MySQL", "Banking APIs"],
      featured: true,
    },
  ] as Project[],

  experience: [
    {
      role: "Software Developer",
      company: "Company Name",
      period: "2023 — Present",
      location: "Remote",
      summary:
        "One line on your remit — what team, what product, what you own.",
      highlights: [
        "Shipped X, which did Y and moved metric Z by N%.",
        "Led the migration from A to B across the codebase.",
        "Mentored two junior engineers and ran the frontend guild.",
      ],
    },
    {
      role: "Frontend Developer (Intern)",
      company: "Earlier Company",
      period: "2022 — 2023",
      location: "Hybrid",
      summary: "Where you started and what you built.",
      highlights: [
        "Built the component library used across three products.",
        "Cut the main bundle size by 40% with code-splitting.",
      ],
    },
  ] as ExperienceItem[],

  /**
   * Contact form: submissions go straight from the browser to
   * web3forms.com, which emails them to you. No server needed.
   * 1. Get a free access key at https://web3forms.com (30 seconds).
   * 2. Put it in .env.local as NEXT_PUBLIC_WEB3FORMS_KEY=...
   * If the key is absent, the form gracefully falls back to a
   * plain mailto: link.
   */
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
};

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Writing", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];
