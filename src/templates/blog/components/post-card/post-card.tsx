import Image from "next/image";
import Link from "next/link";

export const PostCard = () => {
  return (
    <Link
      href={`/blog/post-1`}
      className="w-full max-w-2xl rounded-3xl border-[1px] border-gray-400 bg-gray-600 overflow-hidden transition-all duration-300 hover:border-[1px] hover:border-blue-300"
    >
      {/* Post Content */}
      <div className="p-2 rounded-md overflow-hidden">
        {/* Image Container */}
        <div className="relative">
          <div className="absolute top-0 right-0 px-3 py-1">
            <span className="text-body-xs text-gray-300">20/12/2024</span>
          </div>

          <Image
            src={`/assets/first-post.png`}
            alt=""
            width={288}
            height={144}
            className="w-full h-40 object-cover object-center"
          />
        </div>

        {/* Info */}
        <div className="px-2 mt-4 space-y-4">
          <h2 className="text-heading-sm text-gray-100 line-clamp-3">{`Transforming your business into an online store`}</h2>

          <p className="text-body-sm text-gray-300 line-clamp-3">
            {`If you are looking for a simple and effective way to sell your products online, Site.Set is the perfect solution for you. Creating a successful online store has never been easier. With our intuitive platform, you can create a professional website for your store in minutes, without needing technical knowledge.`}
          </p>

          {/* Post Footer */}
          <div className="flex items-center gap-3 border-t border-gray-400 py-4">
            <div className="relative h-5 w-5 md:h-6 md:w-6 overflow-hidden rounded-full border-[1px] border-blue-300">
              <Image
                src={`/customer-01.png`}
                alt=""
                width={24}
                height={24}
                className="rounded-md object-cover"
              />
            </div>

            <span className="text-body-sm text-gray-300">John Doe</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
