import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post no encontrado" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | David Dev`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <article className="mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Volver al blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="mb-4 flex items-center gap-3 text-sm text-muted">
            <time dateTime={post.date}>{formattedDate}</time>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* MDX Content */}
        <div className="prose">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [rehypePrettyCode, { theme: "one-dark-pro", keepBackground: true }],
                ],
              },
            }}
          />
        </div>
      </article>
    </main>
  );
}
