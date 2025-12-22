import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#3B2A1E"}}>
      <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none" }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/music">Music</Link></li>
        <li><Link to="/merch">Merch</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        <li><Link to="/shows">Shows</Link></li>
        <li><Link to="/art">Art</Link></li>
        <li><Link to="/worlds">Worlds</Link></li>
        <li><Link to="/lab">Lab</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
