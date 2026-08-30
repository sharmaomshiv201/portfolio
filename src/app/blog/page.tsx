import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on building for the web.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <Reveal>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Writing</h1>
        <p className="mt-3 text-muted">Notes on building for the web.</p>
      </Reveal>

      {posts.length === 0 ? (
        <p className="mt-12 text-muted">No posts yet — check back soon.</p>
      ) : (
        <div className="mt-12 space-y-10">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 50}>
              <article>
                <div className="flex items-center gap-3 font-mono text-xs text-muted">
                  <time>{formatDate(post.date)}</time>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-2 text-xl font-semibold">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 leading-relaxed text-muted">{post.excerpt}</p>
                {post.tags.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      )}

      <Link
        href="/"
        className="mt-16 inline-block text-sm text-accent transition-colors hover:text-foreground"
      >
        ← Back home
      </Link>
    </div>
  );
}
