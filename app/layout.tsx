import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "David's Stump Grinding & Landscaping | Professional Tree Services",
  description:
    "Expert stump grinding, firewood delivery, tree planting, and landscaping services. Professional, reliable, and affordable. Call (734) 579-6557 for a free estimate.",
  keywords: [
    "stump grinding",
    "tree removal",
    "firewood delivery",
    "landscaping services",
    "tree planting",
    "rock installation",
    "yard cleanup",
    "professional landscaping",
    "stump removal",
    "tree services",
  ],
  authors: [{ name: "David's Stump Grinding & Landscaping" }],
  creator: "David's Stump Grinding & Landscaping",
  publisher: "David's Stump Grinding & Landscaping",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://davids-stump-grinding.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "David's Stump Grinding & Landscaping | Professional Tree Services",
    description:
      "Expert stump grinding, firewood delivery, tree planting, and landscaping services. Professional, reliable, and affordable.",
    url: "https://davids-stump-grinding.com",
    siteName: "David's Stump Grinding & Landscaping",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "David's Stump Grinding & Landscaping Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David's Stump Grinding & Landscaping | Professional Tree Services",
    description:
      "Expert stump grinding, firewood delivery, tree planting, and landscaping services. Professional, reliable, and affordable.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
  category: "Landscaping Services",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "David's Stump Grinding & Landscaping",
              description: "Professional stump grinding, firewood delivery, tree planting, and landscaping services",
              url: "https://davids-stump-grinding.com",
              telephone: "(734) 579-6557",
              email: "baggygecco@gmail.com",
              priceRange: "$$",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 42.3314,
                  longitude: -83.0458,
                },
                geoRadius: 50000,
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Landscaping Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Stump Grinding",
                      description: "Professional stump removal and grinding services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Firewood Delivery",
                      description: "Seasoned firewood delivery and stacking",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tree Planting",
                      description: "Professional tree and plant installation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Rock Installation",
                      description: "Decorative rock and stone landscaping",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "47",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
