import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/content/site";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      note="This privacy page is a launch placeholder and requires qualified legal review before publication."
      contactEmail={site.emails.privacy}
    />
  );
}
