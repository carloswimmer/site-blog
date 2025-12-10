import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

type ActiveLinkProps = {
  href: string;
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const router = useRouter();
  const linkPath = rest.as?.toString() || href.toString();
  const isActive = router.asPath.startsWith(linkPath);

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-blue-400",
        isActive ? "text-blue-500" : "text-muted-foreground",
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};
