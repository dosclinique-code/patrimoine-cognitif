interface AigyrosLogoProps {
  className?: string;
  size?: number;
}

export default function AigyrosLogo({ className = "", size = 48 }: AigyrosLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo-aigyros.png"
      alt=""
      width={size}
      height={size}
      className={`rounded-full object-cover ${className}`}
      aria-hidden="true"
    />
  );
}
