import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
        padding: "2rem",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "0.4em",
            marginBottom: "0.5rem",
          }}
        >
          ELA
        </h1>
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          Choose a theme to preview
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        <Link href="/ember" style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "#1c1919",
              border: "1px solid rgba(201,165,87,0.3)",
              padding: "2.5rem 2rem",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", gap: "0.4rem", marginBottom: "1.5rem" }}>
              {["#0f0d0d", "#c9a557", "#e4c870", "#8b2020"].map((c) => (
                <span
                  key={c}
                  style={{
                    width: 16, height: 16, borderRadius: "50%",
                    background: c, border: "1px solid rgba(255,255,255,0.1)",
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#c9a557", letterSpacing: "0.2em", marginBottom: "0.5rem" }}>
              Ember
            </h2>
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
              Dark &amp; gold — elegant fine dining
            </p>
          </div>
        </Link>

        <Link href="/flora" style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "#f5f3ef",
              border: "1px solid rgba(61,107,79,0.3)",
              padding: "2.5rem 2rem",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", gap: "0.4rem", marginBottom: "1.5rem" }}>
              {["#faf8f4", "#3d6b4f", "#c4704f", "#1e2420"].map((c) => (
                <span
                  key={c}
                  style={{
                    width: 16, height: 16, borderRadius: "50%",
                    background: c, border: "1px solid rgba(0,0,0,0.1)",
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#3d6b4f", letterSpacing: "0.2em", marginBottom: "0.5rem" }}>
              Flora
            </h2>
            <p style={{ fontSize: "0.78rem", color: "#888880", lineHeight: 1.6 }}>
              Light &amp; green — warm Mediterranean kitchen
            </p>
          </div>
        </Link>

        <Link href="/ela" style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "#F5EDD8",
              border: "1px solid rgba(28,61,94,0.3)",
              padding: "2.5rem 2rem",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", gap: "0.4rem", marginBottom: "1.5rem" }}>
              {["#F5EDD8", "#1C3D5E", "#C8923A", "#1C1008"].map((c) => (
                <span
                  key={c}
                  style={{
                    width: 16, height: 16, borderRadius: "50%",
                    background: c, border: "1px solid rgba(0,0,0,0.1)",
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#1C3D5E", letterSpacing: "0.2em", marginBottom: "0.5rem" }}>
              ELA
            </h2>
            <p style={{ fontSize: "0.78rem", color: "#8C7B6A", lineHeight: 1.6 }}>
              Travertine &amp; Mediterranean blue — Greek family warmth
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
