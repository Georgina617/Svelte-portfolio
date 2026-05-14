<script lang="ts">
  import ParticleField from './ParticleField.svelte';

  const email = 'georginaodusanya@gmail.com';
</script>

<section class="hero" id="top" aria-labelledby="hero-title">
  <ParticleField />
  <div class="hero__content">
    <p class="eyebrow">Frontend engineer / interaction designer</p>
    <h1 id="hero-title">Georgina odusanya builds interfaces that feel alive.</h1>
    <p class="intro">
      I design and engineer fast, accessible product experiences with cinematic motion, clean systems,
      and a bias for interfaces people remember.
    </p>
    <div class="actions" aria-label="Primary actions">
      <a class="button button--primary" href="#projects">Explore work</a>
      <a class="button" href="/Omolola_Odusanya_Resume.pdf" download>Resume</a>
      <a class="button button--ghost" href={
        `mailto:${email}`
      }>{email}</a>
    </div>
  </div>
  <div class="status-panel" aria-label="Portfolio status">
    <span>Build</span>
    <strong>SvelteKit static</strong>
    <span>Motion</span>
    <strong>60fps budget</strong>
    <span>Mode</span>
    <strong>Command-ready</strong>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: min(820px, 92svh);
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(240px, 360px);
    align-items: center;
    gap: clamp(1.5rem, 5vw, 5rem);
    overflow: hidden;
    padding: clamp(7rem, 12vw, 10rem) var(--page-pad) 5rem;
    border-bottom: 1px solid var(--line);
  }

  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 20% 20%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 30%),
      linear-gradient(110deg, var(--bg) 0%, transparent 55%, color-mix(in srgb, var(--panel) 82%, transparent));
    pointer-events: none;
  }

  .hero__content,
  .status-panel {
    position: relative;
    z-index: 1;
  }

  .eyebrow {
    margin: 0 0 1rem;
    color: var(--accent);
    font-size: 0.82rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  h1 {
    max-width: 920px;
    margin: 0;
    font-size: clamp(3.2rem, 9vw, 8.8rem);
    line-height: 0.88;
    letter-spacing: 0;
  }

  .intro {
    max-width: 650px;
    margin: 1.5rem 0 0;
    color: var(--muted);
    font-size: clamp(1.05rem, 2vw, 1.35rem);
    line-height: 1.65;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 2rem;
  }

  .button {
    min-height: 2.9rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 0 1rem;
    color: var(--text);
    text-decoration: none;
    font-weight: 800;
    background: color-mix(in srgb, var(--panel) 82%, transparent);
    transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
  }

  .button:hover {
    transform: translateY(-2px);
    border-color: var(--accent);
  }

  .button--primary {
    background: var(--accent);
    color: #07130f;
  }

  .button--ghost {
    color: var(--muted);
  }

  .status-panel {
    justify-self: end;
    width: min(100%, 360px);
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.55rem;
    border-left: 1px solid var(--line);
    padding-left: 1.25rem;
    animation: float-in 700ms ease both 350ms;
  }

  .status-panel span {
    color: var(--muted);
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  .status-panel strong {
    margin-bottom: 0.65rem;
    font-size: clamp(1.2rem, 2vw, 1.7rem);
  }

  @keyframes float-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
  }

  @media (max-width: 760px) {
    .hero {
      grid-template-columns: 1fr;
      padding-top: 6rem;
    }

    .status-panel {
      justify-self: start;
      width: 100%;
      border-left: 0;
      border-top: 1px solid var(--line);
      padding: 1.25rem 0 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .status-panel,
    .button {
      animation: none;
      transition: none;
    }
  }
</style>
