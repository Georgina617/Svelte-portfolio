import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'dark' | 'light';

const initialTheme = (): Theme => {
  if (!browser) return 'dark';
  const saved = localStorage.getItem('portfolio-theme');
  if (saved === 'dark' || saved === 'light') return saved;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

export const theme = writable<Theme>(initialTheme());
export const reducedMotion = writable(false);

if (browser) {
  theme.subscribe((value) => {
    document.documentElement.dataset.theme = value;
    localStorage.setItem('portfolio-theme', value);
  });

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  reducedMotion.set(motionQuery.matches);
  motionQuery.addEventListener('change', (event) => reducedMotion.set(event.matches));
}
