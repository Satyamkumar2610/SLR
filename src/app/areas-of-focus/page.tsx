import { redirect } from "next/navigation";

// The "Areas of Focus" hub has been rebuilt as the Research Portal.
export default function AreasOfFocusRedirect() {
  redirect("/research");
}
