export default function SectionNumber({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-serif)",
        fontSize: "14px",
        color: "var(--color-gold)",
        letterSpacing: "0.05em",
      }}
    >
      {children}
    </span>
  );
}
