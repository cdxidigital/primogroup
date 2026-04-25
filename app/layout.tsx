import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Primo Pools | Premium Luxury Pool Construction Perth",
  description:
    "Western Australia's premier luxury pool construction company. 20+ years experience, 500+ completed projects. Transform your backyard into an oasis.",
  keywords: [
    "luxury pools",
    "pool construction",
    "Perth pools",
    "Western Australia",
    "pool builders",
    "custom pools",
    "swimming pool design",
  ],
  authors: [{ name: "Primo Pools" }],
  openGraph: {
    title: "Primo Pools | Premium Luxury Pool Construction Perth",
    description:
      "Western Australia's premier luxury pool construction company. Transform your backyard into an oasis.",
    url: "https://primopools.com.au",
    siteName: "Primo Pools",
    locale: "en_AU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1B4332",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
