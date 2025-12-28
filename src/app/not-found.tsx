import { FileQuestion, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 flex-col">
      <div className="max-w-md w-full text-center">
        <FileQuestion size={64} className="text-gray-100 mx-auto mb-6" />
      </div>

      <div className="relative inline-block mb-3 font-pt-sans-caption text-8xl font-bold text-white">
        <span className="inline-block transform -rotate-12 -translate-y-2 -translate-x-1">
          4
        </span>
        <span className="inline-block">0</span>
        <span className="inline-block">4</span>
      </div>

      <p className="text-gray-100 mb-8">Page not found</p>

      <div className="mt-6 flex justify-center gap-4">
        <Button variant="primary" asChild>
          <Link href="/">Home</Link>
        </Button>

        <Button variant="secondary" asChild>
          <Link href="/blog?q=">
            <Search size={16} />
            Posts search
          </Link>
        </Button>
      </div>
    </div>
  );
}
