import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Cookie Policy",
  description: "How YIWULANE uses functional storage and consent-controlled analytics and advertising measurement.",
  path: "/cookie-policy",
  index: false
});

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      note="Functional storage supports cookie preferences. Optional analytics and advertising measurement load only after consent."
      contactEmail={site.emails.privacy}
      sections={[
        {
          title: "Functional storage",
          body: "The website stores the visitor's cookie preference so the selected consent choice can be respected on later page views."
        },
        {
          title: "Optional measurement",
          body: "When configured, Google Analytics, Microsoft Clarity, Meta Pixel, and TikTok Pixel may load only after the visitor accepts analytics."
        },
        {
          title: "Changing a preference",
          body: "Visitors can reopen Cookie settings from the footer and change the stored preference. Declining analytics does not block the public website content."
        }
      ]}
    />
  );
}
