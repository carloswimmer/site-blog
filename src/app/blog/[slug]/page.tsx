import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostPage } from "@/templates/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return {
    title: `${post.title} - Site.set`,
    description: post.description,
    authors: [{ name: post.author.name }],
    robots: "index, follow",
    openGraph: {
      title: `${post.title} - Site.set`,
      description: post.description,
      url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${post.slug}`,
      siteName: "Site.set",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: post.image,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
  };
}

export const revalidate = 60;

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return <PostPage post={post} />;
}
