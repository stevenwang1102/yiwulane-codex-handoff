import { expect, test } from "@playwright/test";
import { JSDOM } from "jsdom";

const productionOrigin = "https://www.yiwulane.com";
const noindexRoutes = [
  "/resources",
  "/resources/how-to-source-products-from-yiwu",
  "/es/recursos",
  "/es/recursos/como-comprar-en-yiwu-desde-mexico",
  "/privacy",
  "/terms",
  "/cookie-policy"
];

test("indexable sitemap routes return complete server-rendered SEO markup", async ({ request }) => {
  const sitemapResponse = await request.get("/sitemap.xml");
  expect(sitemapResponse.ok()).toBe(true);
  expect(sitemapResponse.headers()["content-type"]).toContain("application/xml");

  const sitemapDocument = new JSDOM(await sitemapResponse.text(), { contentType: "text/xml" }).window.document;
  const urls = Array.from(sitemapDocument.querySelectorAll("url > loc"), (node) => node.textContent || "");
  const titles: string[] = [];
  const descriptions: string[] = [];

  expect(urls.length).toBeGreaterThan(10);
  expect(new Set(urls).size).toBe(urls.length);

  for (const url of urls) {
    expect(url.startsWith(productionOrigin)).toBe(true);
    const path = new URL(url).pathname;
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);

    const document = new JSDOM(await response.text()).window.document;
    const description = document.querySelector('meta[name="description"]')?.getAttribute("content") || "";
    expect(document.title.length, `${path} title`).toBeGreaterThan(10);
    expect(description.length, `${path} description`).toBeGreaterThan(40);
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute("href"), `${path} canonical`).toBe(url);
    expect(document.querySelector('meta[property="og:title"]')?.getAttribute("content"), `${path} og:title`).toBeTruthy();
    expect(document.querySelector('meta[property="og:description"]')?.getAttribute("content"), `${path} og:description`).toBeTruthy();
    expect(document.querySelector('meta[property="og:url"]')?.getAttribute("content"), `${path} og:url`).toBe(url);
    expect(document.querySelectorAll("h1").length, `${path} h1 count`).toBe(1);

    const robots = document.querySelector('meta[name="robots"]')?.getAttribute("content") || "";
    expect(robots, `${path} robots`).not.toContain("noindex");

    for (const script of document.querySelectorAll('script[type="application/ld+json"]')) {
      expect(() => JSON.parse(script.textContent || ""), `${path} JSON-LD`).not.toThrow();
    }

    titles.push(document.title);
    descriptions.push(description);
  }

  expect(new Set(titles).size, "duplicate titles").toBe(titles.length);
  expect(new Set(descriptions).size, "duplicate descriptions").toBe(descriptions.length);
});

test("apex host permanently redirects to the canonical www host", async ({ request }) => {
  const response = await request.get("/about", {
    headers: { Host: "yiwulane.com" },
    maxRedirects: 0
  });

  expect(response.status()).toBe(308);
  expect(response.headers().location).toBe("https://www.yiwulane.com/about");
});

test("review-stage and legal-summary pages are noindex and absent from sitemap", async ({ request }) => {
  const sitemap = await (await request.get("/sitemap.xml")).text();

  for (const path of noindexRoutes) {
    expect(sitemap).not.toContain(`${productionOrigin}${path}<`);
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
    const document = new JSDOM(await response.text()).window.document;
    expect(document.querySelector('meta[name="robots"]')?.getAttribute("content"), path).toContain("noindex");
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute("href"), path).toBe(`${productionOrigin}${path}`);
  }
});

test("Spanish market hreflang sets are reciprocal", async ({ request }) => {
  const routes = ["/es", "/es/mexico", "/es/espana", "/es/colombia", "/es/chile", "/es/peru", "/es/argentina"];
  const expectedLanguages = ["es", "es-MX", "es-ES", "es-CO", "es-CL", "es-PE", "es-AR", "x-default"];

  for (const path of routes) {
    const document = new JSDOM(await (await request.get(path)).text()).window.document;
    const languages = Array.from(document.querySelectorAll('link[rel="alternate"][hreflang]'), (node) => node.getAttribute("hreflang"));
    expect(languages.sort(), path).toEqual(expectedLanguages.sort());
    expect(document.querySelector('[lang="es"]'), `${path} Spanish language scope`).not.toBeNull();
  }
});

test("robots and llms files are public and internal sitemap links resolve", async ({ request }) => {
  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain("Sitemap: https://www.yiwulane.com/sitemap.xml");
  expect(robots).toContain("Disallow: /api/");

  const llmsResponse = await request.get("/llms.txt");
  expect(llmsResponse.ok()).toBe(true);
  expect(llmsResponse.headers()["content-type"]).toContain("text/plain");
  expect(await llmsResponse.text()).toContain("YIWULANE is a Yiwu-based sourcing and fulfillment service");

  const sitemapDocument = new JSDOM(await (await request.get("/sitemap.xml")).text(), { contentType: "text/xml" }).window.document;
  const paths = Array.from(sitemapDocument.querySelectorAll("url > loc"), (node) => new URL(node.textContent || "").pathname);
  const linkedPaths = new Set<string>();

  for (const path of paths) {
    const document = new JSDOM(await (await request.get(path)).text()).window.document;
    for (const anchor of document.querySelectorAll<HTMLAnchorElement>("a[href]")) {
      const href = anchor.getAttribute("href") || "";
      if (href.startsWith("/") && !href.startsWith("//")) linkedPaths.add(href.split("#")[0] || "/");
    }
  }

  for (const path of linkedPaths) {
    expect((await request.get(path)).status(), `internal link ${path}`).toBeLessThan(400);
  }
});
