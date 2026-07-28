import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter_Tight, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Navaneeth PV — Frontend Developer",
  description:
    "Portfolio of Navaneeth PV — Frontend Developer specializing in clean, modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light scroll-smooth ${inter.variable} ${interTight.variable} ${ibmPlexMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
