import Link from "next/link";
import TreeLogo from "@/components/icons/TreeLogo";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 group ${className}`}
      aria-label="Patrimoine Cognitif — Accueil"
    >
      <TreeLogo
        size={40}
        className="shrink-0 transition-opacity duration-300 group-hover:opacity-80"
      />
      {showText && (
        <span className="flex flex-col leading-tight">
          <span className="font-serif text-[15px] tracking-[0.04em] text-marine">
            Patrimoine
          </span>
          <span className="font-serif text-[15px] tracking-[0.04em] text-marine/70">
            Cognitif
          </span>
        </span>
      )}
    </Link>
  );
}
