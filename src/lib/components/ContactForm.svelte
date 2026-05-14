<script lang="ts">
  import { sanitizeInput } from '$lib/utils/sanitize';

  let name = $state('');
  let email = $state('');
  let message = $state('');
  let status = $state('');

  const submit = () => {
    const cleanName = sanitizeInput(name);
    const cleanMessage = sanitizeInput(message);
    const cleanEmail = sanitizeInput(email).toLowerCase();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail);

    if (!cleanName || !validEmail || cleanMessage.length < 12) {
      status = 'Add a valid email and a message with a little more signal.';
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${cleanName}`);
    const body = encodeURIComponent(`${cleanMessage}\n\nReply to: ${cleanEmail}`);
    status = 'Opening your mail client with a sanitized draft.';
    window.location.href = `mailto:ava@example.com?subject=${subject}&body=${body}`;
  };
</script>

<section class="contact" id="contact" aria-labelledby="contact-title">
  <div>
    <p class="eyebrow">Contact</p>
    <h2 id="contact-title">Bring a sharp frontend problem.</h2>
    <p>
      I’m especially interested in product surfaces where animation, performance, and information
      architecture all matter at once.
    </p>
  </div>

  <form
    onsubmit={(event) => {
      event.preventDefault();
      submit();
    }}
    novalidate
  >
    <label>
      Name
      <input bind:value={name} autocomplete="name" required />
    </label>
    <label>
      Email
      <input bind:value={email} type="email" autocomplete="email" required />
    </label>
    <label>
      Message
      <textarea bind:value={message} rows="5" required></textarea>
    </label>
    <button type="submit">Compose message</button>
    <p class="status" role="status">{status}</p>
  </form>
</section>

<style>
  .contact {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(280px, 560px);
    gap: clamp(2rem, 6vw, 6rem);
    padding: 6rem var(--page-pad);
    border-top: 1px solid var(--line);
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

  p {
    color: var(--muted);
    line-height: 1.65;
  }

  form {
    display: grid;
    gap: 1rem;
  }

  label {
    display: grid;
    gap: 0.45rem;
    color: var(--muted);
    font-weight: 800;
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 0.85rem 1rem;
    color: var(--text);
    background: var(--panel);
    font: inherit;
  }

  textarea {
    resize: vertical;
  }

  button {
    min-height: 3rem;
    border: 0;
    border-radius: 8px;
    color: #07130f;
    background: var(--accent);
    font: inherit;
    font-weight: 900;
    cursor: pointer;
  }

  .status {
    min-height: 1.5rem;
    margin: 0;
  }

  @media (max-width: 760px) {
    .contact {
      grid-template-columns: 1fr;
    }
  }
</style>
