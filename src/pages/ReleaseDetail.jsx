
import { Link, useParams } from "react-router-dom";
import { SiSpotify, SiApplemusic, SiYoutubemusic } from "react-icons/si";
import { releases } from "../data/releases";
import "./ReleaseDetail.css";

const platforms = [
  { key: "spotify", label: "Spotify", Icon: SiSpotify },
  { key: "appleMusic", label: "Apple Music", Icon: SiApplemusic },
  { key: "youtubeMusic", label: "YouTube Music", Icon: SiYoutubemusic },
];

function StreamingLinks({ release }) {
  return (
    <div className="release-detail__platforms">
      {platforms
        .filter(({ key }) => release.platforms?.[key])
        .map(({ key, label, Icon }) => (
          <a
            key={key}
            href={release.platforms[key]}
            target="_blank"
            rel="noopener noreferrer"
            className={`release-detail__platform release-detail__platform--${key}`}
          >
            <Icon aria-hidden="true" />
            {label}
          </a>
        ))}
    </div>
  );
}

function getYouTubeEmbedUrl(url) {
  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname.toLowerCase();
    let videoId = null;

    if (hostname === "youtu.be" || hostname === "www.youtu.be") {
      videoId = parsed.pathname.split("/")[1];
    } else if (
      hostname === "youtube.com" ||
      hostname === "www.youtube.com" ||
      hostname === "m.youtube.com"
    ) {
      if (parsed.pathname === "/watch") {
        videoId = parsed.searchParams.get("v");
      } else if (
        parsed.pathname.startsWith("/shorts/") ||
        parsed.pathname.startsWith("/embed/")
      ) {
        videoId = parsed.pathname.split("/")[2];
      }
    }

    return videoId && /^[A-Za-z0-9_-]{11}$/.test(videoId)
      ? `https://www.youtube-nocookie.com/embed/${videoId}`
      : null;
  } catch {
    return null;
  }
}

function Lyrics({ lyrics }) {
  return (
    <div className="release-detail__lyrics">
      {lyrics
        .trim()
        .split(/\n\s*\n/)
        .map((section, index) => {
          const lines = section.split("\n").map((line) => line.trim());
          const firstLine = lines[0];
          const hasLabel = /^\[.+\]$/.test(firstLine);

          return (
            <div className="release-detail__lyric-section" key={index}>
              {hasLabel && (
                <h3 className="release-detail__lyric-label">
                  {firstLine.slice(1, -1)}
                </h3>
              )}
              <p>{lines.slice(hasLabel ? 1 : 0).join("\n").trim()}</p>
            </div>
          );
        })}
    </div>
  );
}

function ReleaseSidebar({ release }) {
  const hasStory = Boolean(release.behindTheSong?.trim());
  const hasVideos = Boolean(release.videos?.length);
  const videoComingSoon = release.videoComingSoon === true;
  const hasCredits = Boolean(release.credits?.length);
  const hasLinks = Boolean(release.links?.length);

  if (!hasStory && !hasVideos && !videoComingSoon && !hasCredits && !hasLinks) {
    return null;
  }

  return (
    <aside className="release-detail__sidebar">
      {hasStory && (
        <section className="release-detail__section">
          <div className="release-detail__section-heading">
            <span className="music-eyebrow">THE STORY</span>
            <h2>BEHIND THE SONG</h2>
          </div>
          <div className="release-detail__sidebar-card">
            <div className="release-detail__story">
              {release.behindTheSong
                .trim()
                .split(/\n\s*\n/)
                .map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
            </div>
          </div>
        </section>
      )}

      {hasVideos && (
        <section className="release-detail__sidebar-card">
          <span className="music-eyebrow">WATCH</span>
          <h2>MUSIC VIDEOS</h2>
          <div className="release-detail__sidebar-videos">
            {release.videos.map((video) => {
              const embedUrl = getYouTubeEmbedUrl(video.url);
              return (
                <div className="release-detail__sidebar-video" key={video.url}>
                  {embedUrl && (
                    <div className="release-detail__video-frame">
                      <iframe
                        src={embedUrl}
                        title={video.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  )}
                  <a href={video.url} target="_blank" rel="noopener noreferrer">
                    {video.title} ↗
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {videoComingSoon && !hasVideos && (
        <section className="release-detail__sidebar-card">
          <span className="music-eyebrow">WATCH</span>
          <h2>MUSIC VIDEO</h2>
          <div className="release-detail__video-coming-soon">
            <span>COMING SOON</span>
            <p>The official music video is on its way.</p>
          </div>
        </section>
      )}

      {hasCredits && (
        <section className="release-detail__sidebar-card">
          <span className="music-eyebrow">THE PEOPLE</span>
          <h2>RELEASE CREDITS</h2>
          <div className="release-detail__credits">
            {release.credits.map((credit, index) => (
              <div key={`${credit.name}-${index}`}>
                <span>{credit.role}</span>
                {credit.url ? (
                  <a href={credit.url} target="_blank" rel="noopener noreferrer">
                    {credit.name} ↗
                  </a>
                ) : (
                  <strong>{credit.name}</strong>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      
      {release.inMemoriam && (
        <section className="release-detail__memorial">
          <div className="release-detail__memorial-heading">
            <span className="release-detail__memorial-symbol">
              ✦
            </span>
            <h2>In Memoriam</h2>
          </div>

          <h3 className="release-detail__memorial-name">
            {release.inMemoriam.name}
          </h3>

          <p className="release-detail__memorial-date">
            Remembering Ross · {release.inMemoriam.date}
          </p>

          <div className="release-detail__memorial-message">
            {release.inMemoriam.message}
          </div>
        </section>
      )}


      {hasLinks && (
        <section className="release-detail__sidebar-card">
          <span className="music-eyebrow">EXPLORE MORE</span>
          <h2>RELATED LINKS</h2>
          <div className="release-detail__links">
            {release.links.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label} ↗
              </a>
            ))}
          </div>
        </section>
      )}
    </aside>
  );
}

export default function ReleaseDetail() {
  const { slug } = useParams();
  const release = releases.find((item) => item.id === slug);

  if (!release) {
    return (
      <section className="release-detail__missing container">
        <h1>Release Not Found</h1>
        <p>We couldn't find that release.</p>
        <Link to="/music" className="button button-primary">
          Back to Music
        </Link>
      </section>
    );
  }

  const spotifyId = release.platforms?.spotify?.match(
    /open\.spotify\.com\/track\/([A-Za-z0-9]+)/
  )?.[1];

  
  const hasSidebar =
    Boolean(release.behindTheSong?.trim()) ||
    Boolean(release.videos?.length) ||
    Boolean(release.videoComingSoon) ||
    Boolean(release.credits?.length) ||
    Boolean(release.links?.length) ||
    Boolean(release.inMemoriam);


  return (
    <div
      className={`release-detail${
        release.id === "holiday-feast" ? " release-detail--holiday" : ""
      }`}
    >
      <div className="container">
        <nav className="release-detail__breadcrumb" aria-label="Breadcrumb">
          <Link to="/music">Music</Link>
          <span aria-hidden="true">/</span>
          <span>{release.title}</span>
        </nav>

        <section className="release-detail__hero">
          <div className="release-detail__artwork">
            <img src={release.artwork} alt={`${release.title} cover artwork`} />
          </div>
          <div className="release-detail__intro">
            <span className="music-eyebrow">
              {release.seasonal ? "HOLIDAY RELEASE" : "REV RUST RELEASE"}
            </span>
            <h1>{release.title}</h1>
            <p className="release-detail__artist">REV RUST</p>
            {release.description && <p>{release.description}</p>}
            <StreamingLinks release={release} />
          </div>
        </section>

        {spotifyId && (
          <section className="release-detail__section">
            <div className="release-detail__section-heading">
              <span className="music-eyebrow">PRESS PLAY</span>
              <h2>LISTEN NOW</h2>
            </div>
            <iframe
              title={`Listen to ${release.title} on Spotify`}
              src={`https://open.spotify.com/embed/track/${spotifyId}`}
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{ border: 0, borderRadius: "12px" }}
            />
          </section>
        )}

        {(release.lyrics || hasSidebar) && (
          <div
            className={`release-detail__content ${
              !release.lyrics ? "release-detail__content--sidebar-only" : ""
            } ${!hasSidebar ? "release-detail__content--lyrics-only" : ""}`}
          >
            {release.lyrics && (
              <section className="release-detail__section">
                <div className="release-detail__section-heading">
                  <span className="music-eyebrow">THE WORDS</span>
                  <h2>LYRICS</h2>
                </div>
                <Lyrics lyrics={release.lyrics} />
              </section>
            )}
            <ReleaseSidebar release={release} />
          </div>
        )}

        <div className="release-detail__back">
          <Link to="/music">← Back to Discography</Link>
        </div>
      </div>
    </div>
  );
}
