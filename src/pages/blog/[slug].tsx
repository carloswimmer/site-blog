import { allPosts } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Avatar } from "@/components/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function PostPage() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const post = allPosts.find(
    (post) => post.slug.toLowerCase() === slug.toLowerCase(),
  );
  const publishedDate = new Date(post?.date ?? "").toLocaleDateString("en-US");

  return (
    <main className="container mt-32 text-gray-100">
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

          <header className="p-4 md:p-6 lg:p-12 pb-0">
            <h1 className="mb-6 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
              {post?.title}
            </h1>

            <Avatar.Container>
              <Avatar.Image
                src={post?.author.avatar ?? ""}
                alt={post?.author.name ?? ""}
                width={40}
                height={40}
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
        </article>
      </div>
    </main>
  );
}
