<script lang="ts">
  const lines = [
    '$ run portfolio --mode immersive',
    '✓ route-level code splitting enabled',
    '✓ canvas particles respect reduced motion',
    '✓ contact inputs sanitized before mail handoff',
    '✓ command palette listening on Ctrl/⌘ K'
  ];
</script>

<section class="console-section" aria-labelledby="console-title">
  <div class="copy">
    <p class="eyebrow">Developer tools experience</p>
    <h2 id="console-title">A portfolio that behaves like a crafted tool.</h2>
    <p>
      The interface includes command navigation, keyboard affordances, reactive filters, theme
      persistence, and restrained canvas animation tuned for motion comfort.
    </p>
  </div>
  <div class="terminal" aria-label="Portfolio capability terminal">
    {#each lines as line, index}
      <p style={`--delay: ${index * 120}ms`}>{line}</p>
    {/each}
  </div>
</section>

<style>
  .console-section {
    display: grid;
    grid-template-columns: minmax(0, 0.75fr) minmax(300px, 1fr);
    gap: clamp(2rem, 5vw, 5rem);
    padding: 6rem var(--page-pad);
    background: var(--bg-soft);
    border-block: 1px solid var(--line);
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

  .copy p:last-child {
    color: var(--muted);
    line-height: 1.65;
  }

  .terminal {
    min-height: 320px;
    display: grid;
    align-content: center;
    gap: 0.7rem;
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: clamp(1rem, 3vw, 2rem);
    background:
      linear-gradient(180deg, rgb(255 255 255 / 0.04), transparent),
      var(--panel-strong);
    font-family: 'SFMono-Regular', Consolas, monospace;
  }

  .terminal p {
    margin: 0;
    color: var(--accent);
    animation: type-in 520ms steps(20, end) both;
    animation-delay: var(--delay);
    white-space: nowrap;
    overflow: hidden;
  }

  @keyframes type-in {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @media (max-width: 840px) {
    .console-section {
      grid-template-columns: 1fr;
    }

    .terminal p {
      white-space: normal;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .terminal p {
      animation: none;
    }
  }
</style>
