import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { getAllPosts, formatDate } from "@/lib/blog";

export function WritingTeaser() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <Section id="writing" label="06" title="Writing">
      <div className="divide-y divide-border border-y border-border">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 50}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="font-medium transition-colors group-hover:text-accent">
                {post.title}
              </span>
              <span className="shrink-0 font-mono text-xs text-muted">
                {formatDate(post.date)}
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <Link
          href="/blog"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
        >
          All posts <ArrowRight size={15} />
        </Link>
      </Reveal>
    </Section>
  );
}
