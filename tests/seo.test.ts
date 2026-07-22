import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import {
  buildPageMetadata,
  buildSiteSchema,
  spanishMarketAlternates
} from "@/lib/seo";

describe("SEO helpers", () => {
  it("builds complete canonical social metadata", () => {
    const metadata = buildPageMetadata({
      title: "Product Sourcing in Yiwu, China",
      description: "Compare suppliers and coordinate samples in Yiwu.",
      path: "/services/product-sourcing"
    });

    expect(metadata.title).toEqual({ absolute: "Product Sourcing in Yiwu, China | YIWULANE" });
    expect(metadata.alternates?.canonical).toBe("https://www.yiwulane.com/services/product-sourcing");
    expect(metadata.openGraph).toMatchObject({
      title: "Product Sourcing in Yiwu, China | YIWULANE",
      url: "https://www.yiwulane.com/services/product-sourcing"
    });
    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
      title: "Product Sourcing in Yiwu, China | YIWULANE"
    });
  });

  it("keeps review-stage pages crawlable but out of the index", () => {
    const metadata = buildPageMetadata({
      title: "Draft resource",
      description: "Awaiting subject-matter review.",
      path: "/resources/draft",
      index: false
    });

    expect(metadata.robots).toMatchObject({ index: false, follow: true });
  });

  it("uses stable linked identifiers for the site entities", () => {
    const schema = buildSiteSchema();
    expect(schema["@graph"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ "@id": "https://www.yiwulane.com/#organization" }),
        expect.objectContaining({ "@id": "https://www.yiwulane.com/#website" })
      ])
    );
    expect(schema["@graph"][0]).toMatchObject({
      knowsAbout: expect.arrayContaining(["Yiwu product sourcing", "quality control", "order consolidation"]),
      areaServed: expect.arrayContaining([
        expect.objectContaining({ "@type": "Country", name: "Mexico" }),
        expect.objectContaining({ "@type": "Country", name: "Spain" })
      ])
    });
  });

  it("provides reciprocal Spanish market alternates", () => {
    expect(spanishMarketAlternates).toMatchObject({
      es: "/es",
      "es-MX": "/es/mexico",
      "es-ES": "/es/espana",
      "es-CO": "/es/colombia",
      "es-CL": "/es/chile",
      "es-PE": "/es/peru",
      "es-AR": "/es/argentina",
      "x-default": "/es"
    });
  });
});

describe("sitemap", () => {
  it("contains only canonical indexable routes without fake lastmod values", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(new Set(urls).size).toBe(urls.length);
    expect(urls.every((url) => url.startsWith("https://www.yiwulane.com"))).toBe(true);
    expect(urls.some((url) => url.includes("/resources/"))).toBe(false);
    expect(urls.some((url) => url.includes("/es/recursos/"))).toBe(false);
    expect(urls).not.toContain("https://www.yiwulane.com/resources");
    expect(urls).not.toContain("https://www.yiwulane.com/es/recursos");
    expect(urls).not.toContain("https://www.yiwulane.com/privacy");
    expect(urls).not.toContain("https://www.yiwulane.com/terms");
    expect(urls).not.toContain("https://www.yiwulane.com/cookie-policy");
    expect(urls).toContain("https://www.yiwulane.com/compare/yiwu-sourcing-agent-vs-direct-sourcing");
    expect(urls).toContain("https://www.yiwulane.com/es/comparar/agente-de-compras-vs-compra-directa");
    expect(entries.every((entry) => entry.lastModified === undefined)).toBe(true);
  });
});
