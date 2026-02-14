"use client";

import { m } from "motion/react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BlogPost } from "@/types";

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogPostCard({ post, index }: BlogPostCardProps) {
  const locale = useLocale();

  const formattedDate = new Date(post.date).toLocaleDateString(
    locale === "es" ? "es-ES" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
      >
        <div className="mb-3 flex items-center gap-3 text-sm text-muted">
          <time dateTime={post.date}>{formattedDate}</time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
        </div>

        <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
          {post.title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-muted">
          {post.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </m.div>
  );
}
