import { ImageResponse } from "next/og";

export const alt = "Aethyl Global — software studio building custom dashboards, CRM, mobile apps and automation";
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
          background: "#000000",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 300, letterSpacing: -4 }}>ag.</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1, letterSpacing: -2 }}>
            Custom dashboards, CRM, mobile apps &amp; automation
          </div>
          <div style={{ marginTop: 24, fontSize: 30, color: "#a3a3a3" }}>
            Software studio · Working with clients worldwide
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              background: "#f59e0b",
              color: "#000000",
              fontSize: 26,
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: 14,
            }}
          >
            Book a free 30-minute audit
          </div>
          <div style={{ fontSize: 26, color: "#2dd4bf" }}>www.aethyl.com</div>
        </div>
      </div>
    ),
    size
  );
}
