import Link from "next/link";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const segments = router.query.slug as string[] | undefined;

  return (
    <div>
      {segments?.map((segment) => (
        <div key={segment}>Post: {segment}</div>
      ))}
      <Link href="/blog">Back to blog</Link>
    </div>
  );
}
