import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — SLR Centre",
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="page-hero" style={{ paddingBottom: "40px" }}>
        <div className="stage-container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Privacy Policy</span>
          </div>
          <span className="eyebrow eyebrow-light">Legal</span>
          <h1 className="page-hero-title">Privacy Policy</h1>
        </div>
      </section>

      <section className="page-section">
        <div className="stage-container">
          <div className="legal-content">
            <p className="legal-updated">Effective: September 2026</p>

            <h2>1. Introduction</h2>
            <p>
              The SLR Centre for Global Law, Geoeconomics &amp; Emerging Technologies (&quot;the Centre&quot;,
              &quot;we&quot;, &quot;us&quot;) is committed to protecting your privacy. This policy explains
              how we collect, use, and safeguard your personal information when you visit our website or
              engage with our services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We may collect personal information that you provide directly, including your name, email
              address, organisation, role, and any messages you submit through our contact forms or
              newsletter sign-up.
            </p>
            <p>
              We also collect certain technical information automatically, including IP address, browser
              type, pages visited, and time spent on the site.
            </p>

            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>To respond to your enquiries and provide our services</li>
              <li>To send you newsletters and research publications you have subscribed to</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>4. Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share information with trusted service
              providers who assist us in operating our website and conducting our business, subject to
              appropriate confidentiality agreements.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal
              information against unauthorised access, alteration, disclosure, or destruction.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. To exercise these
              rights, please contact us via the <Link href="/engage" style={{ color: "var(--color-navy)", textDecoration: "underline" }}>Engage</Link> page.
            </p>

            <h2>7. Contact</h2>
            <p>For questions about this privacy policy, please contact us.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
