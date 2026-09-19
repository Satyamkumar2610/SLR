import { redirect } from "next/navigation";

// "What We Do" has been rebuilt as the Capabilities page.
export default function WhatWeDoRedirect() {
  redirect("/capabilities");
}
