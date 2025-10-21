export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "system-ui, sans-serif",
        background: "#0a0a0a",
        color: "#fff",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: 48, margin: 0 }}>?? FitmentAI</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Smarter wheel & tire fitment — powered by AI.
        </p>
      </div>
    </main>
  );
}
