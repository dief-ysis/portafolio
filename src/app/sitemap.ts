import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getAllPosts } from "@/lib/mdx";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://david-dev.vercel.app";

  const locales = routing.locales;
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;

    entries.push({
      url: `${siteUrl}${prefix}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    });

    entries.push({
      url: `${siteUrl}${prefix}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    for (const project of projects) {
      entries.push({
        url: `${siteUrl}${prefix}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    const blogPosts = getAllPosts();
    for (const post of blogPosts) {
      entries.push({
        url: `${siteUrl}${prefix}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
