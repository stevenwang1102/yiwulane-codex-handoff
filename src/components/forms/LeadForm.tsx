"use client";

import { useMemo, useState, type FormEvent } from "react";

type FormType = "pilot" | "contact" | "quote";
type Status = "idle" | "submitting" | "success" | "error";

const platforms = ["Shopify / DTC", "TikTok Shop", "Amazon FBA", "Multiple channels", "Other"];
const businessStages = [
  "Live store with repeat sales",
  "Store launched and validating products",
  "New brand with confirmed products",
  "Importer / wholesaler with repeat demand",
  "Other"
];
const purchaseCadences = [
  "First controlled test order",
  "Repeat replenishment",
  "Ongoing multi-SKU purchasing",
  "Not sure yet"
];
const budgetRanges = [
  "Under US$1,000",
  "US$1,000–5,000",
  "US$5,000–20,000",
  "US$20,000+",
  "Not sure yet"
];
const targetTimelines = [
  "Within 30 days",
  "Within 1–3 months",
  "Within 3–6 months",
  "More than 6 months",
  "Not sure yet"
];

export function LeadForm({ type = "pilot" }: { type?: FormType }) {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const twoStep = type === "pilot" || type === "quote";

  const heading = useMemo(() => {
    if (type === "contact") return "Send a sourcing question";
    if (type === "quote") return "Request a sourcing or fulfillment quote";
    return "Start a 3-SKU Pilot";
  }, [type]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (twoStep && step === 1) {
      const required = ["firstName", "lastName", "company", "email", "country", "platform", "businessStage"];
      const nextErrors = Object.fromEntries(
        required
          .filter((key) => !String(formData.get(key) || "").trim())
          .map((key) => [key, "Required for the pilot review"])
      );
      if (Object.keys(nextErrors).length) {
        setErrors(nextErrors);
        return;
      }
      setStep(2);
      return;
    }

    if (twoStep && step === 2) {
      const required = [
        "purchaseCadence",
        "expectedOrderQuantity",
        "sourcingBudget",
        "targetTimeline",
        "mainProblem"
      ];
      const nextErrors = Object.fromEntries(
        required
          .filter((key) => !String(formData.get(key) || "").trim())
          .map((key) => [key, "Required for the pilot review"])
      );
      if (Object.keys(nextErrors).length) {
        setErrors(nextErrors);
        return;
      }
    }

    setStatus("submitting");
    const productUrls = ["productUrl1", "productUrl2", "productUrl3"]
      .map((key) => String(formData.get(key) || "").trim())
      .filter(Boolean);

    const payload = {
      type,
      firstName: String(formData.get("firstName") || ""),
      lastName: String(formData.get("lastName") || ""),
      company: String(formData.get("company") || ""),
      email: String(formData.get("email") || ""),
      whatsapp: String(formData.get("whatsapp") || ""),
      country: String(formData.get("country") || ""),
      platform: String(formData.get("platform") || ""),
      businessStage: String(formData.get("businessStage") || ""),
      storeUrl: String(formData.get("storeUrl") || ""),
      dailyOrders: String(formData.get("dailyOrders") || ""),
      productUrls,
      sharedFileUrl: String(formData.get("sharedFileUrl") || ""),
      targetMarket: String(formData.get("targetMarket") || ""),
      skuCount: String(formData.get("skuCount") || ""),
      purchaseCadence: String(formData.get("purchaseCadence") || ""),
      expectedOrderQuantity: String(formData.get("expectedOrderQuantity") || ""),
      sourcingBudget: String(formData.get("sourcingBudget") || ""),
      targetTimeline: String(formData.get("targetTimeline") || ""),
      monthlyVolume: String(formData.get("monthlyVolume") || ""),
      supplierPrice: String(formData.get("supplierPrice") || ""),
      targetPrice: String(formData.get("targetPrice") || ""),
      customPackaging: formData.get("customPackaging") === "on",
      privateLabel: formData.get("privateLabel") === "on",
      chinaDirect: formData.get("chinaDirect") === "on",
      overseasWarehousing: formData.get("overseasWarehousing") === "on",
      serviceInterest: String(formData.get("serviceInterest") || ""),
      mainProblem: String(formData.get("mainProblem") || ""),
      privacyConsent: formData.get("privacyConsent") === "on",
      pageSource: window.location.pathname,
      website: String(formData.get("website") || "")
    };

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload)
    }).catch(() => null);

    const result = response ? await response.json().catch(() => ({})) : {};

    if (response?.ok && result?.ok) {
      setStatus("success");
      setMessage("Your submission was delivered. We will review the details and respond through the approved contact path.");
      form.reset();
      setStep(1);
      return;
    }

    if (result?.fieldErrors) {
      setErrors(result.fieldErrors);
    }
    setStatus("error");
    setMessage(result?.message || "We could not deliver the form right now. Please try again or use the contact options once configured.");
  }

  return (
    <form className="card grid gap-5 bg-white p-5 md:p-7" onSubmit={submit} noValidate>
      <div>
        <p className="eyebrow">{twoStep ? `Step ${step} of 2` : "Contact"}</p>
        <h2 className="mt-2 font-[var(--font-manrope)] text-3xl font-black text-[var(--color-ink)]">{heading}</h2>
      </div>

      <div className={step === 1 ? "grid gap-4 md:grid-cols-2" : "hidden"}>
        <Field name="firstName" label="First name" error={errors.firstName} required />
        <Field name="lastName" label="Last name" error={errors.lastName} required />
        <Field name="company" label="Company" error={errors.company} required />
        <Field name="email" label="Business email" type="email" error={errors.email} required />
        <Field name="whatsapp" label="WhatsApp" error={errors.whatsapp} />
        <Field name="country" label="Country" error={errors.country} required />
        <Select name="platform" label="Selling platform" options={platforms} error={errors.platform} required />
        <Select
          name="businessStage"
          label="Business stage"
          options={businessStages}
          error={errors.businessStage}
          required={twoStep}
        />
        <Field name="storeUrl" label="Store URL" type="url" error={errors.storeUrl} />
        <Field name="dailyOrders" label="Daily order range" error={errors.dailyOrders} placeholder="Example: 10-50 orders/day" />
      </div>

      <div className={!twoStep || step === 2 ? "grid gap-4" : "hidden"}>
        {type === "quote" ? <Field name="serviceInterest" label="Service interest" placeholder="Sourcing, QC, packaging, fulfillment, or hybrid route" error={errors.serviceInterest} /> : null}
        {type !== "contact" ? (
          <div className="grid gap-4 md:grid-cols-3">
            <Field name="productUrl1" label="Product URL 1" type="url" error={errors.productUrls} />
            <Field name="productUrl2" label="Product URL 2" type="url" />
            <Field name="productUrl3" label="Product URL 3" type="url" />
          </div>
        ) : null}
        {type !== "contact" ? <Field name="sharedFileUrl" label="Optional shared-file URL" type="url" error={errors.sharedFileUrl} /> : null}
        <div className="grid gap-4 md:grid-cols-2">
          <Field name="targetMarket" label="Target selling market" error={errors.targetMarket} />
          <Field name="skuCount" label="Number of SKUs" error={errors.skuCount} />
          <Select
            name="purchaseCadence"
            label="Purchase type"
            options={purchaseCadences}
            error={errors.purchaseCadence}
            required
          />
          <Field
            name="expectedOrderQuantity"
            label="Expected quantity for the first order"
            error={errors.expectedOrderQuantity}
            placeholder="Example: 500 units across 3 SKUs"
            required
          />
          <Select
            name="sourcingBudget"
            label="Estimated sourcing budget"
            options={budgetRanges}
            error={errors.sourcingBudget}
            required
          />
          <Select
            name="targetTimeline"
            label="Target timeline"
            options={targetTimelines}
            error={errors.targetTimeline}
            required
          />
          <Field name="monthlyVolume" label="Expected monthly volume" error={errors.monthlyVolume} />
          <Field name="supplierPrice" label="Current supplier price (optional)" error={errors.supplierPrice} />
          <Field name="targetPrice" label="Target product price (optional)" error={errors.targetPrice} />
        </div>
        <fieldset className="grid gap-3 rounded-2xl border border-[var(--color-border)] p-4">
          <legend className="px-1 text-sm font-black text-[var(--color-ink)]">Needs</legend>
          {[
            ["customPackaging", "Custom packaging"],
            ["privateLabel", "Private label"],
            ["chinaDirect", "China-direct fulfillment"],
            ["overseasWarehousing", "Overseas warehousing"]
          ].map(([name, label]) => (
            <label key={name} className="flex min-h-11 items-center gap-3 text-sm font-bold text-[var(--color-navy)]">
              <input name={name} type="checkbox" className="h-5 w-5" />
              {label}
            </label>
          ))}
        </fieldset>
        <TextArea name="mainProblem" label="Main problem to solve" error={errors.mainProblem} required />
        <label className="hidden">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <label className="flex items-start gap-3 text-sm leading-6 text-[var(--color-muted)]">
          <input name="privacyConsent" type="checkbox" className="mt-1 h-5 w-5" aria-describedby={errors.privacyConsent ? "privacyConsent-error" : undefined} />
          <span>I agree that YIWULANE may review these details and respond about sourcing, QC, packaging, and fulfillment services.</span>
        </label>
        {errors.privacyConsent ? <p id="privacyConsent-error" className="text-sm font-bold text-[var(--color-error)]">{errors.privacyConsent}</p> : null}
      </div>

      <div className="flex flex-wrap gap-3">
        {twoStep && step === 2 ? (
          <button className="button button-secondary" type="button" onClick={() => setStep(1)}>
            Back
          </button>
        ) : null}
        <button className="button button-primary" type="submit" disabled={status === "submitting"}>
          {twoStep && step === 1 ? "Continue" : status === "submitting" ? "Submitting..." : type === "pilot" ? "Submit My 3 Products" : "Submit"}
        </button>
      </div>

      <div aria-live="polite" className={status === "success" ? "rounded-xl bg-green-50 p-4 text-sm font-bold text-[var(--color-success)]" : status === "error" ? "rounded-xl bg-red-50 p-4 text-sm font-bold text-[var(--color-error)]" : "sr-only"}>
        {message}
      </div>
    </form>
  );
}

function Field({ name, label, error, type = "text", required = false, placeholder }: { name: string; label: string; error?: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="grid gap-2 text-sm font-black text-[var(--color-ink)]">
      {label}
      <input className="min-h-12 rounded-xl border border-[var(--color-border)] bg-white px-4 text-base font-medium text-[var(--color-text)]" name={name} type={type} required={required} placeholder={placeholder} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} />
      {error ? <span id={`${name}-error`} className="font-bold text-[var(--color-error)]">{error}</span> : null}
    </label>
  );
}

function TextArea({ name, label, error, required = false }: { name: string; label: string; error?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-black text-[var(--color-ink)]">
      {label}
      <textarea className="min-h-32 rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-base font-medium text-[var(--color-text)]" name={name} required={required} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} />
      {error ? <span id={`${name}-error`} className="font-bold text-[var(--color-error)]">{error}</span> : null}
    </label>
  );
}

function Select({ name, label, options, error, required = false }: { name: string; label: string; options: string[]; error?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-black text-[var(--color-ink)]">
      {label}
      <select className="min-h-12 rounded-xl border border-[var(--color-border)] bg-white px-4 text-base font-medium text-[var(--color-text)]" name={name} required={required} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined}>
        <option value="">Select one</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      {error ? <span id={`${name}-error`} className="font-bold text-[var(--color-error)]">{error}</span> : null}
    </label>
  );
}
