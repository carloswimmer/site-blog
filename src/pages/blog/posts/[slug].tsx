import Link from "next/link";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();

  return (
    <div>
      <h2>Post: {router.query.slug}</h2>
      <Link href="/blog">Back to blog</Link>
    </div>
  );
}
