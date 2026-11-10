# pikujs.com

Personal site of **Nirmaan J Sarkar** — Engineer · Adventurer · Hobbyist — and the
homepage of **Pikujs Solutions**, the one-person practice he builds under.

Plain static HTML, CSS and ~40 lines of JavaScript. No framework, no build step,
no client-side rendering: everything you read is in the markup, so search engines
and link previews get the real page.

Live at [pikujs.com](https://pikujs.com) on GitHub Pages.

## Structure

```
index.html          homepage — hero, what I do, work, history, about, off the clock, contact
privacy/index.html  privacy policy   → /privacy/
terms/index.html    terms of use     → /terms/
404.html            404, served by GitHub Pages
css/site.css        one stylesheet for every page
js/palette.js       palette switching only
img/                hero, photos, resume.pdf
robots.txt          sitemap pointer, blocks /mockups/ and /docs/
sitemap.xml         three public URLs
```

## Palettes

Three, switchable from the control in the bottom-right corner or with keys `1`/`2`/`3`:

| palette | role |
|---|---|
| `paper` | warm off-white, the light default |
| `night` | dark default |
| `duotone` | high-contrast red, opt-in only |

First load follows the OS: `prefers-color-scheme: dark` → `night`, otherwise
`paper`. An explicit click is stored in `localStorage` and wins from then on.
The palette is applied by an inline snippet in `<head>` so there is no flash of
the wrong theme; `js/palette.js` only handles the buttons, keys and OS changes.

## Local preview

The site is origin-rooted (`/css/...` is avoided, but `privacy/` and `terms/` are
directories), so serve the repo root rather than opening the file directly:

```sh
python3 -m http.server 8088
# then open http://localhost:8088/
```

## Deploying

Push to `master`. GitHub Pages serves the repo root; `CNAME` points at
`pikujs.com`. There is nothing to build — what is committed is what is served.

`mockups/` and `docs/` are git-ignored working notes (design iterations, a
direction-research report) and never deploy.

## Adding a project

The work grid is hand-written HTML in `index.html`: copy an existing `<a class="card">`
block, set `data-cat` to `Software`, `Research` or `Creative`, and update the tags,
title, summary and `href`. Linked cards get `Code ↗`; unlinked ones show the year.

## Credits

- Header photo and the guitar/trekking shots are his own.
- Typefaces: Instrument Serif and Inter Tight via Google Fonts.
- Layout and copy are original; nothing is left from the site's earlier
  Bootstrap/jQuery theme.

MIT licensed — see [LICENSE](LICENSE).
