import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPostSlugs, formatDate } from "@/lib/blog";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPost(slug);
    return { title: post.title, description: post.excerpt };
  } catch {
    return {};
  }
}

export default async function BlogPost({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;

  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto max-w-2xl px-5 py-20">
      <Link
        href="/blog"
        className="text-sm text-accent transition-colors hover:text-foreground"
      >
        ← All posts
      </Link>

      <header className="mt-6">
        <div className="flex items-center gap-3 font-mono text-xs text-muted">
          <time>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {post.title}
        </h1>
      </header>

      <div
        className="prose mt-10"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  );
}
