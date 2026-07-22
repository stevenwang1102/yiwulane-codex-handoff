import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms",
  description: "Current YIWULANE service scope, estimate boundaries, seller responsibilities, and prohibited-product rules.",
  path: "/terms",
  index: false
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms"
      note="This operational summary reflects the service boundaries described across the website. Final contractual language requires qualified legal review."
      contactEmail={site.emails.general}
      sections={[
        {
          title: "Service scope",
          body: "The agreed scope may include supplier research, sample coordination, quality checks, packaging preparation, consolidation, fulfillment, or inventory route planning. Each project scope is confirmed separately."
        },
        {
          title: "Estimates and changing conditions",
          body: "Product cost, MOQ, production timing, freight, customs conditions, and route availability depend on the supplier, product, destination, platform, and selected service level."
        },
        {
          title: "Seller responsibilities",
          body: "The seller remains responsible for product and marketplace compliance, tax, customs and importer obligations, listing claims, customer policies, and final commercial decisions."
        },
        {
          title: "Unsupported products",
          body: "YIWULANE does not support counterfeit, infringing, prohibited, or high-risk products. Testing or certification may require a qualified third party."
        }
      ]}
    />
  );
}
