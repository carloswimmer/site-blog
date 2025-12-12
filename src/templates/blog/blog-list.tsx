import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { Search } from "@/components/search";
import { PostCard } from "./components/post-card";

export const BlogList = () => {
  const router = useRouter();
  const query = router.query.q as string;
  const pageTitle = query
    ? `Search results for "${query}"`
    : "Tips and strategies to boost your business";

  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PostCard />
      </div>
    </div>
  );
};
