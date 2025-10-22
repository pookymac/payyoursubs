export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        background: "#0B0C10",
        color: "#ffffff",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        PayYourSubs
      </h1>
      <p style={{ fontSize: "1.3rem", maxWidth: "600px", marginBottom: "2rem" }}>
        The easiest way for clubs, teams, and groups to collect member
        subscriptions online.
      </p>
      <a
        href="mailto:info@payyoursubs.com"
        style={{
          background: "#66FCF1",
          color: "#0B0C10",
          padding: "0.8rem 1.5rem",
          borderRadius: "6px",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Get Notified at Launch
      </a>
    </main>
  );
}
