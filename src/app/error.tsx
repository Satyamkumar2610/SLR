"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <section className="page-hero state-hero">
        <div className="stage-container">
          <span className="eyebrow eyebrow-light">Something went wrong</span>
          <h1 className="page-hero-title">We couldn&apos;t load this page.</h1>
          <p className="page-hero-lead">
            A temporary problem interrupted the request. Try again — if it persists, return home and navigate from there.
          </p>
          {error.digest && <p className="state-digest">Reference: {error.digest}</p>}
          <div className="state-actions">
            <button type="button" className="btn btn-primary state-retry" onClick={() => retry()}>
              Try Again
            </button>
            <Link href="/" className="btn btn-secondary">Return Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
