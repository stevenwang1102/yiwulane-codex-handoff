import type { Metadata } from "next";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/site-url";

const defaultSocialImage = absoluteUrl("/opengraph-image");

export const organizationId = absoluteUrl("/#organization");
export const websiteId = absoluteUrl("/#website");

export const spanishMarketAlternates = {
  es: "/es",
  "es-MX": "/es/mexico",
  "es-ES": "/es/espana",
  "es-CO": "/es/colombia",
  "es-CL": "/es/chile",
  "es-PE": "/es/peru",
  "es-AR": "/es/argentina",
  "x-default": "/es"
} as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  locale?: string;
  type?: "website" | "article";
  languages?: Record<string, string>;
};

export function buildPageMetadata({
  title,
  description,
  path,
  index = true,
  locale = "en_US",
  type = "website",
  languages
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const fullTitle = title.includes("YIWULANE") ? title : `${title} | YIWULANE`;
  const languageUrls = languages
    ? Object.fromEntries(Object.entries(languages).map(([language, url]) => [language, absoluteUrl(url)]))
    : undefined;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: {
      canonical,
      languages: languageUrls
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: site.name,
      type,
      locale,
      images: [{ url: defaultSocialImage, width: 1200, height: 630, alt: "YIWULANE sourcing and fulfillment" }]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [defaultSocialImage]
    },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
        }
      : { index: false, follow: true, googleBot: { index: false, follow: true } }
  };
}

export function buildSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: site.name,
        url: absoluteUrl("/"),
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/yiwulane-logo-source.png")
        },
        description:
          "Yiwu-based sourcing, quality control, branded packaging, and fulfillment support for overseas e-commerce sellers.",
        knowsAbout: [
          "Yiwu product sourcing",
          "supplier research",
          "sample coordination",
          "quality control",
          "branded packaging",
          "order consolidation",
          "e-commerce fulfillment",
          "hybrid inventory planning"
        ],
        areaServed: [
          { "@type": "Country", name: "Mexico" },
          { "@type": "Country", name: "Spain" },
          { "@type": "Country", name: "Colombia" },
          { "@type": "Country", name: "Chile" },
          { "@type": "Country", name: "Peru" },
          { "@type": "Country", name: "Argentina" }
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: site.emails.sales,
            telephone: site.whatsapp.display,
            availableLanguage: ["English", "Spanish"]
          },
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: site.emails.support,
            availableLanguage: ["English", "Spanish"]
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: absoluteUrl("/"),
        name: site.name,
        description:
          "Product sourcing, quality control, packaging, and China plus local inventory planning for e-commerce sellers.",
        publisher: { "@id": organizationId },
        inLanguage: ["en", "es"]
      }
    ]
  };
}

export function buildWebPageSchema({
  name,
  description,
  path,
  language = "en"
}: {
  name: string;
  description: string;
  path: string;
  language?: string;
}) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    inLanguage: language
  };
}

export function buildServiceSchema({ name, description, path }: { name: string; description: string; path: string }) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    url,
    provider: { "@id": organizationId }
  };
}

export function buildBreadcrumbSchema(items: { label: string; href?: string }[], homeLabel = "Home") {
  const crumbs = [{ label: homeLabel, href: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {})
    }))
  };
}

export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };
}
