# Anthony Burden portfolio

Personal engineering portfolio for projects in robotics, computer vision, and embedded systems.

[View portfolio](https://burdena.net/)

## Local development

```sh
node build.mjs
node scripts/check-site.mjs
python -m http.server 4173 --directory dist
```

The site is static HTML and CSS. It uses system fonts and has no runtime dependencies. It is hosted on Cloudflare Pages through Direct Upload. The repository workflow builds the site and checks internal links only.

## Source structure

- `projects.mjs`: project descriptions, results, testing limits, and source links.
- `templates/layout.mjs`: shared header, metadata, and footer.
- `templates/home.mjs`: overview, projects, experience, and contact.
- `templates/project.mjs`: individual project studies.
- `dist/styles.css`: responsive layout and design tokens.
- `dist/assets/`: original project media and the supplied resume.

Run the build after editing the templates or project data. Canonical metadata and the sitemap use `https://burdena.net` by default. Set `SITE_URL` to override the origin, or to an empty string for a build without canonical URLs.

## Cloudflare

The complete uploadable website is in `dist/`. See [DEPLOYMENT.md](DEPLOYMENT.md) for Cloudflare Pages and Workers settings. The included `wrangler.jsonc` configures static assets for Workers; no Worker server code is required.

## Project media

Webots images and the MuJoCo recording are actual saved simulation outputs. Project studies describe the recorded results and validation limits. VECC leadership was during Fall 2025.

Camera simulation geometry is adapted from [Turret Mechanism by PJohnso1](https://www.thingiverse.com/thing:4259522), licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
