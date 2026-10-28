import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
async function htmlFiles(directory) {
  const out = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) out.push(...await htmlFiles(target));
    else if (entry.name.endsWith('.html')) out.push(target);
  }
  return out;
}
const pages = new Map();
for (const file of await htmlFiles(root)) {
  const html = await readFile(file, 'utf8');
  const headings = [...html.matchAll(/<h1(?:\s[^>]*)?>/g)];
  if (headings.length !== 1) throw new Error(`${file}: expected one h1`);
  pages.set(file, {
    ids: new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1])),
    links: [...html.matchAll(/\b(?:href|src|poster)="([^"]+)"/g)].map(match => match[1])
  });
}
let checked = 0;
for (const [file, page] of pages) {
  for (const link of page.links) {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(link)) continue;
    const [resource, anchor] = link.split('#');
    const location = resource.split('?')[0];
    let target = location ? path.resolve(location.startsWith('/') ? root : path.dirname(file), '.' + (location.startsWith('/') ? location : '/' + location)) : file;
    if (target !== root && !target.startsWith(root + path.sep)) throw new Error(`Path escapes build: ${link}`);
    const info = await stat(target);
    if (info.isDirectory()) target = path.join(target, 'index.html');
    if (!(await stat(target)).isFile()) throw new Error(`Missing file: ${link}`);
    if (anchor && pages.has(target) && !pages.get(target).ids.has(anchor)) throw new Error(`Missing anchor: ${link}`);
    checked++;
  }
}
console.log(`Verified ${pages.size} pages and ${checked} internal references.`);
