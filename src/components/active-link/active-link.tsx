import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

type ActiveLinkProps = {
  href: string;
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const router = useRouter();
  const linkPath = rest.as?.toString() || href;
  const isActive = router.asPath === linkPath;

  return (
    <Link
      href={href}
      className={cn(
        "text-action-sm transition-colors hover:text-blue-200",
        isActive ? "text-blue-500" : "text-gray-100",
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};
