import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPublicEnv } from "@/lib/env";
import { absoluteUrl } from "@/lib/site-url";
import { buildSiteSchema } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.yiwulane.com"),
  title: {
    default: "YIWULANE | Yiwu Sourcing, QC & E-commerce Fulfillment",
    template: "%s | YIWULANE"
  },
  description:
    "Source products, control quality, create branded packaging, and fulfill e-commerce orders with a Yiwu-based team and flexible China + local inventory planning.",
  alternates: {
    canonical: absoluteUrl("/"),
    languages: {
      en: absoluteUrl("/"),
      es: absoluteUrl("/es"),
      "x-default": absoluteUrl("/")
    }
  },
  openGraph: {
    title: "YIWULANE | Yiwu Sourcing, QC & E-commerce Fulfillment",
    description:
      "Source products, control quality, create branded packaging, and fulfill e-commerce orders with a Yiwu-based team.",
    url: absoluteUrl("/"),
    siteName: "YIWULANE",
    type: "website",
    locale: "en_US",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: "YIWULANE sourcing and fulfillment" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "YIWULANE | Yiwu Sourcing, QC & E-commerce Fulfillment",
    description:
      "Source products, control quality, create branded packaging, and fulfill e-commerce orders with a Yiwu-based team.",
    images: [absoluteUrl("/opengraph-image")]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: {
      "p:domain_verify": "15d1c25789ca8245f2c16940c82cdb93"
    }
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const env = getPublicEnv();
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <JsonLd data={buildSiteSchema()} />
        <a className="skip-link button button-primary" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent
          ga4Id={env.ga4Id}
          clarityId={env.clarityId}
          metaPixelId={env.metaPixelId}
          tiktokPixelId={env.tiktokPixelId}
        />
      </body>
    </html>
  );
}
