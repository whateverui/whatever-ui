import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Whatever Codes - React/Next.js UI & Hooks Library",
    template: "%s | Whatever Codes",
  },
  description:
    "Whatever Codes offers a powerful UI and hooks library for React and Next.js. Explore components at ui.whatever.codes, built for developers.",
  keywords: [
    "React UI library",
    "Next.js hooks",
    "React components",
    "Next.js UI",
    "monorepo",
    "web development",
    "TypeScript",
    "JavaScript",
  ],
  authors: [{ name: "Your Name", url: "https://whatever.codes" }],
  creator: "Your Name",
  publisher: "Whatever Codes",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  alternates: {
    canonical: "https://whatever.codes",
  },
  openGraph: {
    title: "Whatever Codes - React/Next.js UI & Hooks Library",
    description:
      "Discover a modern UI and hooks library for React/Next.js at Whatever Codes. Check out components at ui.whatever.codes.",
    url: "https://whatever.codes",
    siteName: "Whatever Codes",
    images: [
      {
        url: "https://whatever.codes/og-image.jpg", // Replace with your OG image
        width: 1200,
        height: 630,
        alt: "Whatever Codes UI Library",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whatever Codes - React/Next.js UI & Hooks Library",
    description:
      "Build faster with Whatever Codes’ React/Next.js UI and hooks library. Explore at ui.whatever.codes.",
    images: ["https://whatever.codes/og-image.jpg"],
    creator: "@YourTwitterHandle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        {/* Optional: Add JSON-LD for structured data */}
        {/* <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Whatever Codes",
            url: "https://whatever.codes",
          })}
        </script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}