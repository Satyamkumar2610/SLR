"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { submitEnquiry } from "@/app/engage/actions";
import { enquiryTypes, initialEnquiryState, type EnquiryField } from "@/lib/enquiry";

interface RegionOption {
  slug: string;
  name: string;
}

export default function EnquiryForm({ regions }: { regions: RegionOption[] }) {
  const [attempt, setAttempt] = useState(0);
  return <EnquiryFormInner key={attempt} regions={regions} onReset={() => setAttempt((n) => n + 1)} />;
}

function EnquiryFormInner({ regions, onReset }: { regions: RegionOption[]; onReset: () => void }) {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialEnquiryState);
  const errors = state.fieldErrors ?? {};
  const values = state.values ?? {};
  const formRef = useRef<HTMLFormElement>(null);
  // Links elsewhere on the site preselect the enquiry type, e.g. /engage?enquiry=Research%20Inquiry
  const preset = useSearchParams().get("enquiry");
  const presetEnquiry = preset && (enquiryTypes as readonly string[]).includes(preset) ? preset : "";

  useEffect(() => {
    if (state.status !== "error") return;
    const target = formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]') ?? formRef.current?.querySelector<HTMLElement>(".form-alert");
    target?.focus({ preventScroll: true });
    target?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [state]);

  if (state.status === "success") return <EnquirySuccess onReset={onReset} />;

  const field = (name: EnquiryField) => ({
    id: name,
    name,
    defaultValue: values[name] ?? (name === "enquiry" ? presetEnquiry : ""),
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  const errorFor = (name: EnquiryField) =>
    errors[name] ? (
      <span className="form-error" id={`${name}-error`}>
        {errors[name]}
      </span>
    ) : null;

  return (
    <form ref={formRef} action={formAction} className={`enquiry-form ${pending ? "is-pending" : ""}`} noValidate>
      {state.status === "error" && state.message && (
        <div className="form-alert" role="alert" tabIndex={-1}>
          {state.message}
        </div>
      )}

      <p className="form-note">Fields marked * are required.</p>

      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-row-2">
        <div className="form-field">
          <label className="form-label" htmlFor="fullName">Full Name *</label>
          <input className="form-input" type="text" required autoComplete="name" {...field("fullName")} />
          {errorFor("fullName")}
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="organisation">Organisation *</label>
          <input className="form-input" type="text" required autoComplete="organization" {...field("organisation")} />
          {errorFor("organisation")}
        </div>
      </div>

      <div className="form-row-2">
        <div className="form-field">
          <label className="form-label" htmlFor="role">Role / Title</label>
          <input className="form-input" type="text" autoComplete="organization-title" {...field("role")} />
          {errorFor("role")}
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="email">Email Address *</label>
          <input className="form-input" type="email" required autoComplete="email" {...field("email")} />
          {errorFor("email")}
        </div>
      </div>

      <div className="form-row-2">
        <div className="form-field">
          <label className="form-label" htmlFor="region">Country / Region</label>
          <select className="form-select" {...field("region")}>
            <option value="">Select a region</option>
            {regions.map((g) => (
              <option key={g.slug} value={g.slug}>{g.name}</option>
            ))}
          </select>
          {errorFor("region")}
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="enquiry">Nature of Enquiry</label>
          <select className="form-select" {...field("enquiry")}>
            <option value="">Select enquiry type</option>
            {enquiryTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errorFor("enquiry")}
        </div>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="message">Message</label>
        <textarea className="form-textarea" rows={5} maxLength={4000} {...field("message")} />
        {errorFor("message")}
      </div>

      <button type="submit" className="btn btn-primary form-submit" disabled={pending} aria-busy={pending}>
        {pending && <span className="btn-spinner" aria-hidden="true" />}
        {pending ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}

function EnquirySuccess({ onReset }: { onReset: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus({ preventScroll: true });
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  return (
    <div className="enquiry-success" role="status" tabIndex={-1} ref={ref}>
      <svg className="enquiry-success-mark" viewBox="0 0 52 52" aria-hidden="true">
        <circle cx="26" cy="26" r="24" />
        <path d="M15 27l7 7 15-16" />
      </svg>
      <h2 className="enquiry-success-title">Thank you — your enquiry is with the Centre.</h2>
      <button type="button" className="btn btn-outline-navy" onClick={onReset}>
        Send another enquiry
      </button>
    </div>
  );
}
