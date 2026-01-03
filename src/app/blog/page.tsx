import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import { BlogList } from "@/templates/blog";

export const metadata: Metadata = {
  title: "Blog - Site.set",
  description: "Tips and strategies to boost your business",
  robots: "index, follow",
  openGraph: {
    title: "Blog - Site.set",
    description: "Tips and strategies to boost your business",
    url: "https://site-blog-kappa.vercel.app/og-image.jpg",
    siteName: "Site.set",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://site-blog-kappa.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Site.set",
      },
    ],
  },
};

export default function BlogListPage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return <BlogList posts={sortedPosts} />;
}
