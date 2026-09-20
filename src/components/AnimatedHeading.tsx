import type { ElementType } from "react";

/**
 * Headline that reveals letter by letter. Pure CSS (see `.char` in globals.css),
 * so it stays a server component. The full text is exposed via aria-label and
 * the split letters are hidden from assistive tech.
 */
export default function AnimatedHeading({
  text,
  as: Tag = "h1",
  className,
}: {
  text: string;
  as?: ElementType;
  className?: string;
}) {
  let index = 0;
  const words = text.split(" ");

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, w) => (
        <span key={w} aria-hidden="true">
          <span className="word">
            {Array.from(word).map((char) => (
              <span className="char" style={{ "--i": index++ } as React.CSSProperties} key={index}>
                {char}
              </span>
            ))}
          </span>
          {w < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
