interface EditorialSectionProps {
  eyebrow: string;
  title: string;
  lead?: string;
  dark?: boolean;
  action?: React.ReactNode;
  children?: React.ReactNode;
  id?: string;
}

/**
 * Shared section header pattern used across every page: a gold eyebrow
 * label, a serif title, an optional lead paragraph, and an optional
 * right-aligned action (link/button). Keeps section rhythm consistent
 * without forcing identical section *layouts* underneath.
 */
export default function EditorialSection({
  eyebrow,
  title,
  lead,
  dark = false,
  action,
  children,
  id,
}: EditorialSectionProps) {
  return (
    <div id={id}>
      <div className="section-head-row">
        <div>
          <span className={`eyebrow ${dark ? "eyebrow-light" : ""}`}>{eyebrow}</span>
          <h2
            className="text-section-title"
            style={{ marginTop: "8px", color: dark ? "var(--color-white)" : undefined }}
          >
            {title}
          </h2>
          {lead && (
            <p
              className="text-lead"
              style={{ marginTop: "14px", color: dark ? "rgba(255,255,255,0.72)" : undefined }}
            >
              {lead}
            </p>
          )}
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}
