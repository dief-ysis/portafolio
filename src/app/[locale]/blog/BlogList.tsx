"use client";

import { useState, useMemo } from "react";
import { m } from "motion/react";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { BlogPost } from "@/types";

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const t = useTranslations("blog");
  const [activeTag, setActiveTag] = useState<string>(t("all"));

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
    return [t("all"), ...Array.from(tagSet).sort()];
  }, [posts, t]);

  const filteredPosts = useMemo(() => {
    if (activeTag === t("all")) return posts;
    return posts.filter((post) => post.tags.includes(activeTag));
  }, [posts, activeTag, t]);

  return (
    <>
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />

      {allTags.length > 1 && (
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeTag === tag
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-card border border-border text-muted hover:border-primary hover:text-primary"
              }`}
            >
              {tag}
            </button>
          ))}
        </m.div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        {filteredPosts.map((post, i) => (
          <BlogPostCard key={post.slug} post={post} index={i} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="mt-8 text-center text-muted">{t("noArticles")}</p>
      )}
    </>
  );
}
