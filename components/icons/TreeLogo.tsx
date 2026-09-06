interface TreeLogoProps {
  className?: string;
  size?: number;
}

export default function TreeLogo({ className = "", size = 40 }: TreeLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22" stroke="#1b2d4f" strokeWidth="1" opacity="0.15" />
      <path d="M24 30V38" stroke="#1b2d4f" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 34C21 34 19 36 18 38" stroke="#1b2d4f" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M24 34C27 34 29 36 30 38" stroke="#1b2d4f" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M24 32C22 32 20.5 33.5 19.5 35.5" stroke="#1b2d4f" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M24 32C26 32 27.5 33.5 28.5 35.5" stroke="#1b2d4f" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M24 30V20" stroke="#1b2d4f" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M24 20C18 20 14 16 12 11" stroke="#1b2d4f" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M24 20C30 20 34 16 36 11" stroke="#1b2d4f" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M24 22C20 22 17 19 15 15" stroke="#1b2d4f" strokeWidth="1.1" strokeLinecap="round" fill="none" />
      <path d="M24 22C28 22 31 19 33 15" stroke="#1b2d4f" strokeWidth="1.1" strokeLinecap="round" fill="none" />
      <path d="M24 18C21 18 19 15 18 12" stroke="#1b2d4f" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M24 18C27 18 29 15 30 12" stroke="#1b2d4f" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M24 16C22.5 16 21 14.5 20.5 12.5" stroke="#1b2d4f" strokeWidth="0.9" strokeLinecap="round" fill="none" />
      <path d="M24 16C25.5 16 27 14.5 27.5 12.5" stroke="#1b2d4f" strokeWidth="0.9" strokeLinecap="round" fill="none" />
      <path d="M24 24C19 24 16 21 14 18" stroke="#1b2d4f" strokeWidth="1.1" strokeLinecap="round" fill="none" />
      <path d="M24 24C29 24 32 21 34 18" stroke="#1b2d4f" strokeWidth="1.1" strokeLinecap="round" fill="none" />
      <path d="M24 26C20 26 17.5 24 16 21" stroke="#1b2d4f" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M24 26C28 26 30.5 24 32 21" stroke="#1b2d4f" strokeWidth="1" strokeLinecap="round" fill="none" />
    </svg>
  );
}
