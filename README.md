# Rev Rust — Official Music Website

The official website for **Rev Rust**, an independent recording artist blending rap, rock, horror, dark humor, and experimental storytelling.

Built with **React and Vite**, the site serves as the central destination for Rev Rust's music, releases, lyrics, music videos, and the stories behind each song.

**Website:** [revrust.com](https://revrust.com)  
**Development:** [dev.revrust.com](https://dev.revrust.com)

## Features

- **Music Discography** — Browse Rev Rust's releases, including featured tracks and seasonal music.
- **Individual Release Pages** — Dedicated pages featuring artwork, lyrics, streaming links, credits, and background stories.
- **Streaming Integration** — Direct links to Spotify, Apple Music, and YouTube Music, with embedded Spotify playback.
- **Behind the Song** — Insights into the inspiration, concepts, and creative process behind individual releases.
- **Music Videos** — Embedded video support and placeholders for upcoming releases.
- **Seasonal Releases** — Dedicated presentation and custom styling for holiday-themed music.
- **Responsive Design** — Layouts designed for desktop, tablet, and mobile devices.
- **Custom Visual Identity** — Dark, atmospheric styling with rust, copper, and warm accent colors.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| Vite | Development server and production build system |
| React Router | Client-side navigation and release-detail routes |
| React Icons | Streaming platform icons and interface elements |
| CSS | Custom styling, responsive layouts, and visual effects |
| Git & GitHub | Version control and source management |
| GitHub Actions | Automated deployment |
| cPanel Hosting | Development and production hosting |

## Project Structure

```text
revrust-frontend/
├── public/
├── src/
│   ├── assets/
│   │   └── releases/
│   ├── components/
│   │   ├── Footer.css
│   │   └── Navbar.css
│   ├── data/
│   │   └── releases.js
│   ├── pages/
│   │   ├── Home.css
│   │   ├── Music.css
│   │   ├── ReleaseDetail.jsx
│   │   └── ReleaseDetail.css
│   └── App.jsx
├── .github/
│   └── workflows/
├── package.json
└── vite.config.js
```

The project separates reusable components, page-level layouts, static assets, and release data to simplify maintenance and future expansion.

## Local Development

### Requirements

- Node.js
- npm
- Git

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd revrust-frontend
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Vite will display the local development URL in the terminal, typically `http://localhost:5173`.

### Production Build

Generate an optimized build:

```bash
npm run build
```

The compiled application is generated in the `dist/` directory.

Preview the production build locally:

```bash
npm run preview
```

## Music Release Management

Release information is maintained in:

`src/data/releases.js`

Each release is represented by a JavaScript object containing its metadata and optional content.

A typical release includes:

```javascript
{
  id: "release-slug",
  title: "Release Title",
  artwork: "/path/to/artwork.jpg",
  featured: false,
  seasonal: false,

  platforms: {
    spotify: "https://open.spotify.com/track/...",
    appleMusic: "https://music.apple.com/...",
    youtubeMusic: "https://music.youtube.com/..."
  },

  lyrics: `[Verse 1]
Song lyrics here...`,

  behindTheSong: `The story behind the release...`,

  videoComingSoon: true,

  credits: [
    { role: "Written & Performed By", name: "Rev. Rust" },
    { role: "Music & Production", name: "Rev. Rust" },
    { role: "Mixing & Mastering", name: "Alex Dieckhaus" },
    { role: "Cover Artwork", name: "Rev. Rust" }
  ],

  copyright: "© 2026 Rev. Rust aka Daniel Brendan Hoppins, All Rights Reserved."
}
```

The example above illustrates the release data structure. Actual releases use their respective metadata, streaming URLs, credits, and copyright years.

### Release Detail Pages

Each release is accessible through a dynamic route:

`/music/:slug`

For example:

`/music/cascade-failure`

The release-detail component automatically displays available content, including streaming platforms, lyrics, background stories, music videos, and credits.

### Seasonal Releases

Seasonal releases can be identified using:

```javascript
seasonal: true
```

Individual releases may also have custom styling. For example, *Holiday Feast* uses a festive background with evergreen, cranberry, copper, and golden accents while maintaining the site's overall visual identity.

## Git Branches and Deployment

The project maintains separate development and production branches.

| Branch | Environment | Website |
|---|---|---|
| `dev` | Development | [dev.revrust.com](https://dev.revrust.com) |
| `main` | Production | [revrust.com](https://revrust.com) |

### Development Workflow

Active development takes place on the `dev` branch.

```bash
git switch dev
git add .
git commit -m "Describe changes"
git push origin dev
```

GitHub Actions builds the application and deploys the compiled files to the development environment.

Development deployment destination:

`/home/revrust/dev_html/`

### Production Deployment

Production releases are deployed from the `main` branch.

After changes have been tested on the development website, selected commits can be promoted to production using Git.

For example:

```bash
git switch main
git pull origin main
git cherry-pick <commit-hash>
git push origin main
```

The production deployment workflow then handles the build and deployment.

This approach allows development to continue independently while promoting tested changes to production.

**Note:** Cherry-picking transfers only the selected commit. Dependencies on earlier development commits must be reviewed before deployment.

### Deployment Caching

Vite generates hashed asset filenames for production builds. Browsers may occasionally continue displaying previously cached content depending on server cache configuration.

If a deployment completes successfully but changes aren't visible, verify the site in a private browsing window and inspect the cache behavior before redeploying.

## Design Philosophy

The Rev Rust website reflects the artist's musical identity through a dark, high-contrast aesthetic.

The visual direction emphasizes atmospheric backgrounds, distressed and industrial influences, copper and rust tones, strong typography, and prominent release artwork.

Individual releases may introduce their own thematic treatments while maintaining consistency with the overall brand.

## Future Development

The website is an evolving platform. Planned and ongoing improvements include completing release metadata and lyrics, expanding music video integration, refining responsive layouts, improving performance and caching, and developing additional artist content.

## Copyright

© 2026 Rev. Rust aka Daniel Brendan Hoppins. All Rights Reserved.

All original music, lyrics, artwork, branding, and other creative content remain the property of their respective copyright holders unless otherwise stated.

Source code availability does not grant permission to reproduce or distribute copyrighted creative assets.