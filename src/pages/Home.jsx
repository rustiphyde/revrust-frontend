
import { Link } from "react-router-dom";
import { SiSpotify, SiApplemusic, SiYoutubemusic } from "react-icons/si";
import revRustLogo from "../assets/rev-rust-logo.png";
import cascadeFailureCover from "../assets/cascade-failure.jpg";
import "./Home.css";

const sections = [
  {
    number: "01",
    title: "MUSIC",
    description: "Original tracks, releases, lyrics, and the stories behind the music.",
    link: "/music",
    label: "Explore Music",
  },
  {
    number: "02",
    title: "VIDEOS",
    description: "Official music videos, lyric videos, and visual storytelling.",
    link: "/videos",
    label: "Watch Videos",
  },
  {
    number: "03",
    title: "MERCH",
    description: "Official Rev. Rust merchandise, apparel, and more.",
    link: "/merch",
    label: "Shop Merch",
  },
  {
    number: "04",
    title: "THE LAB",
    description: "Collaborations, creative partnerships, and making music with other artists.",
    link: "/lab",
    label: "Enter the Lab",
  },
];

export default function Home() {
  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero__ambient" aria-hidden="true" />

        <div className="container home-hero__content">
          <div className="home-hero__layout">
            <div className="home-hero__left">
              <div className="home-hero__eyebrow">
                <span className="home-hero__indicator" />
                INDEPENDENT MUSIC WITHOUT BOUNDARIES
              </div>

              <h1 className="home-hero__brand">
                <img
                  src={revRustLogo}
                  alt="Rev Rust"
                  className="home-hero__logo"
                  fetchPriority="high"
                />
              </h1>

              <div className="home-hero__intro">
                <div className="home-hero__accent" />

                <p>
                  SOUND WITHOUT BOUNDARIES.
                  <br />
                  CREATIVITY WITHOUT LIMITS.
                </p>
              </div>

              <p className="home-hero__description">
                Rap, punk, metal, horrorcore, and everything in between.
                No formulas. No genre restrictions. Just music made
                without compromise.
              </p>

              <div className="home-hero__actions">
                <Link to="/music" className="button button-primary">
                  Explore the Music <span aria-hidden="true">↗</span>
                </Link>

                <Link to="/videos" className="button home-hero__secondary">
                  Watch Videos <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>

            <div className="home-featured">
              <div className="home-featured__label">
                <span className="home-featured__pulse" />
                FEATURED RELEASE
              </div>

              <Link
                to="/music/cascade-failure"
                className="home-featured__artwork"
                aria-label="Explore Cascade Failure by Rev Rust"
              >
                <img
                  src={cascadeFailureCover}
                  alt="Cascade Failure cover artwork by Rev Rust"
                />
              </Link>

              <div className="home-featured__details">
                <div>
                  <span className="home-featured__eyebrow">
                    REV RUST / FEATURED MUSIC
                  </span>
                  <h2>CASCADE FAILURE</h2>
                </div>

                <Link
                  to="/music/cascade-failure"
                  className="home-featured__arrow"
                  aria-label="Explore Cascade Failure"
                >
                  ↗
                </Link>
              </div>

              <div className="home-featured__streaming">
                <a
                  href="https://open.spotify.com/track/2bQ3Y4VQ2AN7qU26HK4pkj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-featured__stream-link"
                >
                  <SiSpotify className="home-featured__platform-icon spotify" />
                  <span>Spotify</span>
                </a>

                <a
                  href="https://music.apple.com/us/song/cascade-failure/6809971738"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-featured__stream-link"
                >
                  <SiApplemusic className="home-featured__platform-icon apple" />
                  <span>Apple Music</span>
                </a>

                <a
                  href="https://music.youtube.com/watch?v=hvuX3DAjsyQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-featured__stream-link"
                >
                  <SiYoutubemusic
                    className="home-featured__platform-icon youtube-music"
                    aria-hidden="true"
                  />
                  <span>YouTube Music</span>
                </a>
              </div>

              <Link
                to="/music/cascade-failure"
                className="home-featured__all-platforms"
              >
                <span>View All Streaming Platforms</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="home-hero__bottom">
            <span>MUSIC / VIDEOS / MERCH / COLLABORATIONS</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>
      </section>

      <section className="home-explore section">
        <div className="container">
          <div className="home-explore__heading">
            <div>
              <span className="home-explore__eyebrow">
                EXPLORE REV RUST
              </span>

              <h2>
                MORE THAN
                <br />
                <span className="text-gradient">JUST NOISE.</span>
              </h2>
            </div>

            <p>
              From genre-defying music and visual storytelling
              to official merchandise and collaborations with
              other artists. Explore everything Rev. Rust.
            </p>
          </div>

          <div className="home-explore__grid">
            {sections.map((section) => (
              <Link
                to={section.link}
                className="home-explore__card"
                key={section.number}
              >
                <div className="home-explore__card-top">
                  <span>/{section.number}</span>
                  <span aria-hidden="true">↗</span>
                </div>

                <div className="home-explore__card-content">
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                  <span className="home-explore__card-link">
                    {section.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="home-explore__more">
            <Link to="/shows">Upcoming Shows ↗</Link>
            <Link to="/about">About Rev Rust ↗</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
