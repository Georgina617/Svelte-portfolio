<script lang="ts">
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
  const project = $derived(data.project);
</script>

<svelte:head>
  <title>{project.title} | Ava Morgan</title>
</svelte:head>

<article class="case-study" style={`--project-accent: ${project.accent}`}>
  <a class="back" href="/#projects">← Back to projects</a>
  <header>
    <p>{project.category}</p>
    <h1>{project.title}</h1>
    <span>{project.description}</span>
  </header>

  <div class="hero-media" role="img" aria-label={project.imageAlt}>
    {#if project.imageSrc}
      <img src={project.imageSrc} alt={project.imageAlt} />
    {/if}
  </div>

  <section class="detail-grid">
    <div>
      <h2>System brief</h2>
      <p>{project.longDescription}</p>
    </div>
    <div>
      <h2>Proof points</h2>
      <ul>
        {#each project.metrics as metric}
          <li>{metric}</li>
        {/each}
      </ul>
    </div>
  </section>

  <section class="stack">
    <h2>Technology</h2>
    <ul>
      {#each project.stack as tech}
        <li>{tech}</li>
      {/each}
    </ul>
  </section>

  <div class="actions">
    <a href={project.liveUrl} rel="noreferrer" target="_blank">Live demo</a>
    <a href={project.githubUrl} rel="noreferrer" target="_blank">GitHub repository</a>
  </div>
</article>

<style>
  .case-study {
    padding: 7rem var(--page-pad) 5rem;
  }

  .back {
    color: var(--muted);
    text-decoration: none;
    font-weight: 800;
  }

  header {
    max-width: 980px;
    margin-top: 3rem;
  }

  header p {
    margin: 0 0 0.75rem;
    color: var(--project-accent);
    font-weight: 900;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
    font-size: clamp(3rem, 9vw, 8rem);
    line-height: 0.9;
  }

  header span {
    display: block;
    max-width: 680px;
    margin-top: 1rem;
    color: var(--muted);
    font-size: 1.2rem;
    line-height: 1.6;
  }

  .hero-media {
    min-height: clamp(320px, 48vw, 620px);
    margin: 3rem 0;
    border: 1px solid color-mix(in srgb, var(--project-accent) 60%, var(--line));
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    background:
      radial-gradient(circle at 28% 30%, color-mix(in srgb, var(--project-accent) 50%, transparent), transparent 25%),
      repeating-linear-gradient(0deg, transparent 0 28px, color-mix(in srgb, var(--project-accent) 15%, transparent) 29px 30px),
      var(--panel-strong);
  }

  .hero-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .detail-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.7fr);
    gap: 2rem;
  }

  h2 {
    margin: 0 0 0.8rem;
    font-size: 1rem;
    text-transform: uppercase;
    color: var(--project-accent);
  }

  p,
  li {
    color: var(--muted);
    line-height: 1.65;
  }

  ul {
    margin: 0;
    padding-left: 1.2rem;
  }

  .stack {
    margin-top: 3rem;
  }

  .stack ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    padding: 0;
    list-style: none;
  }

  .stack li {
    border: 1px solid var(--line);
    border-radius: 999px;
    padding: 0.45rem 0.7rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 2rem;
  }

  .actions a {
    min-height: 2.8rem;
    display: inline-flex;
    align-items: center;
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 0 1rem;
    color: var(--text);
    text-decoration: none;
    font-weight: 900;
  }

  .actions a:first-child {
    background: var(--project-accent);
    color: #07130f;
    border-color: var(--project-accent);
  }

  @media (max-width: 760px) {
    .detail-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
