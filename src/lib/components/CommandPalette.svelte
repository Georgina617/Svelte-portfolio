<script lang="ts">
  import { goto } from '$app/navigation';
  import { theme } from '$lib/stores/preferences';

  let open = $state(false);
  let query = $state('');

  const commands = [
    { label: 'Go to projects', hint: 'Portfolio work', action: () => location.assign('/#projects') },
    { label: 'Go to contact', hint: 'Send a message', action: () => location.assign('/#contact') },
    { label: 'Open Invoice', hint: 'Case study', action: () => goto('/projects/Invoice') },
    { label: 'Toggle theme', hint: 'Dark or light', action: () => theme.update((value) => (value === 'dark' ? 'light' : 'dark')) }
  ];

  const visible = $derived(
    commands.filter((command) => `${command.label} ${command.hint}`.toLowerCase().includes(query.toLowerCase()))
  );

  const run = (action: () => void) => {
    action();
    open = false;
    query = '';
  };
</script>

<svelte:window
  onkeydown={(event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      open = !open;
    }
    if (event.key === 'Escape') open = false;
  }}
/>

<button class="launcher" aria-label="Open command palette" onclick={() => (open = true)}>⌘K</button>

{#if open}
  <div class="scrim" role="presentation" onclick={() => (open = false)}></div>
  <div class="dialog" aria-label="Command palette">
    <input bind:value={query} placeholder="Jump to work, contact, or theme..." autofocus />
    <div class="commands" role="listbox">
      {#each visible as command}
        <button onclick={() => run(command.action)}>
          <strong>{command.label}</strong>
          <span>{command.hint}</span>
        </button>
      {/each}
    </div>
  </div>
{/if}

<style>
  .launcher {
    min-width: 3.2rem;
    height: 2.3rem;
    border: 1px solid var(--line);
    border-radius: 8px;
    color: var(--text);
    background: var(--panel);
    font-weight: 900;
    cursor: pointer;
  }

  .scrim {
    position: fixed;
    inset: 0;
    z-index: 20;
    background: rgb(0 0 0 / 0.48);
    backdrop-filter: blur(8px);
  }

  .dialog {
    position: fixed;
    inset: 14vh 1rem auto;
    z-index: 21;
    width: min(620px, calc(100vw - 2rem));
    margin: auto;
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 0.7rem;
    background: var(--panel-strong);
    color: var(--text);
    box-shadow: 0 30px 90px rgb(0 0 0 / 0.38);
  }

  input {
    width: 100%;
    min-height: 3rem;
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 0 1rem;
    color: var(--text);
    background: var(--bg);
    font: inherit;
  }

  input:focus {
    outline: none;
  }

  .commands {
    display: grid;
    gap: 0.35rem;
    margin-top: 0.7rem;
  }

  .commands button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    border: 0;
    border-radius: 8px;
    padding: 0.9rem;
    color: var(--text);
    background: transparent;
    text-align: left;
    cursor: pointer;
  }

  .commands button:hover,
  .commands button:focus-visible {
    background: color-mix(in srgb, var(--accent) 14%, transparent);
  }

  span {
    color: var(--muted);
  }
</style>
