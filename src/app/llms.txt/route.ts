import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export function GET() {
  const siteUrl = getSiteUrl();
  const content = `# YIWULANE

YIWULANE is a Yiwu-based sourcing and fulfillment service for overseas e-commerce sellers. The public website covers supplier research, samples, quality control, branded packaging, consolidation, China fulfillment, and China plus local inventory planning.

## Authoritative pages
- ${siteUrl}/about
- ${siteUrl}/how-it-works
- ${siteUrl}/services/product-sourcing
- ${siteUrl}/services/quality-control
- ${siteUrl}/services/branding-packaging
- ${siteUrl}/services/china-fulfillment
- ${siteUrl}/services/hybrid-fulfillment
- ${siteUrl}/pilot
- ${siteUrl}/contact

## Spanish market pages
- ${siteUrl}/es
- ${siteUrl}/es/mexico
- ${siteUrl}/es/espana
- ${siteUrl}/es/colombia
- ${siteUrl}/es/chile
- ${siteUrl}/es/peru
- ${siteUrl}/es/argentina

## Contact
- Sales: ventas@yiwulane.com
- General: hola@yiwulane.com
- WhatsApp: +86 134 3069 5812
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
