import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: "How the YIWULANE website handles inquiry details, contact information, cookie preferences, and optional analytics.",
  path: "/privacy",
  index: false
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      note="This operational summary describes the current website behavior. Jurisdiction-specific language still requires qualified legal review."
      contactEmail={site.emails.privacy}
      sections={[
        {
          title: "Information submitted through forms",
          body: "Inquiry forms may collect contact details, business and store information, destination market, product links, SKU and order ranges, service interests, and the message you choose to send."
        },
        {
          title: "How inquiry information is used",
          body: "Submitted information is used to review the request, respond to the sender, and prepare relevant sourcing, quality, packaging, fulfillment, or route-planning next steps."
        },
        {
          title: "Analytics and advertising measurement",
          body: "Optional analytics and advertising measurement scripts load only after consent. Functional storage is used for cookie preferences and essential website behavior."
        },
        {
          title: "Privacy questions",
          body: `Questions about website data handling can be sent to ${site.emails.privacy}.`
        }
      ]}
    />
  );
}
