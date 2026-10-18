interface BrandLogoProps {
  className?: string;
  size?: number;
}

/**
 * Arbre blanc sur fond transparent.
 * La pastille #12263f est celle du favicon : le blanc seul disparaît
 * sur les fonds clairs du site (header, footer, hero).
 */
export default function BrandLogo({ className = "", size = 40 }: BrandLogoProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center bg-[#12263f] ${className}`}
      style={{ width: size, height: size, borderRadius: Math.round(size * 0.22) }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo-white.svg"
        alt="Logo Patrimoine Cognitif"
        width={size}
        height={size}
        className="h-full w-full object-contain"
      />
    </span>
  );
}
