<script lang="ts">
  import { projects } from '$lib/data/projects';

  let selected = $state<'All' | 'Experience' | 'Systems' | 'Architecture'>('All');
  const filters = ['All', 'Experience', 'Systems', 'Architecture'] as const;
  const filtered = $derived(selected === 'All' ? projects : projects.filter((project) => project.category === selected));
</script>

<section class="showcase" id="projects" aria-labelledby="projects-title">
  <div class="section-heading">
    <p class="eyebrow">Selected systems</p>
    <h2 id="projects-title">Project work with motion, data, and intent.</h2>
  </div>

  <div class="filters" role="tablist" aria-label="Project filters">
    {#each filters as filter}
      <button
        class:selected={selected === filter}
        role="tab"
        aria-selected={selected === filter}
        onclick={() => (selected = filter)}
      >
        {filter}
      </button>
    {/each}
  </div>

  <div class="project-grid">
    {#each filtered as project, index (project.slug)}
      <article class="project-card" style={`--project-accent: ${project.accent}; --delay: ${index * 90}ms`}>
        <a href={`/projects/${project.slug}`} aria-label={`Open ${project.title} case study`}>
          <div class="project-media" role="img" aria-label={project.imageAlt}>
            {#if project.imageSrc}
              <img src={project.imageSrc} alt={project.imageAlt} />
            {/if}
            <span>{project.category}</span>
          </div>
          <div class="project-body">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul aria-label={`${project.title} technologies`}>
              {#each project.stack as tech}
                <li>{tech}</li>
              {/each}
            </ul>
          </div>
        </a>
      </article>
    {/each}
  </div>
</section>

<style>
  .showcase {
    padding: 6rem var(--page-pad);
  }

  .section-heading {
    max-width: 780px;
  }

  .eyebrow {
    margin: 0 0 0.75rem;
    color: var(--accent);
    font-weight: 800;
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  h2 {
    margin: 0;
    font-size: clamp(2rem, 5vw, 4.6rem);
    line-height: 1;
  }

  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin: 2rem 0;
  }

  button {
    min-height: 2.5rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    padding: 0 0.95rem;
    color: var(--muted);
    background: transparent;
    cursor: pointer;
  }

  button.selected {
    color: #07130f;
    background: var(--accent);
    border-color: var(--accent);
    font-weight: 800;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  .project-card {
    min-height: 470px;
    border: 1px solid var(--line);
    border-radius: 8px;
    overflow: hidden;
    background: var(--panel);
    animation: reveal 500ms ease both;
    animation-delay: var(--delay);
  }

  .project-card a {
    height: 100%;
    display: grid;
    grid-template-rows: 230px 1fr;
    color: var(--text);
    text-decoration: none;
  }

  .project-media {
    position: relative;
    overflow: hidden;
    background:
      linear-gradient(135deg, color-mix(in srgb, var(--project-accent) 45%, transparent), transparent 50%),
      repeating-linear-gradient(90deg, color-mix(in srgb, var(--project-accent) 18%, transparent) 0 1px, transparent 1px 22px),
      var(--bg-soft);
  }

  .project-media::after {
    content: '';
    position: absolute;
    inset: 18%;
    border: 1px solid color-mix(in srgb, var(--project-accent) 70%, transparent);
    transform: rotate(-8deg);
    transition: transform 260ms ease;
  }

  .project-media span {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    border-radius: 999px;
    padding: 0.38rem 0.7rem;
    background: color-mix(in srgb, var(--bg) 75%, transparent);
    color: var(--project-accent);
    font-weight: 800;
  }

  .project-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .project-body {
    display: grid;
    align-content: start;
    gap: 1rem;
    padding: 1.25rem;
  }

  h3 {
    margin: 0;
    font-size: 1.6rem;
  }

  p {
    margin: 0;
    color: var(--muted);
    line-height: 1.55;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    border: 1px solid var(--line);
    border-radius: 999px;
    padding: 0.3rem 0.55rem;
    color: var(--muted);
    font-size: 0.82rem;
  }

  .project-card:hover {
    border-color: var(--project-accent);
    transform: translateY(-4px);
    transition: transform 220ms ease, border-color 220ms ease;
  }

  .project-card:hover .project-media::after {
    transform: rotate(0deg) scale(1.08);
  }

  @keyframes reveal {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
  }

  @media (max-width: 980px) {
    .project-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .project-grid {
      grid-template-columns: 1fr;
    }

    .project-card {
      min-height: 420px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .project-card,
    .project-card:hover,
    .project-media::after {
      animation: none;
      transition: none;
      transform: none;
    }
  }
</style>
