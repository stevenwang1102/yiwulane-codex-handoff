export type PublicEnv = {
  siteUrl: string;
  ga4Id?: string;
  clarityId?: string;
  bookingUrl?: string;
  whatsappUrl?: string;
};

export function getPublicEnv(): PublicEnv {
  return {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.yiwulane.com",
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID || undefined,
    clarityId: process.env.NEXT_PUBLIC_CLARITY_ID || undefined,
    bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || undefined,
    whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL || undefined
  };
}

export function getServerEnv() {
  return {
    businessEmail: process.env.BUSINESS_EMAIL || undefined,
    leadWebhookUrl: process.env.LEAD_WEBHOOK_URL || undefined,
    leadWebhookSecret: process.env.LEAD_WEBHOOK_SECRET || undefined
  };
}
