import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — SLR Centre",
};

export default function TermsPage() {
  return (
    <main>
      <section className="page-hero" style={{ paddingBottom: "40px" }}>
        <div className="stage-container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Terms of Use</span>
          </div>
          <span className="eyebrow eyebrow-light">Legal</span>
          <h1 className="page-hero-title">Terms of Use</h1>
        </div>
      </section>

      <section className="page-section">
        <div className="stage-container">
          <div className="legal-content">
            <p className="legal-updated">Effective: September 2026</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the SLR Centre for Global Law, Geoeconomics &amp; Emerging Technologies
              website, you accept and agree to be bound by these terms of use.
            </p>

            <h2>2. Intellectual Property</h2>
            <p>
              All content on this website, including research papers, analysis, intelligence briefs, and
              design elements, is the intellectual property of SLR Advocates &amp; Solicitors and may not be
              reproduced, distributed, or used without prior written permission.
            </p>

            <h2>3. Use of Content</h2>
            <p>
              Our publications and research are provided for informational purposes only. They do not
              constitute legal, financial, or investment advice. Users should seek professional counsel
              before making decisions based on our analysis.
            </p>

            <h2>4. Disclaimer</h2>
            <p>
              While we strive for accuracy, the Centre makes no warranties regarding the completeness,
              reliability, or suitability of the information provided. Use of this website is at your own
              risk.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              The Centre shall not be liable for any direct, indirect, incidental, or consequential damages
              arising from the use of this website or reliance on its content.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any
              disputes shall be subject to the exclusive jurisdiction of the courts of New Delhi.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the website following
              changes constitutes acceptance of the revised terms.
            </p>

            <h2>8. Contact</h2>
            <p>
              For questions about these terms, please contact us via the{" "}
              <Link href="/engage" style={{ color: "var(--color-navy)", textDecoration: "underline" }}>Engage</Link> page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
