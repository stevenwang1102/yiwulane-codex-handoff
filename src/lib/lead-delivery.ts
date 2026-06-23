import { getServerEnv } from "./env";
import type { LeadPayload } from "./lead-schema";

export type DeliveryResult =
  | { ok: true; requestId: string; mode: "webhook" }
  | { ok: false; requestId: string; reason: "missing-webhook" | "webhook-failed" };

export function createRequestId() {
  return `lead_${Date.now().toString(36)}_${crypto.randomUUID().slice(0, 8)}`;
}

export async function deliverLead(payload: LeadPayload): Promise<DeliveryResult> {
  const requestId = createRequestId();
  const env = getServerEnv();

  if (!env.leadWebhookUrl) {
    return { ok: false, requestId, reason: "missing-webhook" };
  }

  const response = await fetch(env.leadWebhookUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(env.leadWebhookSecret ? { authorization: `Bearer ${env.leadWebhookSecret}` } : {})
    },
    body: JSON.stringify({
      requestId,
      submittedAt: new Date().toISOString(),
      lead: payload
    })
  }).catch(() => null);

  if (!response?.ok) {
    return { ok: false, requestId, reason: "webhook-failed" };
  }

  return { ok: true, requestId, mode: "webhook" };
}
