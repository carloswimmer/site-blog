import type { Metadata } from "next";
import { LandingPage } from "@/templates/landing-page";

export const metadata: Metadata = {
  title: "Site.set",
  description: "Sell your products as an affiliate in one place",
  robots: "index, follow",
  openGraph: {
    title: "Site.set",
    description: "Sell your products as an affiliate in one place",
    url: "https://site-blog-kappa.vercel.app/og-image.jpg",
    siteName: "Site.set",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://site-blog-kappa.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Site.set",
      },
    ],
  },
};

export default function HomePage() {
  return <LandingPage />;
}
