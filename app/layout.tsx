import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { companyInfo } from "@/data/company";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atharvainteriors.com"),
  title: {
    default: `${companyInfo.name} | Premium Interior Designers in Virar & Palghar`,
    template: `%s | ${companyInfo.name}`,
  },
  description: `${companyInfo.tagline}. 23+ years of excellence in Residential & Commercial Interior Design and Architectural Services in Virar, Palghar, and Mumbai.`,
  keywords: [
    "Interior Designer Virar",
    "Interior Designer Palghar",
    "Interior Designer Mumbai",
    "Modular Kitchen Virar",
    "Home Interior Design",
    "Architectural Services",
    "Commercial Interior Design",
    "Atharva Interiors",
  ],
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  publisher: companyInfo.name,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://atharvainteriors.com", // Replace with actual domain
    siteName: companyInfo.name,
    title: `${companyInfo.name} | Premium Interior Design Services`,
    description: `Transforming spaces into beautiful living experiences with 23+ years of expertise.`,
    images: [
      {
        url: "/og-image.jpg", // Create this asset later
        width: 1200,
        height: 630,
        alt: `${companyInfo.name} Interior Design`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: companyInfo.name,
    description: companyInfo.tagline,
    images: ["/og-image.jpg"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": companyInfo.name,
    "image": "https://atharvainteriors.com/logo.png",
    "@id": "https://atharvainteriors.com",
    "url": "https://atharvainteriors.com",
    "telephone": companyInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 191, Global City, J-Rustomjee Avenue, Building No. 33",
      "addressLocality": "Virar West",
      "addressRegion": "MH",
      "postalCode": "401303",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.4708,
      "longitude": 72.8027
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    },
    "sameAs": [
      companyInfo.socials.facebook,
      companyInfo.socials.instagram,
      companyInfo.socials.linkedin
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
