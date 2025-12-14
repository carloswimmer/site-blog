import { allPosts } from "contentlayer/generated";
import { Check, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Avatar } from "@/components/avatar";
import { Markdown } from "@/components/markdown/markdown";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useClipboard } from "@/hooks/use-clipboard";
import { useShare } from "@/hooks/use-share";

export const PostPage = () => {
  const router = useRouter();
  const slug = (router.query.slug as string) ?? "";
  const post = allPosts.find(
    (post) => post.slug.toLowerCase() === slug.toLowerCase(),
  );
  const publishedDate = new Date(post?.date ?? "").toLocaleDateString("en-US");
  const postUrl = `${process.env.NEXT_PUBLIC_APP_URL}/blog/${slug}`;

  const { shareButtons } = useShare({
    url: postUrl,
    title: post?.title ?? "",
    text: post?.description ?? "",
  });
  const { isCopied, handleCopy } = useClipboard({ timeout: 2000 });

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

          <aside className="space-y-6">
            <div className="rounded-lg bg-gray-700 ">
              <h2 className="mb-4 text-heading-xs text-gray-100">Share</h2>

              <div className="flex flex-wrap lg:flex-col justify-between sm:justify-start gap-3">
                {shareButtons.map((item) => (
                  <Button
                    key={item.provider}
                    variant="outline"
                    className="w-fit lg:w-full justify-start gap-2 rounded-md"
                    onClick={item.action}
                  >
                    {item.icon}
                    <span className="hidden lg:block">{item.name}</span>
                  </Button>
                ))}

                <Button
                  variant="outline"
                  className="w-fit lg:w-full justify-start gap-2 rounded-md"
                  onClick={() => handleCopy(postUrl)}
                >
                  {isCopied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <LinkIcon className="h-4 w-4" />
                  )}
                  <span className="hidden lg:block">Copy Link</span>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};
