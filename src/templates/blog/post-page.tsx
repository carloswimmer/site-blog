import type { Post } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@/components/avatar";
import { Markdown } from "@/components/markdown/markdown";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PostShare } from "./components/post-share";

export type PostPageProps = {
  post: Post;
};

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
};

export const PostPage = ({ post }: PostPageProps) => {
  const publishedDate = new Date(post?.date ?? "").toLocaleDateString("en-US");
  const baseUrl = getBaseUrl();
  const postUrl = `${baseUrl}/blog/${post?.slug}`;

  console.log("NEXT_PUBLIC_APP_URL:", process.env.NEXT_PUBLIC_APP_URL);
  console.log("postUrl gerada:", postUrl);

  return (
    <main className="py-20 text-gray-100">
      <div className="container space-y-8 px-4 md:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="text-action-sm">
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <span className="text-action-sm text-blue-200">
                  {post?.title}
                </span>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
          <article className="bg-gray-600 rounded-lg overflow-hidden border-[1px] border-gray-400">
            <figure className="relative aspect-[16/10] w-full rounded-lg overflow-hidden">
              <Image
                src={post?.image ?? ""}
                alt={post?.title ?? ""}
                fill
                className="w-full h-full object-cover"
              />
            </figure>

            <header className="p-4 md:p-6 lg:p-12 pb-0 mt-8">
              <h1 className="mb-8 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
                {post?.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image
                  src={post?.author.avatar ?? ""}
                  alt={post?.author.name ?? ""}
                  size="sm"
                />
                <Avatar.Content>
                  <Avatar.Title>{post?.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Published on &nbsp;
                    <time dateTime={post?.date}>{publishedDate}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prose-invert max-w-none px-4 mt-8 md:px-6 lg:px-12">
              <Markdown content={post?.body.raw ?? ""} />
            </div>
          </article>

          <PostShare url={postUrl} post={post} />
        </div>
      </div>
    </main>
  );
};
