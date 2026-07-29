import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Oswald, Caveat } from "next/font/google";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const siteUrl = "https://navaneeth-portfolio.vercel.app";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Navaneeth PV — Full-Stack & Frontend Developer Portfolio",
    template: "%s | Navaneeth PV",
  },
  description:
    "Navaneeth PV is a Full-Stack & Frontend Developer specializing in Next.js, React, TypeScript, Node.js, and modern UI engineering. View interactive web applications, case studies, and engineering principles.",
  keywords: [
    "Navaneeth PV",
    "Navaneeth PV Portfolio",
    "Navaneeth PV Developer",
    "Navaneeth PV Frontend Developer",
    "Frontend Developer Kerala",
    "React Developer India",
    "Next.js Developer",
    "Full Stack Developer",
    "Exouzia Technologies Intern",
    "CM College Web Platform",
    "Eyoris Fashion AI",
    "JCOM Member Directory",
    "Asset Homes Property Management",
  ],
  authors: [{ name: "Navaneeth PV", url: "https://github.com/navaneethpv" }],
  creator: "Navaneeth PV",
  publisher: "Navaneeth PV",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Navaneeth PV — Full-Stack & Frontend Developer Portfolio",
    description:
      "Interactive Developer Portfolio of Navaneeth PV featuring AI fashion platforms, educational portals, business directories, and real estate applications.",
    url: siteUrl,
    siteName: "Navaneeth PV Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Navaneeth PV - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navaneeth PV — Frontend Developer",
    description:
      "Interactive Developer Portfolio of Navaneeth PV specializing in React, Next.js, TypeScript & Node.js.",
    creator: "@navaneethpv",
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"],
  },
};

// JSON-LD Structured Data Schema for Google Search Knowledge Graph
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Navaneeth PV",
      jobTitle: "Frontend Developer & Full-Stack Engineer",
      url: siteUrl,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      sameAs: [
        "https://github.com/navaneethpv",
        "https://www.linkedin.com/in/navaneethpv",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Frontend Engineering",
        "Web Vitals & Performance",
      ],
      description:
        "Full-Stack & Frontend Developer specializing in React, Next.js, TypeScript, and modern web application development.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Navaneeth PV Portfolio",
      description: "Developer Portfolio of Navaneeth PV",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${inter.variable} ${oswald.variable} ${caveat.variable} ${ibmPlexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
