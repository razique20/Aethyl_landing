import { ImageResponse } from "next/og";

export const alt = "Aethyl Global — Every service a growing business needs. One partner.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(165deg, #0a0a0b 0%, #0a0a0b 40%, #0b1450 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Diagonal royal blue block */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <polygon points="760,630 1200,250 1200,630" fill="#1b34c0" />
        </svg>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 26, height: 26, background: "#d4ff3f" }} />
          <div style={{ fontSize: 52, fontWeight: 900, letterSpacing: -1 }}>AETHYL</div>
          <div style={{ fontSize: 22, letterSpacing: 10, marginTop: 6 }}>GLOBAL</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ fontSize: 70, fontWeight: 900, lineHeight: 1, letterSpacing: -2, textTransform: "uppercase" }}>
            Every service a growing business needs. One partner.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#8a8f98" }}>
            Software · Marketing · Accounting · Tax
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#ffffff" }}>www.aethyl.com</div>
      </div>
    ),
    size
  );
}
