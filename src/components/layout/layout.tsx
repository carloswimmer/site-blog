import { Inter, PT_Sans_Caption } from "next/font/google";
import { cn } from "@/lib/utils";
import { Footer } from "../footer";
import { Header } from "../header";

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-pt-sans-caption",
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-screen bg-gray-700 font-inter",
        inter.className,
        ptSansCaption.className,
      )}
    >
      <Header />
      <main className="flex flex-1 flex-col mt-10 mb-12">{children}</main>
      <Footer />
    </div>
  );
};
