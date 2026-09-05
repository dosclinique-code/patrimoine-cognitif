import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Manifeste",         href: "/manifeste" },
  { label: "Testament Éthique", href: "/testament-ethique" },
  { label: "Charte",            href: "/charte" },
  { label: "Contact",           href: "/contact" },
] as const;

const LEGAL_LINKS = [
  { label: "Mentions légales",           href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-alt" role="contentinfo">
      {/* Ligne décorative dorée */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-or/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">

        {/* ── Rangée principale ──────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-10 border-b border-or/10">

          {/* Colonne gauche — Branding */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.25em] text-creme/35 uppercase font-sans">
              Une initiative de
            </p>
            <a
              href="https://aigyros.com"
              target="_blank"
              rel="noopener noreferrer"
              className={[
                "font-serif text-2xl tracking-[0.2em] uppercase",
                "text-or hover:text-or/70",
                "transition-colors duration-300",
              ].join(" ")}
              aria-label="Aigyros — Ouvre dans un nouvel onglet"
            >
              Aigyros
            </a>
            <p className="mt-1 text-xs text-creme/30 font-sans max-w-xs leading-relaxed">
              Premier signataire et gardien de la Charte
              de la Transmission Souveraine.
            </p>
          </div>

          {/* Colonne droite — Navigation */}
          <nav aria-label="Navigation du pied de page">
            <ul className="flex flex-wrap gap-x-8 gap-y-3" role="list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={[
                      "text-xs tracking-[0.18em] uppercase text-creme/40",
                      "hover:text-or transition-colors duration-300",
                      "font-sans",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ── Rangée légale ─────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p className="text-[11px] tracking-wider text-creme/20 font-sans">
            © {year} Patrimoine-Cognitif.fr
            <span className="mx-2 text-or/30">·</span>
            Hébergé en Europe
          </p>

          <ul className="flex flex-wrap gap-6" role="list">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[11px] tracking-wider text-creme/20 hover:text-or/50 transition-colors duration-300 font-sans"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
