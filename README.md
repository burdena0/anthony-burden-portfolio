# Anthony Burden portfolio

Personal engineering portfolio for projects in robotics, computer vision, and embedded systems.

## Local development

```sh
node build.mjs
node scripts/check-site.mjs
python -m http.server 4173 --directory dist
```

The site is static HTML and CSS. It uses system fonts and has no runtime dependencies. No automatic hosting deployment is configured. The repository workflow builds the site and checks internal links only.

## Source structure

- `projects.mjs`: project descriptions, results, testing limits, and source links.
- `templates/layout.mjs`: shared header, metadata, and footer.
- `templates/home.mjs`: overview, projects, experience, and contact.
- `templates/project.mjs`: individual project studies.
- `dist/styles.css`: responsive layout and design tokens.
- `dist/assets/`: original project media and the supplied resume.

Run the build after editing the templates or project data. Set `SITE_URL` to the final site origin at build time to generate canonical metadata and a sitemap. Without it, the output stays independent of any host or domain.

## Cloudflare

The complete uploadable website is in `dist/`. See [DEPLOYMENT.md](DEPLOYMENT.md) for Cloudflare Pages and Workers settings. The included `wrangler.jsonc` configures static assets for Workers; no Worker server code is required.

## Project media

Webots images and the MuJoCo recording are actual saved simulation outputs. Project studies describe the recorded results and validation limits. VECC leadership was during Fall 2025.

Camera simulation geometry is adapted from [Turret Mechanism by PJohnso1](https://www.thingiverse.com/thing:4259522), licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
