
import { Link } from "react-router-dom";
import "./ComingSoon.css";

export default function ComingSoon({
  eyebrow = "REV. RUST / UNDER CONSTRUCTION",
  title = "SOMETHING'S BREWING.",
  description = "We're working on something worth making noise about. Check back soon.",
}) {
  return (
    <section className="coming-soon">
      <div className="coming-soon__glow" aria-hidden="true" />

      <div className="coming-soon__content">
        <span className="coming-soon__eyebrow">{eyebrow}</span>

        <h1 className="coming-soon__title">{title}</h1>

        <div className="coming-soon__status">
          <span className="coming-soon__line" />
          <span>COMING SOON</span>
          <span className="coming-soon__line" />
        </div>

        <p className="coming-soon__description">{description}</p>

        <Link to="/music" className="coming-soon__button">
          EXPLORE THE MUSIC
          <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="coming-soon__bottom" aria-hidden="true">
        <span>REV. RUST</span>
        <span>STAY TUNED</span>
      </div>
    </section>
  );
}
