import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://freeway.church'),
  title: "Freeway Church - Connect, Cultivate, Contribute",
  description: "Welcome to Freeway Church. Join us for worship services every Sunday at 10am. Connect with God and community, cultivate spiritual growth, and contribute to the world around you.",
  keywords: "Freeway Church, church, worship, community, faith, Sunday service",
  openGraph: {
    title: "Freeway Church - Connect, Cultivate, Contribute",
    description: "Welcome to Freeway Church. Join us for worship services every Sunday at 10am.",
    url: "https://freeway.church",
    siteName: "Freeway Church",
    images: [
      {
        url: "/images/logo-white-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Freeway Church",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freeway Church - Connect, Cultivate, Contribute",
    description: "Welcome to Freeway Church. Join us for worship services every Sunday at 10am.",
    images: ["/images/logo-white-horizontal.png"],
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
  alternates: {
    canonical: "https://freeway.church",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Church",
              "name": "Freeway Church",
              "description": "Connect, Cultivate, Contribute",
              "url": "https://freeway.church",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "28900 B Drive North",
                "addressLocality": "Albion",
                "addressRegion": "MI",
                "postalCode": "49224",
                "addressCountry": "US"
              },
              "telephone": "(517) 798-0571",
              "sameAs": [
                "https://www.facebook.com/www.freeway.church",
                "https://instagram.com/freeway.church",
                "https://www.youtube.com/channel/UCRrCQnXSguf6UYfNQORCN3Q"
              ],
              "openingHours": "Su 09:15-12:00,18:00-19:30",
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}