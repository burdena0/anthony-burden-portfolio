import { mkdir, writeFile, rm } from 'node:fs/promises';
import { projects } from './projects.mjs';
import { layout } from './templates/layout.mjs';
import { homePage } from './templates/home.mjs';
import { projectPage } from './templates/project.mjs';

const siteUrl = process.env.SITE_URL?.replace(/\/+$/, '') || '';
if (siteUrl && !/^https?:\/\//.test(siteUrl)) throw new Error('SITE_URL must be an absolute http(s) URL.');
await mkdir('dist/projects', { recursive: true });
await writeFile('dist/index.html', layout({ title: 'Anthony Burden — Robotics & computer vision', description: 'Computer engineering at RIT. Projects in robot perception, camera tracking, and embedded systems.', body: homePage(projects), siteUrl, active: 'overview' }));
for (const [index, project] of projects.entries()) {
  const route = `/projects/${project.slug}/`;
  await mkdir(`dist${route}`, { recursive: true });
  await writeFile(`dist${route}index.html`, layout({ title: `${project.short} — Anthony Burden`, description: project.intro, body: projectPage(project, projects[(index + 1) % projects.length]), siteUrl, route, active: 'projects' }));
}
await writeFile('dist/404.html', layout({ title: 'Page not found — Anthony Burden', description: 'This page could not be found.', body: '<main id="main" class="content missing"><h1>Page not found</h1><a class="text-link" href="/">Return to the portfolio →</a></main>', siteUrl }));
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n${siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml\n` : ''}`);
if (siteUrl) {
  const routes = ['/', ...projects.map(project => `/projects/${project.slug}/`)];
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(route => `<url><loc>${siteUrl}${route}</loc></url>`).join('')}</urlset>`);
} else await rm('dist/sitemap.xml', { force: true });
console.log('Built portfolio and four project studies.');
