import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#09090b",
          color: "#f4f4f5",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(600px 400px at 15% 0%, rgba(129,140,248,0.22), transparent 70%)",
          }}
        />
        <div style={{ display: "flex", fontSize: 26, color: "#818cf8", letterSpacing: 2 }}>
          {site.url.replace(/^https?:\/\//, "")}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 82, fontWeight: 700, letterSpacing: -2 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 46, fontWeight: 700, color: "#a1a1aa" }}>
            {site.role}
          </div>
          <div style={{ marginTop: 18, height: 4, width: 220, background: "#818cf8" }} />
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#a1a1aa" }}>
          github.com/sharmaomshiv201 · linkedin.com/in/om-shiv
        </div>
      </div>
    ),
    { ...size }
  );
}
