/**
 * Fond atmosphérique discret — dégradé blanc / gris très léger.
 */
export default function SiteBackground({
  className = "absolute inset-0",
}: {
  className?: string;
}) {
  return (
    <div className={className} aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-blanc via-fond to-gris/40" />
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(27,45,79,0.02) 0%, transparent 60%)",
            "radial-gradient(ellipse 50% 40% at 90% 80%, rgba(27,45,79,0.015) 0%, transparent 55%)",
          ].join(", "),
        }}
      />
    </div>
  );
}
