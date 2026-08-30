import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
  tags: string[];
};

export type Post = PostMeta & { html: string };

function readingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getPost(slug: string): Post {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? content.slice(0, 160).replace(/\n/g, " ") + "…",
    tags: data.tags ?? [],
    readingTime: readingTime(content),
    html: marked.parse(content, { async: false }) as string,
  };
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const { html, ...meta } = getPost(slug);
      void html;
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatDate(iso: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
