/**
 * Fond atmosphérique patrimonial — dégradé vert forêt / émeraude profond.
 * Utilisé en fixed sur le layout global et en absolute dans les expériences plein écran (/charte).
 */
export default function SiteBackground({
  className = "absolute inset-0",
}: {
  className?: string;
}) {
  return (
    <div className={className} aria-hidden="true">
      {/* Base verticale : forêt en haut, noir-vert en bas */}
      <div className="absolute inset-0 bg-gradient-to-b from-foret via-noir to-[#030a06]" />

      {/* Halos vert émeraude — profondeur organique */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 100% 55% at 50% -8%, rgba(19,42,31,0.85) 0%, transparent 58%)",
            "radial-gradient(ellipse 50% 40% at 88% 30%, rgba(10,26,20,0.35) 0%, transparent 55%)",
            "radial-gradient(ellipse 50% 40% at 12% 55%, rgba(15,35,25,0.3) 0%, transparent 55%)",
            "radial-gradient(ellipse 70% 45% at 50% 95%, rgba(10,26,20,0.45) 0%, transparent 52%)",
            "radial-gradient(ellipse 90% 50% at 50% 12%, rgba(197,163,104,0.04) 0%, transparent 62%)",
          ].join(", "),
        }}
      />
    </div>
  );
}
