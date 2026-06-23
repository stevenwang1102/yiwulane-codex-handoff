import { z } from "zod";

const urlField = z
  .string()
  .trim()
  .max(500)
  .optional()
  .or(z.literal(""));

export const leadSchema = z.object({
  type: z.enum(["pilot", "contact", "quote"]),
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  company: z.string().trim().min(1, "Company is required").max(120),
  email: z.string().trim().email("Use a valid business email").max(160),
  whatsapp: z.string().trim().max(80).optional().or(z.literal("")),
  country: z.string().trim().min(1, "Country is required").max(100),
  platform: z.string().trim().min(1, "Selling platform is required").max(80),
  storeUrl: urlField,
  dailyOrders: z.string().trim().max(80).optional().or(z.literal("")),
  productUrls: z.array(z.string().trim().url("Use a valid product URL").max(500)).max(3).default([]),
  sharedFileUrl: urlField,
  targetMarket: z.string().trim().max(120).optional().or(z.literal("")),
  skuCount: z.string().trim().max(40).optional().or(z.literal("")),
  monthlyVolume: z.string().trim().max(80).optional().or(z.literal("")),
  supplierPrice: z.string().trim().max(80).optional().or(z.literal("")),
  targetPrice: z.string().trim().max(80).optional().or(z.literal("")),
  customPackaging: z.boolean().default(false),
  privateLabel: z.boolean().default(false),
  chinaDirect: z.boolean().default(false),
  overseasWarehousing: z.boolean().default(false),
  serviceInterest: z.string().trim().max(120).optional().or(z.literal("")),
  mainProblem: z.string().trim().min(1, "Tell us what you want to solve").max(1500),
  privacyConsent: z.literal(true, {
    error: "Privacy consent is required"
  }),
  pageSource: z.string().trim().max(200).optional(),
  website: z.string().max(0, "Submission rejected").optional().or(z.literal(""))
});

export type LeadPayload = z.infer<typeof leadSchema>;

export function validateLead(input: unknown) {
  return leadSchema.safeParse(input);
}
