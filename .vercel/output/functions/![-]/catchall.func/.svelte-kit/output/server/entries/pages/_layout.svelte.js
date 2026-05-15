import { _ as head, a9 as slot } from "../../chunks/renderer.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/state.svelte.js";
function CommandPalette($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<button class="launcher svelte-wh9uu8" aria-label="Open command palette">⌘K</button> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Georgina odusanya | Interactive Svelte Portfolio</title>`);
      });
    });
    $$renderer2.push(`<a class="skip-link" href="#content">Skip to content</a> <header class="site-header"><a class="brand" href="/" aria-label="Georgina odusanya home">GO</a> <nav aria-label="Primary navigation"><a href="/#projects">Projects</a> <a href="/#skills">Skills</a> <a href="/#contact">Contact</a></nav> <div class="tools">`);
    CommandPalette($$renderer2);
    $$renderer2.push(`<!----> <button class="theme-toggle" type="button">Theme</button></div></header> <main id="content"><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></main> <footer><p>Built with SvelteKit, native CSS, and a strict motion budget.</p> <a href="https://github.com/Georgina617" target="_blank">GitHub</a></footer>`);
  });
}
export {
  _layout as default
};
