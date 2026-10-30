
import { SiSpotify, SiApplemusic, SiYoutubemusic } from "react-icons/si";
import { Link } from "react-router-dom";
import {
  featuredRelease,
  standardReleases,
  holidayReleases,
} from "../data/releases";
import Reveal from "../components/Reveal";
import "./Music.css";

const streamingPlatforms = [
  { key: "spotify", name: "Spotify", Icon: SiSpotify },
  { key: "appleMusic", name: "Apple Music", Icon: SiApplemusic },
  { key: "youtubeMusic", name: "YouTube Music", Icon: SiYoutubemusic },
];

function StreamingLinks({ release }) {
  const available = streamingPlatforms.filter(
    (platform) => release.platforms?.[platform.key]
  );

  if (!available.length) return null;

  return (
    <div className="music-streaming">
      {available.map(({ key, name, Icon }) => (
        <a
          key={key}
          href={release.platforms[key]}
          target="_blank"
          rel="noopener noreferrer"
          className={`music-streaming__link music-streaming__link--${key}`}
          aria-label={`Listen to ${release.title} on ${name}`}
        >
          <Icon aria-hidden="true" />
          <span>{name}</span>
        </a>
      ))}
    </div>
  );
}

function ReleaseCard({ release }) {
  return (
    <article className="music-release">
      <Link
        to={`/music/${release.id}`}
        className="music-release__artwork-link"
        aria-label={`View ${release.title} release details`}
      >
        <div className="music-release__artwork">
          <img
            src={release.artwork}
            alt={`${release.title} cover artwork`}
            loading="lazy"
          />
        </div>
      </Link>

      <div className="music-release__info">
        <h3>
          <Link to={`/music/${release.id}`}>
            {release.title}
          </Link>
        </h3>
        <span>REV RUST</span>
      </div>
    </article>
  );
}

export default function Music() {
  return (
    <div className="music-page">

      {/* ==========================================
          INTRODUCTION
          ========================================== */}

      <section className="music-intro container">
        <Reveal delay={0}>
          <span className="music-eyebrow">
            THE SOUND OF REV RUST
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1>
            ORIGINAL <span className="text-gradient">MUSIC.</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p>
            Every track is its own collision of sound, storytelling,
            and experimentation. Explore the releases and listen
            on your favorite platform.
          </p>
        </Reveal>
      </section>

      {/* ==========================================
          FEATURED RELEASE
          ========================================== */}

      {featuredRelease && (
        <section className="music-featured container">
          <Reveal delay={100}>
            <Link
              to={`/music/${featuredRelease.id}`}
              className="music-featured__artwork"
              aria-label={`View ${featuredRelease.title} release details`}
            >
              <img
                src={featuredRelease.artwork}
                alt={`${featuredRelease.title} cover artwork`}
              />
            </Link>
          </Reveal>

          <Reveal delay={250}>
            <div className="music-featured__content">
              <span className="music-eyebrow">
                FEATURED RELEASE
              </span>

              <h2>
                <Link to={`/music/${featuredRelease.id}`}>
                  {featuredRelease.title}
                </Link>
              </h2>

              <p>
                The latest release from Rev Rust. Listen on your
                preferred streaming platform.
              </p>

              <StreamingLinks release={featuredRelease} />
            </div>
          </Reveal>
        </section>
      )}

      {/* ==========================================
          DISCOGRAPHY
          ========================================== */}

      <section className="music-discography section">
        <div className="container">
          <Reveal className="music-section-heading">
            <span className="music-eyebrow">
              THE COLLECTION
            </span>

            <h2>DISCOGRAPHY</h2>

            <p>Original releases, newest to oldest.</p>
          </Reveal>

          <div className="music-release-grid">
            {standardReleases.map((release, index) => (
              <Reveal
                key={release.id}
                delay={(index % 4) * 100}
              >
                <ReleaseCard release={release} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          HOLIDAY RELEASES
          ========================================== */}

      {holidayReleases.length > 0 && (
        <section className="music-holiday section">
          <div className="container">
            <Reveal className="music-section-heading">
              <span className="music-eyebrow">
                SEASONAL RELEASES
              </span>

              <h2>HOLIDAY MUSIC</h2>

              <p>A different kind of holiday soundtrack.</p>
            </Reveal>

            <div className="music-holiday__grid">
              {holidayReleases.map((release, index) => (
                <Reveal
                  key={release.id}
                  delay={(index % 2) * 150}
                >
                  <article className="music-holiday__feature">
                    <Link
                      to={`/music/${release.id}`}
                      className="music-holiday__artwork"
                      aria-label={`View ${release.title} release details`}
                    >
                      <img
                        src={release.artwork}
                        alt={`${release.title} cover artwork`}
                        loading="lazy"
                      />
                    </Link>

                    <div className="music-holiday__content">
                      <span className="music-eyebrow">
                        A REV RUST HOLIDAY RELEASE
                      </span>

                      <h3>
                        <Link to={`/music/${release.id}`}>
                          {release.title}
                        </Link>
                      </h3>

                      <p>
                        A seasonal release with a distinctly Rev Rust
                        attitude. Explore the track and listen on your
                        favorite streaming platform.
                      </p>

                      <StreamingLinks release={release} />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
