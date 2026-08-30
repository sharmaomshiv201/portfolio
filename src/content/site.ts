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
  /** Optional company logo at /public/... (shown on a white chip) */
  logo?: string;
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  /** Optional campus photo at /public/... — omitted safely if missing */
  image?: string;
};

export const site = {
  /** Used in <title>, meta tags, the hero, and the footer */
  name: "Om Shiv Sharma",
  role: "Backend Engineer",
  /** One or two sentences. Shows under your name in the hero. */
  tagline:
    "Backend engineer building fintech infrastructure at scale. Audit-grade credit-loss and treasury systems on Django, Celery and AWS, plus RAG and agentic systems on the side.",
  /** Longer paragraph(s) for the About section */
  about: [
    "I'm a backend engineer at NeoGrowth, where I build fintech infrastructure at scale, from an audit-grade Estimated Credit Loss platform to a Treasury Management System spanning 10+ banking integrations. My core stack is Python, Django, Celery, Redis and AWS, backed by MySQL and MongoDB.",
    "Outside work I build RAG and agentic systems independently, with a focus on retrieval architecture and LLM-provider abstraction.",
  ],
  /** Small numbers shown in the About section */
  stats: [
    { value: "10+", label: "banking integrations shipped" },
    { value: "10M+", label: "records migrated, zero data loss" },
    { value: "80%", label: "more async-pipeline throughput" },
    { value: "100+", label: "daily manual entries removed" },
  ],
  location: "India",
  /** Shown on the Contact section and used for the mailto: link */
  email: "omshiivv@gmail.com",
  /** Portrait for the hero — file lives at /public/profile.jpeg.
   *  If the file is missing the hero falls back to an initials monogram. */
  profileImage: "/profile.jpeg",
  /** Résumé — Google Drive is the primary link (always current);
   *  /public/resume.pdf is a local copy used for the direct download. */
  resumeUrl:
    "https://drive.google.com/file/d/1V3tz4HcmyDSnPhLVA0yjCRZ4EFZJo1rO/view",
  resumePdf: "/resume.pdf",

  /** Absolute URL of the deployed site — used for SEO/OpenGraph */
  url: "https://portfolio-seven-eta-w2b1lh6ato.vercel.app",

  /** Cloudflare Web Analytics beacon token (dash.cloudflare.com →
   *  Web Analytics → add site → copy the data-cf-beacon token).
   *  Leave empty to disable. Not a secret — it ships in the page. */
  cloudflareToken: "cdfed36530b2440cab78032f961ec39e",

  socials: [
    { label: "GitHub", href: "https://github.com/sharmaomshiv201" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/om-shiv/" },
  ] as Social[],

  skills: [
    {
      category: "Languages",
      items: ["Python", "C++", "SQL", "JavaScript"],
    },
    {
      category: "Backend & Frameworks",
      items: [
        "Django",
        "FastAPI",
        "REST APIs",
        "Celery",
        "Redis",
        "Gunicorn",
        "Nginx",
        "React",
      ],
    },
    {
      category: "Data & ML",
      items: ["Pandas", "NumPy", "SQLAlchemy", "MySQL", "MongoDB"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (S3, Lambda, SNS, Fargate)", "Git", "Docker"],
    },
    {
      category: "AI & LLM Systems",
      items: [
        "RAG Architecture",
        "LangChain",
        "Vector Search",
        "Multi-Provider LLM Integration",
      ],
    },
    {
      category: "CS Fundamentals",
      items: ["Data Structures & Algorithms", "System Design", "OOP"],
    },
  ] as SkillGroup[],

  projects: [
    {
      title: "Stringer: News Digest Assistant",
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
        "Backend modules and REST APIs for the full investment lifecycle (cashflows, fixed deposits, mutual funds, borrowings and repayments) across 10+ banking integrations, including account validation, penny-drop verification and automated reconciliation. Systematized ~90% of treasury operations and eliminated 100+ daily manual entries.",
      tags: ["Django", "REST APIs", "MySQL", "Banking APIs"],
      featured: true,
    },
  ] as Project[],

  experience: [
    {
      role: "Software Developer",
      company: "NeoGrowth Credit Pvt. Ltd.",
      period: "Jun 2025 - Present",
      logo: "/neogrowth.svg",
      summary:
        "Building backend infrastructure for lending and treasury operations: regulatory reporting, cashflow management and banking integrations.",
      highlights: [
        "Delivered an end-to-end Estimated Credit Loss (ECL) platform (Django, Celery, Redis, MySQL, Pandas) that eliminated human intervention in the monthly regulatory ECL process.",
        "Built a Treasury Management System and REST APIs across 10+ banking integrations (account validation, penny-drop verification, automated reconciliation), cutting operational errors by 60 to 70%.",
        "Built asynchronous file-processing pipelines on AWS S3, Lambda and SNS (80% more throughput) and optimised MySQL reporting modules (40% faster report generation).",
        "Wrote Django management commands to crawl SQL and MongoDB schemas for field-level structural changes with zero downtime, and migrated 10M+ records from MySQL to MongoDB with zero data loss.",
      ],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "Bachelor of Engineering",
      school: "BITS Pilani",
      period: "2021 - 2025",
      image: "/bits-pilani.jpg",
    },
  ] as EducationItem[],
};

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Education", href: "/#education" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];
