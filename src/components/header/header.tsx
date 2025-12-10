import Link from "next/link";
import { ActiveLink } from "../active-link";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/95 backdrop-blur 
    supports-[backdrop-filter]:bg-background/60"
    >
      <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">Logo</Link>

          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button variant="default" asChild>
              <Link href="/start">Start</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
