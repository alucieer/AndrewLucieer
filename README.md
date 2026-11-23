# Andrew Lucieer — portfolio

A personal portfolio for Andrew Lucieer, built with Next.js 16, React 19, and TypeScript. It presents three case studies on design systems and accessibility, plus a small interactive React preference panel. The site is statically exported and published at [andrewlucieer.com](https://www.andrewlucieer.com/).

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Check and build

```bash
npm run lint
npm run build
```

The build writes a static site to `out/`. To preview that output locally, run `python3 -m http.server 4173 --directory out` and open [http://localhost:4173](http://localhost:4173). Deploy the **contents** of `out/` to a static web host. Upload assets before `index.html` when updating an existing live site.

## Project map

- `app/page.tsx` — page structure, introduction, and About copy
- `app/case-studies.tsx` — case studies, image descriptions, and captions
- `app/accessibility-lab.tsx` — interactive React preference panel
- `app/globals.css` — visual styles and responsive layout
- `app/layout.tsx` — page metadata and document shell
- `public/portfolio/` — full-size case-study screenshots
- `next.config.ts` — static export configuration

The images in `public/portfolio/` are included in the repository and served publicly with the site. Confirm that each image can also be redistributed through a public GitHub repository before publishing the source.
