import Link from "next/link";
import { Logo } from "../logo";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-8 py-8">
          <Logo />

          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <Link className="hover:text-primary" href="/terms-of-usage">
              Terms of Usage
            </Link>
            <Link className="hover:text-primary" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="hover:text-primary" href="/send-feedback">
              Send Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
