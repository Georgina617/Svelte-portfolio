<script lang="ts">
  import CommandPalette from '$lib/components/CommandPalette.svelte';
  import { theme } from '$lib/stores/preferences';
  import '../styles/global.css';

  const toggleTheme = () => theme.update((value) => (value === 'dark' ? 'light' : 'dark'));
</script>

<svelte:head>
  <title>Georgina odusanya | Interactive Svelte Portfolio</title>
</svelte:head>

<a class="skip-link" href="#content">Skip to content</a>

<header class="site-header">
  <a class="brand" href="/" aria-label="Georgina odusanya home">GO</a>
  <nav aria-label="Primary navigation">
    <a href="/#projects">Projects</a>
    <a href="/#skills">Skills</a>
    <a href="/#contact">Contact</a>
  </nav>
  <div class="tools">
    <CommandPalette />
    <button class="theme-toggle" type="button" onclick={toggleTheme}>Theme</button>
  </div>
</header>

<main id="content">
  <slot />
</main>

<footer>
  <p>Built with SvelteKit, native CSS, and a strict motion budget.</p>
  <a href="https://github.com/Georgina617" target="_blank">GitHub</a>
</footer>
