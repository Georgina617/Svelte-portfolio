# Interactive Developer Portfolio

Production-shaped SvelteKit portfolio for an interaction-focused frontend engineer. It includes an animated hero, command palette, filtered project system, routed case studies, accessible contact flow, theme persistence, and reduced-motion support.

## Setup

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Architecture

- `src/routes` contains the SvelteKit routes, including static project detail pages at `/projects/[slug]`.
- `src/lib/components` contains reusable interface systems: hero, canvas background, project showcase, command palette, terminal feature, and contact form.
- `src/lib/data/projects.ts` centralizes portfolio content and powers both the index showcase and project routes.
- `src/lib/stores/preferences.ts` manages theme persistence and reduced-motion state.
- `src/styles/global.css` defines the design system with native CSS variables.

## Animation Decisions

Animations are mostly CSS transforms, opacity, and canvas drawing to stay GPU-friendly. The particle field responds subtly to pointer position and disables drift when reduced motion is requested. Project cards use short reveal and hover transitions, while the terminal section uses a constrained type-in effect.

## Performance Optimization

- Static adapter for CDN-friendly deployment on Vercel, Netlify, Cloudflare Pages, or similar hosts.
- Route-level code splitting through SvelteKit.
- No heavy animation libraries or runtime UI frameworks.
- Canvas work is lightweight and avoids layout reads inside the animation loop.
- CSS gradients replace large decorative images.

## Accessibility

- Semantic landmarks, headings, labels, and skip navigation are included.
- Keyboard navigation is supported across links, filters, form controls, and command palette.
- Visible focus styles are defined globally.
- Motion respects `prefers-reduced-motion`.
- Contact form provides inline validation status and sanitizes input before mail handoff.

## Security and Stability

The contact form strips risky characters, validates email format, and uses a `mailto:` draft instead of embedding secrets. External links are placeholders for deployment and repository targets; replace them with live links before submission.

## Deployment

This project is configured with `@sveltejs/adapter-static`, so any static host works well. For Netlify or Cloudflare Pages, use `npm run build` and deploy the generated `build` directory. For Vercel, import the repository and keep the default SvelteKit build command.

## Trade-offs

The portfolio uses native canvas and CSS instead of Three.js to keep the bundle lean while still delivering an immersive experience. The advanced creative feature is the developer-tools experience: command palette, terminal capability surface, keyboard navigation, and reactive project exploration.
