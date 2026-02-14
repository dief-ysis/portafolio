import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getAllPosts } from "@/lib/mdx";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articulos sobre desarrollo web, tecnologia y mis aprendizajes como desarrollador.",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const posts = getAllPosts();

  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-4xl">
        <BlogList posts={posts} />
      </div>
    </main>
  );
}
