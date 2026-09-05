import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Patrimoine Cognitif & Immatériel — Référence en transmission par Aigyros";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Image Open Graph générée dynamiquement (fallback si /public/og-image.jpg absent) */
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
          background: "linear-gradient(135deg, #05100a 0%, #0a1a14 100%)",
          padding: "60px",
        }}
      >
        <p
          style={{
            fontSize: 22,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#c5a368",
            marginBottom: 24,
          }}
        >
          Aigyros
        </p>
        <h1
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#e8e4d9",
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
            color: "rgba(197,163,104,0.85)",
            marginBottom: 16,
          }}
        >
          &amp; Patrimoine Immatériel
        </p>
        <p
          style={{
            fontSize: 28,
            color: "rgba(232,228,217,0.65)",
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
