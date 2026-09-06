import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Patrimoine Cognitif & Immatériel — Référence en transmission par Aigyros";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ffffff 0%, #f0f2f5 100%)",
          padding: "60px",
        }}
      >
        <p
          style={{
            fontSize: 22,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#1b2d4f",
            marginBottom: 24,
            opacity: 0.6,
          }}
        >
          Aigyros
        </p>
        <h1
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#1b2d4f",
            textAlign: "center",
            lineHeight: 1.15,
            marginBottom: 24,
          }}
        >
          Patrimoine Cognitif
        </h1>
        <p
          style={{
            fontSize: 22,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(27,45,79,0.7)",
            marginBottom: 16,
          }}
        >
          &amp; Patrimoine Immatériel
        </p>
        <p
          style={{
            fontSize: 28,
            color: "rgba(27,45,79,0.55)",
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          Préserver l&apos;essentiel. Transmettre l&apos;éternel.
        </p>
      </div>
    ),
    { ...size }
  );
}
