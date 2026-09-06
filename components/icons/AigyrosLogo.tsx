interface AigyrosLogoProps {
  className?: string;
  size?: number;
}

export default function AigyrosLogo({ className = "", size = 48 }: AigyrosLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18" stroke="#1b2d4f" strokeWidth="1.2" opacity="0.3" />
      <circle cx="20" cy="20" r="12" stroke="#1b2d4f" strokeWidth="1" opacity="0.2" />
      <line x1="20" y1="4" x2="20" y2="36" stroke="#1b2d4f" strokeWidth="1" opacity="0.4" />
      <line x1="4" y1="20" x2="36" y2="20" stroke="#1b2d4f" strokeWidth="1" opacity="0.4" />
      <line x1="8.7" y1="8.7" x2="31.3" y2="31.3" stroke="#1b2d4f" strokeWidth="0.8" opacity="0.25" />
      <line x1="31.3" y1="8.7" x2="8.7" y2="31.3" stroke="#1b2d4f" strokeWidth="0.8" opacity="0.25" />
      <polygon points="20,6 22,14 20,12 18,14" fill="#1b2d4f" opacity="0.7" />
      <circle cx="20" cy="20" r="2.5" fill="#1b2d4f" />
    </svg>
  );
}
