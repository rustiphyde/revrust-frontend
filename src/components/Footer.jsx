export default function Footer() {
    return (
      <footer style={{ padding: "2rem", textAlign: "center", background: "#111", color: "#fff" }}>
        <p>© {new Date().getFullYear()} RevRust. All rights reserved.</p>
      </footer>
    );
  }
  