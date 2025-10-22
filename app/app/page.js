export default function AppPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#1F2833",
        color: "#ffffff",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>PayYourSubs App</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", textAlign: "center" }}>
        This will be your member and club dashboard — logins, payments, and management coming soon.
      </p>
    </main>
  );
}
