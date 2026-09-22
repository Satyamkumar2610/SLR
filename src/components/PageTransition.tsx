"use client";

import { usePathname } from "next/navigation";
import { ViewTransition } from "react";

// Keyed by pathname so nested navigations (e.g. /sectors → /sectors/defence)
// animate too; the root template alone only remounts between top-level sections.
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <ViewTransition key={pathname} enter="page-in" exit="page-out" default="none">
      <div className="page-enter">{children}</div>
    </ViewTransition>
  );
}
