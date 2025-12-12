import Link from "next/link";
import { Logo } from "../../logo";

export const Footer = () => {
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-8 py-8">
          <Logo />

          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-blue-100">
            <Link className="hover:text-blue-200" href="/terms-of-usage">
              Terms of Usage
            </Link>
            <Link className="hover:text-blue-200" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="hover:text-blue-200" href="/send-feedback">
              Send Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
