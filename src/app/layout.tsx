import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AGENCY_INFO } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B6B58",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sutradigital.in"),
  title: {
    default: `${AGENCY_INFO.name} — ${AGENCY_INFO.hindiName} | Indian Digital Engineering & Growth Agency`,
    template: `%s | ${AGENCY_INFO.name}`,
  },
  description:
    "We empower Indian enterprises, startups, and global visionaries to build high-converting web applications, fluid mobile products, and compound SEO growth engines with timeless craftsmanship.",
  keywords: [
    "Indian Digital Agency",
    "Next.js Development India",
    "Mobile App Development Mumbai Bengaluru",
    "UPI App Integration",
    "Technical SEO India",
    "Web Development Agency",
    "Sutra Digital",
  ],
  authors: [{ name: AGENCY_INFO.name, url: "https://sutradigital.in" }],
  creator: AGENCY_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sutradigital.in",
    title: `${AGENCY_INFO.name} — Crafting India's Premier Digital Experiences`,
    description: AGENCY_INFO.shortDescription,
    siteName: AGENCY_INFO.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${AGENCY_INFO.name} Digital Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${AGENCY_INFO.name} — Indian Digital Engineering Agency`,
    description: AGENCY_INFO.shortDescription,
    creator: "@sutradigital",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917] selection:bg-[#0B6B58] selection:text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
