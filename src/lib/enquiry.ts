export const enquiryTypes = [
  "Research Inquiry",
  "Advisory Services",
  "Roundtables & Events",
  "Media Enquiry",
  "Partnership",
  "Other",
] as const;

export type EnquiryField = "fullName" | "organisation" | "role" | "email" | "region" | "enquiry" | "message";

export interface EnquiryState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<EnquiryField, string>>;
  values?: Partial<Record<EnquiryField, string>>;
}

export const initialEnquiryState: EnquiryState = { status: "idle" };
