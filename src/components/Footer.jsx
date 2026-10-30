import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span>REV</span>
          <span>RUST</span>
        </div>

        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} RevRust. All rights reserved.
        </p>
      </div>
    </footer>
  );
}