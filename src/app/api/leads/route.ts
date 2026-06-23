import { NextResponse } from "next/server";
import { deliverLead } from "@/lib/lead-delivery";
import { validateLead } from "@/lib/lead-schema";

function fieldErrors(error: { issues: { path: PropertyKey[]; message: string }[] }) {
  return Object.fromEntries(error.issues.map((issue) => [String(issue.path[0] ?? "form"), issue.message]));
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = validateLead(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please review the highlighted fields.",
        fieldErrors: fieldErrors(parsed.error)
      }
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: false, message: "Submission rejected." });
  }

  const delivered = await deliverLead(parsed.data);

  if (!delivered.ok) {
    return NextResponse.json(
      {
        ok: false,
        message:
          delivered.reason === "missing-webhook"
            ? "The lead delivery integration is not configured yet. Please use the business contact path once it is approved."
            : "We could not deliver the form right now. Please try again later.",
        requestId: delivered.requestId
      }
    );
  }

  return NextResponse.json({ ok: true, requestId: delivered.requestId });
}
