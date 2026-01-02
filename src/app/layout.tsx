import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// =============================================================================
// 👉 SEO METADATA
// =============================================================================
// Edit the SEO settings in /src/data/siteConfig.ts to customize these values
// =============================================================================
export const metadata: Metadata = {
  title: siteConfig.seo.siteTitle,
  description: siteConfig.seo.siteDescription,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.seo.siteTitle,
    description: siteConfig.seo.siteDescription,
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.siteTitle,
    description: siteConfig.seo.siteDescription,
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
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
