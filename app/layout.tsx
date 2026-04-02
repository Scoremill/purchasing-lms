
export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Providers from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";
import PersistentHeader from "@/components/persistent-header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: "Residential Purchasing Course - Build Faster. Spend Smarter.",
  description: "Master purchasing management for residential construction with this intensive 12-module course. Learn material management, logistics, vendor relationships, and data-driven procurement from industry experts.",
  keywords: ["purchasing", "construction", "materials", "procurement", "training", "course", "homebuilder"],
  authors: [{ name: "Strategem" }],
  openGraph: {
    title: "Residential Purchasing Course - Build Faster. Spend Smarter.",
    description: "Master purchasing management for residential construction with this intensive 12-module course.",
    url: "/",
    siteName: "Residential Purchasing Course",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Residential Purchasing Course",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Purchasing Course - Build Faster. Spend Smarter.",
    description: "Master purchasing management for residential construction with this intensive 12-module course.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={cn(inter.className, "antialiased font-sans flex flex-col min-h-screen")}>
        <Providers>
          <PersistentHeader />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
