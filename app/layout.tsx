export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "system-ui, sans-serif",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "3rem" }}>🚀 FitmentAI</h1>
      <p style={{ fontSize: "1.25rem" }}>
        Smarter wheel & tire fitment — powered by AI.
      </p>
    </main>
  );
}
