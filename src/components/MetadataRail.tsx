import Link from "next/link";

export interface RailBlockData {
  label: string;
  links: { href: string; label: string }[];
}

/**
 * The right-hand "metadata rail" used on profile and article pages —
 * Related Research / Related Sectors / Related Geographies / Related
 * Corridors — rendered as quiet linked lists, never as cards.
 */
export default function MetadataRail({ blocks }: { blocks: RailBlockData[] }) {
  const populated = blocks.filter((b) => b.links.length > 0);
  if (populated.length === 0) return null;

  return (
    <div className="metadata-rail">
      {populated.map((block) => (
        <div className="rail-block" key={block.label}>
          <span className="rail-label">{block.label}</span>
          <div className="rail-link-list">
            {block.links.map((link) => (
              <Link key={link.href} href={link.href} className="rail-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
