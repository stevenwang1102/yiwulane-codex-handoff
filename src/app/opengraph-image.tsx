import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#102136",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%"
        }}
      >
        <div style={{ color: "#e87524", fontSize: 34, fontWeight: 800 }}>YIWULANE</div>
        <div style={{ fontSize: 76, fontWeight: 900, lineHeight: 1.02, maxWidth: 930 }}>
          Your Yiwu sourcing and fulfillment team.
        </div>
        <div style={{ color: "#d9e0e8", fontSize: 28, marginTop: 30 }}>
          Sourcing · QC · Fulfillment · Hybrid inventory planning
        </div>
      </div>
    ),
    size
  );
}
