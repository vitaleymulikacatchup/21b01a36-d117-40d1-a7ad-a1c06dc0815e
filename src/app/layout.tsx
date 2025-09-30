import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Solana Ventures",
  description: "Solana Ventures brings a fun alien mascot to crypto—easy steps to buy, clear tokenomics, and a community-first vibe.",
  keywords: ["solana ventures", "memecoin", "alien mascot", "tokenomics", "how to buy", "crypto landing", "solana token"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Solana Ventures — playful alien-led token",
    description: "Solana Ventures brings a fun alien mascot to crypto—easy steps to buy, clear tokenomics, and a community-first vibe.",
    type: "website",
    url: "/",
    siteName: "Solana Ventures",
    images: [{
      url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/tmp/design-a-simple-high-contrast-logo-for-s-1759257333087-99832db0.jpg",
      width: 1200,
      height: 630,
      alt: "Friendly alien mascot"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solana Ventures — playful alien-led token",
    description: "Solana Ventures brings a fun alien mascot to crypto—easy steps to buy, clear tokenomics, and a community-first vibe.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/tmp/design-a-simple-high-contrast-logo-for-s-1759257333087-99832db0.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}