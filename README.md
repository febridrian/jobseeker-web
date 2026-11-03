# Jobseeker Company website

The Jobseeker Company marketing site: 43 pages built from the design canvas
"Jobseeker Company — Homepage Redesign". It's a Vite + React multi-page app.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
```

## Pages

`src/routes.json` lists every page and its URL. The home page is `/`, and the other
pages use the artboard name in kebab case (`/hrms/`, `/pricing/`, `/blog-post/`, …).
The "concept 2" artboards, built with the Jobseeker design system, are under `/v2/`
(`/v2/`, `/v2/careers/`, `/v2/contact/`, …).

## Layout

- `src/pages/<Name>/Page.jsx` holds a page. It's a class extending `DCLogic` (state,
  handlers, animations) with `Page.template = (v) => <JSX/>`, where `v` is what
  `renderVals()` returns.
- `src/pages/<Name>/styles.css` is the page's own stylesheet. Each page is its own HTML
  document, so these stylesheets don't affect each other.
- `src/pages/<Name>/main.jsx` is the page entry, and `<route>/index.html` is the HTML Vite builds.
- `src/lib/dc.js` is the shared runtime: `DCLogic` plus template helpers (`T` for text,
  `L` for lists, `S` for styles, `A` for asset URLs).
- `src/ds/jobseeker/` is the Jobseeker design system, used as `<Jobseeker.Button>`,
  `<Jobseeker.Input>`, `<Jobseeker.ChatMessage>` and so on. Its props are listed in
  `components/index.d.ts`.
- `public/images/` holds the design's images.

## Re-syncing from the design

The pages are generated from the design's `.dc.html` artboards by
`tools/convert-design.mjs`. To pick up design changes, download the canvas files
(`project/…`) and its images (`<asset-id>.<ext>`), then run:

```bash
npm run convert -- <design-dir> [<images-dir>]
```

This regenerates `src/pages`, the route HTML files, `src/routes.json`,
`src/lib/assets.js`, `public/images` and `src/ds/jobseeker`, so hand edits to those
files get overwritten.
