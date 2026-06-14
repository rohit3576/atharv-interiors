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
  title: "Atharva Interiors | Interior Designers & Architectural Services in Virar",
  description: "Atharva Interiors provides premium interior design, architectural services, renovation, carpentry, civil work, and space planning solutions in Virar, Palghar, and surrounding regions.",
  keywords: [
    "Interior Designer Virar",
    "Interior Designer Palghar",
    "Architectural Services Virar",
    "Home Interior Design",
    "Modular Kitchen Virar",
    "Renovation Services",
    "Civil Work",
    "Space Planning",
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
    title: "Atharva Interiors | Interior Designers & Architectural Services in Virar",
    description: "Atharva Interiors provides premium interior design, architectural services, renovation, carpentry, civil work, and space planning solutions in Virar, Palghar, and surrounding regions.",
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
    title: "Atharva Interiors | Interior Designers & Architectural Services in Virar",
    description: "Atharva Interiors provides premium interior design, architectural services, renovation, carpentry, civil work, and space planning solutions in Virar, Palghar, and surrounding regions.",
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
      "streetAddress": "Shop No.191, Global City, J-Rustomjee, Avenue, Building No.33",
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
