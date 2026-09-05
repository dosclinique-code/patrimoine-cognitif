import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Icône Apple Touch — même emblème que favicon.svg, en haute résolution */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a1a14",
          borderRadius: 40,
          border: "3px solid rgba(197, 163, 104, 0.55)",
        }}
      >
        <svg
          width="110"
          height="110"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 24.5V11.5"
            stroke="#c5a368"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M16 15.5C13.2 15.5 11.5 17.2 11.5 19"
            stroke="#c5a368"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M16 15.5C18.8 15.5 20.5 17.2 20.5 19"
            stroke="#c5a368"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M16 19.5C14.1 19.5 12.75 20.85 12.75 22.75"
            stroke="#c5a368"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M16 19.5C17.9 19.5 19.25 20.85 19.25 22.75"
            stroke="#c5a368"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="16" cy="9.5" r="2.25" fill="#c5a368" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
