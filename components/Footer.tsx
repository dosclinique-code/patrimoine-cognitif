import Link from "next/link";
import AigyrosLogo from "@/components/icons/AigyrosLogo";

const FOOTER_LINKS = [
  { label: "Manifeste",         href: "/manifeste" },
  { label: "Testament Éthique", href: "/testament-ethique" },
  { label: "Charte",            href: "/charte" },
  { label: "Contact",           href: "/contact" },
] as const;

const LEGAL_LINKS = [
  { label: "Mentions légales",             href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-alt" role="contentinfo">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-marine/15 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-10 border-b border-bordure">
          <div className="flex items-start gap-4">
            <AigyrosLogo size={48} className="shrink-0 mt-1" />
            <div className="flex flex-col gap-2">
              <p className="text-[10px] tracking-[0.25em] text-texte-leger uppercase font-sans">
                Une initiative de
              </p>
              <a
                href="https://aigyros.com"
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "font-serif text-xl tracking-[0.2em] uppercase",
                  "text-marine hover:text-marine-clair",
                  "transition-colors duration-300",
                ].join(" ")}
                aria-label="Aigyros — Ouvre dans un nouvel onglet"
              >
                Aigyros
              </a>
              <p className="text-xs text-texte-muted font-sans max-w-xs leading-relaxed">
                Premier signataire et gardien de la Charte de la Transmission
                Souveraine.
              </p>
            </div>
          </div>

          <nav aria-label="Navigation du pied de page">
            <ul className="flex flex-wrap gap-x-8 gap-y-3" role="list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={[
                      "text-xs tracking-[0.12em] uppercase text-texte-muted",
                      "hover:text-marine transition-colors duration-300",
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

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p className="text-[11px] tracking-wider text-texte-leger font-sans">
            © {year} Patrimoine-Cognitif.fr
            <span className="mx-2 text-marine/20">·</span>
            Hébergé en Europe
          </p>

          <ul className="flex flex-wrap gap-6" role="list">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[11px] tracking-wider text-texte-leger hover:text-marine/60 transition-colors duration-300 font-sans"
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
