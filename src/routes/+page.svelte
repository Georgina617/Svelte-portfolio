<script lang="ts">
  import ContactForm from '$lib/components/ContactForm.svelte';
  import ExperienceConsole from '$lib/components/ExperienceConsole.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import ProjectShowcase from '$lib/components/ProjectShowcase.svelte';
  import { skills } from '$lib/data/projects';
</script>

<Hero />
<ProjectShowcase />
<ExperienceConsole />

<section class="skills" id="skills" aria-labelledby="skills-title">
  <div>
    <p class="eyebrow">Capability map</p>
    <h2 id="skills-title">Engineering fluency across the whole interface.</h2>
  </div>
  <ul>
    {#each skills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</section>

<ContactForm />

<style>
  .skills {
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(300px, 1fr);
    gap: clamp(2rem, 6vw, 6rem);
    padding: 6rem var(--page-pad);
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
    font-size: clamp(2rem, 5vw, 4rem);
    line-height: 1;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 1rem;
    background: var(--panel);
    color: var(--muted);
    font-weight: 800;
  }

  @media (max-width: 760px) {
    .skills,
    ul {
      grid-template-columns: 1fr;
    }
  }
</style>
