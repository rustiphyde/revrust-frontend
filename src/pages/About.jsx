
import { Link } from "react-router-dom";
import revRustAbout from "../assets/rev-rust-about.jpg";
import "./About.css";

const influences = [
  {
    title: "Rap & Horrorcore",
    description:
      "East Coast roots, Midwest influence, intricate rhyme chains, dark storytelling, and unapologetic lyricism.",
  },
  {
    title: "Metal & Heavy Music",
    description:
      "Aggressive instrumentation, guttural growls, heavy riffs, and explosive vocal delivery that bring intensity to the music.",
  },
  {
    title: "Punk & Grunge",
    description:
      "Raw emotion, distorted guitars, rebellious energy, melodic hooks, and an unapologetically independent attitude.",
  },
  {
    title: "Beyond Genre",
    description:
      "Dubstep, electronic experimentation, and even country influences all have a place in the music.",
  },
];

const milestones = [
  {
    year: "1990s",
    title: "The Foundation",
    description:
      "Growing up in New Jersey, a love of grunge, metal, punk, and hip-hop develops into a lifelong passion for music.",
  },
  {
    year: "Early 2000s",
    title: "Finding the Words",
    description:
      "Drawing inspiration from a wide range of hip-hop artists, he develops his own approach to technical lyricism, intricate rhyme schemes, and songwriting.",
  },
  {
    year: "2013",
    title: "Going Solo in St. Louis",
    description:
      "After years of playing bass and guitar in bands, he begins pursuing an independent music career in St. Louis, producing beats, recording songs, and taking greater control of his creative direction.",
  },
  {
    year: "2023",
    title: "Rev. Rust Is Born",
    description:
      "After years of experimenting with different artist identities, H8r-aid introduces Rev. Rust and a renewed creative direction.",
  },
];

export default function About() {
  return (
    <main className="about-page">
      
    <section className="about-hero">
      <div className="container about-hero__inner">
        <div className="about-hero__content">
          <span className="about-hero__eyebrow">
            THE ARTIST BEHIND THE MUSIC
          </span>

          <h1 className="about-hero__title">
            NO BOUNDARIES.
            <br />
            NO FORMULAS.
            <br />
            <span>JUST MUSIC.</span>
          </h1>

          <p className="about-hero__intro">
            Rap. Horrorcore. Punk. Metal. Dubstep. Country.
            A lifetime of musical influences brought together
            without compromise.
          </p>

          <div className="about-hero__actions">
            <Link
              to="/music"
              className="about-button about-button--primary"
            >
              Explore the Music
            </Link>

            <a
              href="#the-story"
              className="about-button about-button--outline"
            >
              Read the Story
            </a>
          </div>
        </div>

        <div className="about-hero__artwork">
          <img
            src={revRustAbout}
            alt="Illustrated Rev. Rust portrait in an industrial wasteland"
            className="about-hero__image"
          />
        </div>
      </div>
    </section>

      <section id="the-story" className="about-section about-story">
        <div className="container about-story__layout">
          <div className="about-section__heading">
            <span className="about-section__eyebrow">THE BACKSTORY</span>
            <h2>
              A Lifetime of <span>Noise</span>
            </h2>
          </div>

          <div className="about-story__content">
            <p className="about-story__lead">
              Raised in New Jersey and shaped by the music of the
              80s, 90s, and early 2000s, Rev. Rust is an independent
              recording artist whose sound refuses to fit neatly
              into any single genre.
            </p>
            
            <p>
              Music has been part of his life since childhood,
              but the 1990s were especially formative. Growing
              up in New Jersey, he developed a deep appreciation
              for the raw emotion of grunge, the aggression of
              heavy metal, the rebellious energy of punk, and
              the rhythm and lyricism of hip-hop.
            </p>

            <p>
              As his musical interests expanded through the late
              90s and early 2000s, heavier styles introduced
              new possibilities for vocal expression. Aggressive
              instrumentation, guttural growls, melodic singing,
              and explosive vocal delivery all became influences
              that would eventually find their way into his
              own recordings.
            </p>

            <p>
              His appreciation for hip-hop also shaped his approach
              to songwriting. Drawing inspiration from generations
              of lyricists, he developed a fascination with intricate
              rhyme schemes, multisyllabic patterns, internal rhymes,
              and complex wordplay. That appreciation for the craft
              pushed him to continually refine his writing and
              develop his own lyrical style.
            </p>

            <p>
              In his younger years, he also played bass and guitar
              in various bands, gaining firsthand experience with
              collaborative songwriting and live musicianship.
              But maintaining a band proved increasingly difficult.
              Every member had their own life, responsibilities,
              and priorities, and keeping everyone moving in the
              same direction was often a challenge.
            </p>

            <p>
              Eventually, he gravitated toward working independently,
              where he could take full responsibility for his music,
              explore different creative directions, and move at
              his own pace without relying on an entire group
              to make things happen.
            </p>

            <p>
              In 2013, after moving to St. Louis, Missouri,
              he began producing beats, recording rap songs,
              and seriously pursuing a solo music career.
              His East Coast roots remained an important influence,
              while the Midwest rap scene added new dimensions
              to his developing style.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section about-origin">
        <div className="container about-origin__inner">
          <span className="about-section__eyebrow">THE NAME IS REAL</span>

          <h2>
            Not Just a <span>Persona.</span>
          </h2>

          <div className="about-origin__content">
            <p className="about-origin__lead">
              Rev. Rust isn't just a stage name.
              He's actually a legally ordained minister.
            </p>

            <p>
              The story behind his ordination is as unconventional
              as his music. While DJing a wedding for friends,
              they paid to have him ordained so he could also
              officiate their ceremony.
            </p>

            <p>
              Years later, after pursuing music under various
              artist identities without finding the momentum
              he wanted, he decided to make a fresh start.
            </p>

            <p>
              In 2023, Rev. Rust emerged with H8r-aid,
              a defiant declaration about leaving the past
              behind, ignoring the naysayers, and continuing
              to chase his dreams regardless of the obstacles.
            </p>

            <p className="about-origin__closing">
              The rebrand wasn't about pretending to be somebody else.
              It was about bringing every side of himself together
              under one name.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section about-sound">
        <div className="container">
          <div className="about-section__heading about-section__heading--center">
            <span className="about-section__eyebrow">THE SOUND</span>
            <h2>
              Genre Is Not a <span>Restriction.</span>
            </h2>
            <p>
              Every influence has a place. Every song gets
              to become whatever it needs to be.
            </p>
          </div>

          <div className="about-sound__grid">
            {influences.map((influence, index) => (
              <article className="about-sound__card" key={influence.title}>
                <span className="about-sound__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{influence.title}</h3>
                <p>{influence.description}</p>
              </article>
            ))}
          </div>

          <div className="about-sound__statement">
            <p>
              Sometimes it's aggressive battle rap.
              Sometimes it's horror-inspired storytelling.
              Sometimes it's a melodic pop-punk song
              with an emo edge.
            </p>

            <strong>
              The only rule is that there are no rules.
            </strong>
          </div>
        </div>
      </section>

      <section className="about-section about-journey">
        <div className="container">
          <div className="about-section__heading">
            <span className="about-section__eyebrow">THE JOURNEY</span>
            <h2>
              Built Over <span>Time.</span>
            </h2>
          </div>

          <div className="about-journey__timeline">
            {milestones.map((milestone) => (
              <article
                className="about-journey__item"
                key={milestone.year}
              >
                <span className="about-journey__year">
                  {milestone.year}
                </span>

                <div className="about-journey__details">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-cta">
        <div className="container about-cta__inner">
          <span className="about-section__eyebrow">
            THE STORY CONTINUES
          </span>

          <h2>
            Hear What Happens <span>Next.</span>
          </h2>

          <p>
            From intricate rhyme chains and guttural growls
            to pop-punk melodies and dark humor,
            the music tells the rest of the story.
          </p>

          <Link to="/music" className="about-button about-button--primary">
            Explore the Discography
          </Link>
        </div>
      </section>
    </main>
  );
}
