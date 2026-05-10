import type { Metadata, Viewport } from "next";
import { Cinzel, Spectral } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

// Modern Next.js Viewport configuration (sets background themes on mobile devices)
export const viewport: Viewport = {
  themeColor: "#050503",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// State-of-the-art SEO and Social Graph Metadata Configuration
export const metadata: Metadata = {
  title: "Forge — Harness the Energy",
  description:
    "Most apps treat compulsive behavior as disease. Forge inverts it — your urges are raw fuel. Strike them into something unbreakable. Local-only. No account. No exposure.",
  keywords: [
    "Forge",
    "Harness Protocol",
    "habit tracking",
    "self-discipline",
    "mental toughness",
    "local-only",
    "privacy",
    "addiction recovery",
    "dopamine detox",
    "urge redirection",
  ],
  authors: [{ name: "Forge Operator", url: "https://forgeharness.pro" }],
  creator: "Forge Protocol",
  publisher: "Forge Protocol",
  metadataBase: new URL("https://forgeharness.pro"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Forge — Harness the Energy",
    description:
      "Most apps treat compulsive behavior as disease. Forge inverts it — your urges are raw fuel. Strike them into something unbreakable. Local-only. No account. No exposure.",
    url: "https://forgeharness.pro",
    siteName: "Forge",
    images: [
      {
        url: "/og-image.png", // Fallback path for social preview
        width: 1200,
        height: 630,
        alt: "Forge — Harness the Energy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge — Harness the Energy",
    description:
      "Most apps treat compulsive behavior as disease. Forge inverts it — your urges are raw fuel. Strike them into something unbreakable.",
    images: ["/og-image.png"],
    creator: "@forgeharness",
  },
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
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${spectral.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
