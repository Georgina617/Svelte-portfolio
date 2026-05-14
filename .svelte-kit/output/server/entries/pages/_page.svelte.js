import { G as attr, V as escape_html, Q as ensure_array_like, K as attr_style, J as attr_class, P as derived } from "../../chunks/renderer.js";
import "clsx";
import { w as writable } from "../../chunks/index.js";
import { p as projects, s as skills } from "../../chunks/projects.js";
const reducedMotion = writable(false);
function ContactForm($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let name = "";
    let email = "";
    let message = "";
    let status = "";
    $$renderer2.push(`<section class="contact svelte-fq8g2m" id="contact" aria-labelledby="contact-title"><div><p class="eyebrow svelte-fq8g2m">Contact</p> <h2 id="contact-title" class="svelte-fq8g2m">Bring a sharp frontend problem.</h2> <p class="svelte-fq8g2m">I’m especially interested in product surfaces where animation, performance, and information
      architecture all matter at once.</p></div> <form novalidate="" class="svelte-fq8g2m"><label class="svelte-fq8g2m">Name <input${attr("value", name)} autocomplete="name" required="" class="svelte-fq8g2m"/></label> <label class="svelte-fq8g2m">Email <input${attr("value", email)} type="email" autocomplete="email" required="" class="svelte-fq8g2m"/></label> <label class="svelte-fq8g2m">Message <textarea rows="5" required="" class="svelte-fq8g2m">`);
    const $$body = escape_html(message);
    if ($$body) {
      $$renderer2.push(`${$$body}`);
    }
    $$renderer2.push(`</textarea></label> <button type="submit" class="svelte-fq8g2m">Compose message</button> <p class="status svelte-fq8g2m" role="status">${escape_html(status)}</p></form></section>`);
  });
}
function ExperienceConsole($$renderer) {
  const lines = [
    "$ run portfolio --mode immersive",
    "✓ route-level code splitting enabled",
    "✓ canvas particles respect reduced motion",
    "✓ contact inputs sanitized before mail handoff",
    "✓ command palette listening on Ctrl/⌘ K"
  ];
  $$renderer.push(`<section class="console-section svelte-16qjdht" aria-labelledby="console-title"><div class="copy svelte-16qjdht"><p class="eyebrow svelte-16qjdht">Developer tools experience</p> <h2 id="console-title" class="svelte-16qjdht">A portfolio that behaves like a crafted tool.</h2> <p class="svelte-16qjdht">The interface includes command navigation, keyboard affordances, reactive filters, theme
      persistence, and restrained canvas animation tuned for motion comfort.</p></div> <div class="terminal svelte-16qjdht" aria-label="Portfolio capability terminal"><!--[-->`);
  const each_array = ensure_array_like(lines);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let line = each_array[index];
    $$renderer.push(`<p${attr_style(`--delay: ${index * 120}ms`)} class="svelte-16qjdht">${escape_html(line)}</p>`);
  }
  $$renderer.push(`<!--]--></div></section>`);
}
function ParticleField($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    reducedMotion.subscribe((value) => value);
    $$renderer2.push(`<canvas class="particle-field svelte-hxo5ya" aria-hidden="true"></canvas>`);
  });
}
function Hero($$renderer) {
  $$renderer.push(`<section class="hero svelte-1q37ri0" id="top" aria-labelledby="hero-title">`);
  ParticleField($$renderer);
  $$renderer.push(`<!----> <div class="hero__content svelte-1q37ri0"><p class="eyebrow svelte-1q37ri0">Svelte engineer / interaction designer</p> <h1 id="hero-title" class="svelte-1q37ri0">Ava Morgan builds interfaces that feel alive.</h1> <p class="intro svelte-1q37ri0">I design and engineer fast, accessible product experiences with cinematic motion, clean systems,
      and a bias for interfaces people remember.</p> <div class="actions svelte-1q37ri0" aria-label="Primary actions"><a class="button button--primary svelte-1q37ri0" href="#projects">Explore work</a> <a class="button svelte-1q37ri0" href="/resume-ava-morgan.pdf" download="">Resume</a> <a class="button button--ghost svelte-1q37ri0" href="mailto:ava@example.com">ava@example.com</a></div></div> <div class="status-panel svelte-1q37ri0" aria-label="Portfolio status"><span class="svelte-1q37ri0">Build</span> <strong class="svelte-1q37ri0">SvelteKit static</strong> <span class="svelte-1q37ri0">Motion</span> <strong class="svelte-1q37ri0">60fps budget</strong> <span class="svelte-1q37ri0">Mode</span> <strong class="svelte-1q37ri0">Command-ready</strong></div></section>`);
}
function ProjectShowcase($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let selected = "All";
    const filters = ["All", "Experience", "Systems", "AI"];
    const filtered = derived(
      () => projects
    );
    $$renderer2.push(`<section class="showcase svelte-x2d45w" id="projects" aria-labelledby="projects-title"><div class="section-heading svelte-x2d45w"><p class="eyebrow svelte-x2d45w">Selected systems</p> <h2 id="projects-title" class="svelte-x2d45w">Project work with motion, data, and intent.</h2></div> <div class="filters svelte-x2d45w" role="tablist" aria-label="Project filters"><!--[-->`);
    const each_array = ensure_array_like(filters);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let filter = each_array[$$index];
      $$renderer2.push(`<button role="tab"${attr("aria-selected", selected === filter)}${attr_class("svelte-x2d45w", void 0, { "selected": selected === filter })}>${escape_html(filter)}</button>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="project-grid svelte-x2d45w"><!--[-->`);
    const each_array_1 = ensure_array_like(filtered());
    for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
      let project = each_array_1[index];
      $$renderer2.push(`<article class="project-card svelte-x2d45w"${attr_style(`--project-accent: ${project.accent}; --delay: ${index * 90}ms`)}><a${attr("href", `/projects/${project.slug}`)}${attr("aria-label", `Open ${project.title} case study`)} class="svelte-x2d45w"><div class="project-media svelte-x2d45w" role="img"${attr("aria-label", project.imageAlt)}><span class="svelte-x2d45w">${escape_html(project.category)}</span></div> <div class="project-body svelte-x2d45w"><h3 class="svelte-x2d45w">${escape_html(project.title)}</h3> <p class="svelte-x2d45w">${escape_html(project.description)}</p> <ul${attr("aria-label", `${project.title} technologies`)} class="svelte-x2d45w"><!--[-->`);
      const each_array_2 = ensure_array_like(project.stack);
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let tech = each_array_2[$$index_1];
        $$renderer2.push(`<li class="svelte-x2d45w">${escape_html(tech)}</li>`);
      }
      $$renderer2.push(`<!--]--></ul></div></a></article>`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
  });
}
function _page($$renderer) {
  Hero($$renderer);
  $$renderer.push(`<!----> `);
  ProjectShowcase($$renderer);
  $$renderer.push(`<!----> `);
  ExperienceConsole($$renderer);
  $$renderer.push(`<!----> <section class="skills svelte-1uha8ag" id="skills" aria-labelledby="skills-title"><div><p class="eyebrow svelte-1uha8ag">Capability map</p> <h2 id="skills-title" class="svelte-1uha8ag">Engineering fluency across the whole interface.</h2></div> <ul class="svelte-1uha8ag"><!--[-->`);
  const each_array = ensure_array_like(skills);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let skill = each_array[$$index];
    $$renderer.push(`<li class="svelte-1uha8ag">${escape_html(skill)}</li>`);
  }
  $$renderer.push(`<!--]--></ul></section> `);
  ContactForm($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
