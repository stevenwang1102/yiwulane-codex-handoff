import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { getPublicEnv } from "@/lib/env";
import { absoluteUrl } from "@/lib/site-url";
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
    canonical: absoluteUrl("/")
  },
  openGraph: {
    title: "YIWULANE | Yiwu Sourcing, QC & E-commerce Fulfillment",
    description:
      "Source products, control quality, create branded packaging, and fulfill e-commerce orders with a Yiwu-based team.",
    url: absoluteUrl("/"),
    siteName: "YIWULANE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const env = getPublicEnv();
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <a className="skip-link button button-primary" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent ga4Id={env.ga4Id} clarityId={env.clarityId} />
      </body>
    </html>
  );
}
