import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Nexudyam - Digital Marketing & Branding Agency in Kanpur";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "60px 80px",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Glows */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
          }}
        />

        {/* Top Bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#000000",
                fontSize: "26px",
                fontWeight: 900,
              }}
            >
              N
            </div>
            <span style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-0.02em" }}>
              NEXUDYAM
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              padding: "8px 18px",
              borderRadius: "999px",
              fontSize: "16px",
              fontWeight: 600,
              color: "#fbbf24",
            }}
          >
            <span>5.0 / 5.0 Google Rating</span>
            <span style={{ color: "#9ca3af" }}>•</span>
            <span style={{ color: "#ffffff" }}>Kanpur, UP</span>
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "54px",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              maxWidth: "1000px",
            }}
          >
            Digital Marketing, Website &amp; Branding Services
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#a1a1aa",
              lineHeight: 1.4,
              maxWidth: "850px",
            }}
          >
            Helping Startups &amp; MSMEs in Kanpur &amp; Uttar Pradesh Scale Online.
          </div>
        </div>

        {/* Footer Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            {["Next.js Websites", "Meta & Google Ads", "Google Maps 3-Pack", "AI Content Marketing"].map((tag) => (
              <div
                key={tag}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#e4e4e7",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <span style={{ fontSize: "20px", fontWeight: 700, color: "#a1a1aa", letterSpacing: "0.05em" }}>
            nexudyam.in
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
