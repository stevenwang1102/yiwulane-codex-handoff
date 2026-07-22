import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { solutions } from "@/content/solutions";
import { spanishMarkets } from "@/content/spanish-markets";
import { getSiteUrl } from "@/lib/site-url";
import { spanishMarketAlternates } from "@/lib/seo";

const staticRoutes = [
  "",
  "/how-it-works",
  "/compare/yiwu-sourcing-agent-vs-direct-sourcing",
  "/es",
  "/es/comparar/agente-de-compras-vs-compra-directa",
  "/pilot",
  "/case-studies",
  "/case-studies/representative-home-organization-project",
  "/about",
  "/contact",
  "/quote"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const routes = [
    ...staticRoutes,
    ...services.map((service) => `/services/${service.slug}`),
    ...solutions.map((solution) => `/solutions/${solution.slug}`),
    ...spanishMarkets.map((market) => `/es/${market.path}`)
  ];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
    ...(route === "/es" || route.startsWith("/es/")
      ? {
          alternates: {
            languages: Object.fromEntries(
              Object.entries(spanishMarketAlternates).map(([language, path]) => [language, `${siteUrl}${path}`])
            )
          }
        }
      : {})
  }));
}
