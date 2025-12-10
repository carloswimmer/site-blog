import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h2 className="text-3xl font-bold text-gray-100 mb-8">Hello World</h2>
      <div className="text-blue-500">
        <Link href="/blog">Go to blog</Link>
        {" | "}
        <Link href="/about">Go to about</Link>
      </div>
    </div>
  );
}
