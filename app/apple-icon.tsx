import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
          background: "#1b2d4f",
          borderRadius: 40,
        }}
      >
        <svg
          width="110"
          height="110"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 22V14" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 22V26" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M16 24C14 24 13 25.5 12.5 27" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" fill="none" />
          <path d="M16 24C18 24 19 25.5 19.5 27" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" fill="none" />
          <path d="M16 14C13 14 11 12 10 9" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M16 14C19 14 21 12 22 9" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M16 17C13.5 17 12 15.5 11 14" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" fill="none" />
          <path d="M16 17C18.5 17 20 15.5 21 14" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
