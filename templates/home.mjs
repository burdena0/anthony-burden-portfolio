import { links, footer } from './layout.mjs';
const summaries = {
  'camera-tracker': 'Day/night vision models, a Kalman tracker, and two-axis control in MuJoCo. Evaluated across 16 simulation scenarios.',
  'life-tracker': 'ESP32-S3 firmware and a custom 70 × 80 mm PCB for a two-player life and resource counter.',
  'local-inference': 'A Python Discord bot with streaming local inference, channel retrieval, and latency instrumentation.'
};
function projectRow(project) {
  return `<article class="project-row"><div><h3><a href="/projects/${project.slug}/">${project.short}</a></h3><p>${summaries[project.slug]}</p><p class="tools">${project.tech}</p></div><a class="text-link row-link" href="/projects/${project.slug}/">Project details <span aria-hidden="true">→</span></a></article>`;
}
export function homePage(projects) {
  const webots = projects[0];
  return `<main id="main" class="content">
    <section class="overview" aria-labelledby="overview-title">
      <div class="overview-copy"><h1 id="overview-title">Robotics &amp;<br>computer vision</h1><p class="overview-intro">I’m Anthony, a computer engineering student at Rochester Institute of Technology.</p><ul class="intro-facts"><li>Robot perception and camera tracking</li><li>Embedded systems and PCB design</li><li>B.S. expected May 2028 · Mathematics immersion</li></ul><div class="hero-actions"><a class="button" href="#projects">View projects</a><a class="text-link" href="${links.github}">GitHub <span aria-hidden="true">→</span></a></div><p class="availability">Seeking robotics and computer vision internships.</p></div>
      <figure class="hero-recording"><video controls playsinline preload="metadata" poster="/assets/camera-tracker.png" aria-label="Recorded MuJoCo camera tracking simulation"><source src="/assets/camera-tracker.mp4" type="video/mp4"><a href="/assets/camera-tracker.mp4">Download the recording</a></video><figcaption><a href="/projects/camera-tracker/">Pan/Tilt Camera Tracking Simulation</a><span>Recorded run in MuJoCo</span></figcaption></figure>
    </section>
    <section id="projects" class="projects-section" aria-labelledby="projects-title">
      <h2 id="projects-title">Projects</h2>
      <article class="featured-project"><figure class="featured-image"><a href="/projects/webots-vision/"><img src="/assets/webots-targets.png" alt="Camera input and predicted masks for red, blue, and green targets in Webots." width="1260" height="1120" loading="lazy"></a><figcaption>Webots camera frames and predicted target masks.</figcaption></figure><div class="featured-copy"><p class="project-category">Robot perception · Python / PyTorch / OpenCV</p><h3><a href="/projects/webots-vision/">Webots Neural Vision Robot</a></h3><p>A small e-puck robot that finds a selected color, turns toward it, and stops as it approaches.</p><p>I compared a 1,460-parameter CNN with an HSV baseline using 3,600 fresh synthetic images and 108 paired robot trials. Both methods use the same steering and stopping controller.</p><p class="project-note">Evaluated in simulation; physical hardware has not been tested.</p><div class="project-links"><a class="button" href="/projects/webots-vision/">Project details</a><a class="text-link" href="${links.github}/${webots.repo}">Source code <span aria-hidden="true">→</span></a></div></div></article>
      <div class="project-index">${projects.slice(1).map(projectRow).join('')}</div>
    </section>
    <section id="experience" class="experience-section split-section" aria-labelledby="experience-title"><div class="section-heading"><h2 id="experience-title">Experience<br> &amp; education</h2><a class="text-link" href="${links.resume}" target="_blank" rel="noopener">View resume (PDF) <span aria-hidden="true">→</span></a></div>
      <div><dl class="chronology"><div><dt>May 2026–present</dt><dd><h3>Founder &amp; Owner</h3><a class="organization" href="https://redbanksharpening.com">Red Bank Sharpening</a><p>Bookings, scheduling, website, and Python/SQLite operations controls.</p></dd></div><div><dt>Fall 2025</dt><dd><h3>Vice President</h3><p class="organization">Vintage Electronics and Computers Club, RIT</p><p>Showcases of vintage computing, networking, and electronics.</p></dd></div><div><dt>Expected May 2028</dt><dd><h3>B.S. Computer Engineering</h3><p class="organization">Rochester Institute of Technology</p><p>Mathematics immersion.</p></dd></div><div><dt>September–November 2024</dt><dd><h3>Canvasser</h3><p class="organization">GRSG Company · Rochester, NY</p><p>Voter outreach and door-to-door canvassing.</p></dd></div></dl></div>
    </section>
    <section class="technical-section split-section" aria-labelledby="technical-title"><h2 id="technical-title">Technical skills</h2><dl class="technical-list"><div><dt>Perception</dt><dd>PyTorch, OpenCV, ONNX Runtime</dd></div><div><dt>Simulation</dt><dd>Webots, MuJoCo</dd></div><div><dt>Embedded</dt><dd>C/C++, ESP-IDF, FreeRTOS, KiCad</dd></div><div><dt>Software</dt><dd>Python, SQLite, Git</dd></div></dl></section>
    <section id="contact" class="contact-section split-section" aria-labelledby="contact-title"><h2 id="contact-title">Contact</h2><div><p>For robotics and computer vision internship opportunities:</p><a class="contact-email" href="mailto:${links.email}">${links.email}</a><div class="contact-links"><a class="text-link" href="${links.linkedin}">LinkedIn <span aria-hidden="true">→</span></a><a class="text-link" href="${links.resume}" download="Anthony-Burden-Resume.pdf">Download resume (PDF) <span aria-hidden="true">→</span></a></div></div></section>
    ${footer()}
  </main>`;
}
