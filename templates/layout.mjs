import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
const styleVersion = createHash('sha256').update(readFileSync(new URL('../dist/styles.css', import.meta.url))).digest('hex').slice(0, 10);
export const links = {
  github: 'https://github.com/burdena0',
  linkedin: 'https://www.linkedin.com/in/anthony-burden-17203727a/',
  email: 'anthonydavidburden@gmail.com',
  resume: '/assets/Anthony-Burden-Resume.pdf'
};
const escape = text => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
function header() {
  return `<header class="site-header"><div class="header-inner">
    <a class="identity" href="/" aria-label="Anthony Burden home"><strong>Anthony Burden</strong><span>Computer Engineering</span></a>
    <nav aria-label="Portfolio navigation"><a href="/#projects">Projects</a><a href="/#experience">Experience</a><a href="/#contact">Contact</a><a class="button" href="${links.resume}" target="_blank" rel="noopener">Resume <span class="pdf-label">(PDF)</span></a></nav>
  </div></header>`;
}
export function footer() { return `<footer><span>Anthony Burden</span><div><a href="${links.github}">GitHub</a><a href="${links.linkedin}">LinkedIn</a><a href="mailto:${links.email}">Email</a></div></footer>`; }
export function layout({ title, description, body, siteUrl = '', route = '/' }) {
  return `<!doctype html><html lang="en"><head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${escape(title)}</title><meta name="description" content="${escape(description)}">
  <meta name="theme-color" content="#ffffff"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}">
${siteUrl ? `<link rel="canonical" href="${escape(siteUrl + route)}"><meta property="og:url" content="${escape(siteUrl + route)}">` : ''}
  <link rel="icon" href="/assets/favicon.svg"><link rel="stylesheet" href="/styles.css?v=${styleVersion}">
  </head><body><a class="skip" href="#main">Skip to content</a>${header()}${body}</body></html>`;
}
