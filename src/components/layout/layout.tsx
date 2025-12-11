import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Footer } from "../footer";
import { Header } from "../header";

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-screen bg-gray-700 pt-16",
        inter.className,
      )}
    >
      <Header />
      <main className="flex flex-1 flex-col mb-12">{children}</main>
      <Footer />
    </div>
  );
};
