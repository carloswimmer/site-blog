import { allPosts } from "contentlayer/generated";
import { AnimatePresence, motion } from "framer-motion";
import { Inbox } from "lucide-react";
import { useRouter } from "next/router";
import { Search } from "@/components/search";
import { PostCard } from "./components/post-card";
import { PostGrid } from "./components/post-grid";

export const BlogList = () => {
  const router = useRouter();
  const query = router.query.q as string;
  const pageTitle = query
    ? `Search results for "${query}"`
    : "Tips and strategies to boost your business";

  const posts = query
    ? allPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase()),
      )
    : allPosts;

  const hasPosts = posts.length > 0;

  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="pb-14">
        <div className="container gap-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            {/* TAG */}
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
              BLOG
            </span>

            {/* Title */}
            <div className="relative overflow-hidden w-full max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={query ? "search" : "default"}
                  initial={{ opacity: 0, x: query ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: query ? -40 : 40 }}
                  transition={{ duration: 0.2 }}
                  className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100"
                >
                  {pageTitle}
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>

          {/* Search */}
          <Search />
        </div>
      </header>

      {/* Post listing */}
      {hasPosts ? (
        <PostGrid>
          {posts.map((post) => (
            <PostCard
              key={post._id}
              slug={post.slug}
              title={post.title}
              description={post.description}
              image={post.image}
              date={new Date(post.date).toLocaleDateString("en-US")}
              author={{ name: post.author.name, avatar: post.author.avatar }}
            />
          ))}
        </PostGrid>
      ) : (
        <div className="container px-8 flex items-center justify-center flex-grow">
          <div className="flex flex-col items-center justify-center gap-8 border-dashed border-2 border-gray-400 p-24 rounded-2xl">
            <Inbox className="h-12 w-12 text-cyan-200" />

            <p className="text-gray-100 text-center">No posts found.</p>
          </div>
        </div>
      )}
    </div>
  );
};
