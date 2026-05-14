import { _ as head, K as attr_style, V as escape_html, G as attr, Q as ensure_array_like, P as derived } from "../../../../chunks/renderer.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const project = derived(() => data.project);
    head("gygcht", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(project().title)} | Ava Morgan</title>`);
      });
    });
    $$renderer2.push(`<article class="case-study svelte-gygcht"${attr_style(`--project-accent: ${project().accent}`)}><a class="back svelte-gygcht" href="/#projects">← Back to projects</a> <header class="svelte-gygcht"><p class="svelte-gygcht">${escape_html(project().category)}</p> <h1 class="svelte-gygcht">${escape_html(project().title)}</h1> <span class="svelte-gygcht">${escape_html(project().description)}</span></header> <div class="hero-media svelte-gygcht" role="img"${attr("aria-label", project().imageAlt)}></div> <section class="detail-grid svelte-gygcht"><div><h2 class="svelte-gygcht">System brief</h2> <p class="svelte-gygcht">${escape_html(project().longDescription)}</p></div> <div><h2 class="svelte-gygcht">Proof points</h2> <ul class="svelte-gygcht"><!--[-->`);
    const each_array = ensure_array_like(project().metrics);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let metric = each_array[$$index];
      $$renderer2.push(`<li class="svelte-gygcht">${escape_html(metric)}</li>`);
    }
    $$renderer2.push(`<!--]--></ul></div></section> <section class="stack svelte-gygcht"><h2 class="svelte-gygcht">Technology</h2> <ul class="svelte-gygcht"><!--[-->`);
    const each_array_1 = ensure_array_like(project().stack);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let tech = each_array_1[$$index_1];
      $$renderer2.push(`<li class="svelte-gygcht">${escape_html(tech)}</li>`);
    }
    $$renderer2.push(`<!--]--></ul></section> <div class="actions svelte-gygcht"><a${attr("href", project().liveUrl)} rel="noreferrer" class="svelte-gygcht">Live demo</a> <a${attr("href", project().githubUrl)} rel="noreferrer" class="svelte-gygcht">GitHub repository</a></div></article>`);
  });
}
export {
  _page as default
};
