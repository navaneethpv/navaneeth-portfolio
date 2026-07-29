import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { portfolioData } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://navaneethpv.me";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/404`,
  },
};

export default function NotFound() {
  const { personal } = portfolioData;

  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans relative overflow-x-hidden">
      <div className="w-full max-w-[2200px] mx-auto bg-card relative shadow-2xl border-x border-border flex flex-col justify-between min-h-screen">
        <Navbar personal={personal} isCaseStudy={true} />

        <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 md:py-32 space-y-8 max-w-4xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-accent border border-accent/40 px-4 py-1.5 bg-accent/10 rounded-full font-bold">
            Error 404 &bull; Page Not Found
          </span>

          <h1 className="text-7xl sm:text-9xl lg:text-[12rem] font-heading font-extrabold text-primary leading-none tracking-tighter uppercase select-none">
            404
          </h1>

          <div className="space-y-3 max-w-lg">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary uppercase">
              Lost in Cyberspace?
            </h2>
            <p className="text-secondary text-sm sm:text-base leading-relaxed font-sans">
              The page or route you are looking for has been moved, renamed, or does not exist.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/"
              className="px-8 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest font-bold hover:bg-accent hover:text-accent-foreground transition-all duration-300 border-2 border-primary inline-flex items-center gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] rounded-xs"
            >
              <Icon icon="lucide:arrow-left" className="text-base" />
              <span>Return to Portfolio Home</span>
            </Link>
          </div>
        </main>

        <Footer personal={personal} isCaseStudy={true} />
      </div>
    </div>
  );
}
