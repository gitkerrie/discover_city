# Overseas Launch Kit

This directory contains the working assets for the first organic launch of Taste China.

## Generated Assets

- `cards/index.html` renders 12 city cards and three comparison covers in a 4:5 layout.
- `exports/` contains the 15 ready-to-publish JPEG files at 1080 x 1350 pixels.
- `social-copy.md` contains an English caption, alt text, and hashtags for every city.
- `utm-links.csv` contains channel-specific links for all 12 cities and three comparison guides across Pinterest, Instagram, Reddit, and creator outreach.
- `launch-checklist.md` separates verified launch work from account-level owner actions.

Run `npm run generate` after editing city data. The files above are generated from `js/data.js` and should not be edited by hand.

Run `npm run export:cards` after generating the site to refresh every JPEG. The exporter starts its own local server and uses installed Chrome by default; set `PLAYWRIGHT_CHANNEL=msedge` or another Playwright browser channel when needed.

Open `http://localhost:8000/marketing/cards/` at desktop width to review the cards. Each card has a stable `#card-<slug>` anchor and a print size of 1080 x 1350 pixels.

## Campaign Rules

- Link to a city landing page, not the map homepage.
- Use the matching channel URL from `utm-links.csv`.
- Make each post useful before the link; do not publish identical copy across communities.
- Record the publish date, destination, and result in the content calendar.
- Use only images listed in `assets/dishes/SOURCES.md` and retain the supplied alt text.

Before changing the production domain, update `scripts/site-config.js`, run `npm run generate`, and verify every canonical and sitemap URL with `npm run check`.
