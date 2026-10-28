# Cloudflare deployment

The portfolio is published at https://burdena.net/ using the Cloudflare Pages project `anthony-burden-portfolio` and Direct Upload. The domain is registered with Cloudflare and its apex CNAME points to `anthony-burden-portfolio.pages.dev`. Production branch: `main`. GitHub Pages is disabled.

The build defaults to `SITE_URL=https://burdena.net`. Upload the complete contents of `dist/`, including the resume and project media. Direct Upload does not automatically publish GitHub pushes.

## Cloudflare Pages

The current project uses Direct Upload. The settings below also describe a future Git-connected project if desired.

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Production branch | main |
| Build command | node build.mjs |
| Build output directory | dist |
| Root directory | repository root |

Optional build environment variable: `SITE_URL`, set to the final HTTPS origin. This adds canonical URLs, social URL metadata, and a sitemap. The site works without it.

For Direct Upload, build locally, then upload the files inside `dist/` or the provided website ZIP. The archive root must contain `index.html` and `assets/`.

## Cloudflare Workers static assets

The included `wrangler.jsonc` points to `dist/`. After building, authenticate the Cloudflare CLI and deploy when ready:

```sh
node build.mjs
npx wrangler deploy
```

This command publishes the site. It has not been run as part of preparation.

## Verification after publishing

Open the homepage and all four project routes. Confirm the recording plays and the resume downloads. Unknown routes should show the provided 404 page.

References: [Cloudflare static HTML](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/) and [Workers static assets](https://developers.cloudflare.com/workers/static-assets/).
