"use server";

import { geographies } from "@/lib/content";
import { enquiryTypes, type EnquiryField, type EnquiryState } from "@/lib/enquiry";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const str = (formData: FormData, key: string) => {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim() : "";
};

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  // Honeypot: real visitors never see or fill this field.
  if (str(formData, "website")) return { status: "success" };

  const values: Record<EnquiryField, string> = {
    fullName: str(formData, "fullName"),
    organisation: str(formData, "organisation"),
    role: str(formData, "role"),
    email: str(formData, "email"),
    region: str(formData, "region"),
    enquiry: str(formData, "enquiry"),
    message: str(formData, "message"),
  };

  const fieldErrors: Partial<Record<EnquiryField, string>> = {};
  if (values.fullName.length < 2) fieldErrors.fullName = "Please enter your full name.";
  else if (values.fullName.length > 120) fieldErrors.fullName = "Please keep your name under 120 characters.";
  if (!values.organisation) fieldErrors.organisation = "Please tell us which organisation you represent.";
  else if (values.organisation.length > 160) fieldErrors.organisation = "Please keep this under 160 characters.";
  if (!EMAIL_RE.test(values.email)) fieldErrors.email = "Please enter a valid email address.";
  if (values.role.length > 120) fieldErrors.role = "Please keep this under 120 characters.";
  if (values.region && !geographies.some((g) => g.slug === values.region)) fieldErrors.region = "Please choose a region from the list.";
  if (values.enquiry && !(enquiryTypes as readonly string[]).includes(values.enquiry)) fieldErrors.enquiry = "Please choose an enquiry type from the list.";
  if (values.message.length > 4000) fieldErrors.message = "Please keep your message under 4,000 characters.";

  if (Object.keys(fieldErrors).length) {
    return { status: "error", message: "Please correct the highlighted fields.", fieldErrors, values };
  }

  const payload = {
    ...values,
    regionName: geographies.find((g) => g.slug === values.region)?.name ?? "",
    submittedAt: new Date().toISOString(),
    source: "slr-centre-website",
  };

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (!webhook) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[enquiry] ENQUIRY_WEBHOOK_URL is not set; enquiry logged locally:", payload);
      return { status: "success" };
    }
    console.error("[enquiry] ENQUIRY_WEBHOOK_URL is not configured; enquiry could not be delivered.");
    return {
      status: "error",
      message: "Our enquiry service is temporarily unavailable. Please try again shortly.",
      values,
    };
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (err) {
    console.error("[enquiry] delivery failed:", err);
    return {
      status: "error",
      message: "We couldn’t send your enquiry just now. Please try again in a moment.",
      values,
    };
  }

  return { status: "success" };
}
