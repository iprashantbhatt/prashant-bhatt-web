import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  // 1. The Title Google sees
  title: "Prashant Bhatt",

  // 2. The description under the link on Google
  description:
    "Personal portfolio of Prashant Bhatt. Exploring the intersection of Banking, AI Technology, and Web Development. Building agents and futuristic web experiences.",

  // 3. Keywords aid search engines in understanding your site
  keywords: [
    "Prashant Bhatt",
    "Banker",
    "AI Enthusiast",
    "Web Developer",
    "Next.js",
    "India",
  ],

  // 4. How it looks when shared on Twitter/X or LinkedIn (Open Graph)
  openGraph: {
    title: "Prashant Bhatt - Digital Explorer",
    description:
      "Banker by profession, Technologist by interest. Check out my latest AI and Web projects.",
    url: "https://prashantbhatt.net", // Your actual URL
    siteName: "Prashant Bhatt Portfolio",
    images: [
      {
        url: "/profile.jpg", // Make sure you put your image here!
        width: 1200,
        height: 630,
        alt: "Prashant Bhatt Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 5. Specifically for Twitter/X cards
  twitter: {
    card: "summary_large_image",
    title: "Prashant Bhatt | Digital Explorer",
    description: "Banker by profession, Technologist by interest.",
    creator: "@iAmPrashantB", // Your X handle
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <div className="flex min-h-screen w-full items-center justify-center bg-gray-900/40">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
