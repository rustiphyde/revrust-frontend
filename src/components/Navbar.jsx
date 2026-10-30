import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import revRustLogo from "../assets/rev-rust-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/music", label: "Music" },
  { to: "/merch", label: "Merch" },
  { to: "/videos", label: "Videos" },
  { to: "/shows", label: "Shows" },
  { to: "/art", label: "Art" },
  { to: "/worlds", label: "Worlds" },
  { to: "/lab", label: "Lab" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="site-nav container" aria-label="Main navigation">
        <NavLink
          to="/"
          className="site-brand"
          onClick={() => setMenuOpen(false)}
        >
          <img src={revRustLogo} alt="Rev Rust" className="site-brand__logo" />
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="site-nav-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul
          id="site-nav-links"
          className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}
        >
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "nav-link--active" : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}