import Link from "next/link";

export default function Blog() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h2 className="text-3xl font-bold text-gray-100 mb-8">Blog</h2>
      <div>
        <Link href="/blog/posts" className="text-blue-500">
          Go to posts
        </Link>
      </div>
    </div>
  );
}
