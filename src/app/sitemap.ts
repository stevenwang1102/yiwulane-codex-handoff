import type { MetadataRoute } from "next";
import { resources } from "@/content/resources";
import { services } from "@/content/services";
import { solutions } from "@/content/solutions";
import { getSiteUrl } from "@/lib/site-url";

const staticRoutes = [
  "",
  "/how-it-works",
  "/es",
  "/pilot",
  "/case-studies",
  "/case-studies/representative-home-organization-project",
  "/resources",
  "/about",
  "/contact",
  "/quote",
  "/privacy",
  "/cookie-policy",
  "/terms"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const routes = [
    ...staticRoutes,
    ...services.map((service) => `/services/${service.slug}`),
    ...solutions.map((solution) => `/solutions/${solution.slug}`),
    ...resources.map((resource) => `/resources/${resource.slug}`)
  ];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
