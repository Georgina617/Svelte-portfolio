const projects = [
  {
    slug: "signal-lab",
    title: "Signal Lab",
    category: "Experience",
    description: "A real-time analytics cockpit for product teams tracking launch signals.",
    longDescription: "Signal Lab turns scattered event streams into a cinematic operating surface with live status lanes, anomaly callouts, and keyboard-first triage.",
    stack: ["SvelteKit", "Web Workers", "Canvas", "Edge cache"],
    accent: "#73f7b2",
    metrics: ["42% faster triage", "96 Lighthouse perf", "18kb route payload"],
    liveUrl: "https://example.com/signal-lab",
    githubUrl: "https://github.com/example/signal-lab",
    imageAlt: "Abstract analytics interface with glowing status lanes"
  },
  {
    slug: "orbit-docs",
    title: "Orbit Docs",
    category: "Systems",
    description: "A spatial documentation system with graph navigation and instant search.",
    longDescription: "Orbit Docs combines a local-first content graph, progressive enhancement, and a motion language that makes deep technical systems feel explorable.",
    stack: ["Svelte", "IndexedDB", "Search index", "View transitions"],
    accent: "#8fb7ff",
    metrics: ["Sub-50ms search", "Offline-ready", "AA contrast"],
    liveUrl: "https://example.com/orbit-docs",
    githubUrl: "https://github.com/example/orbit-docs",
    imageAlt: "Network graph documentation interface with connected nodes"
  },
  {
    slug: "forge-ai",
    title: "Forge AI",
    category: "AI",
    description: "A prompt engineering workbench with eval snapshots and review trails.",
    longDescription: "Forge AI gives teams a disciplined way to compare prompts, replay model responses, and ship changes with confidence instead of vibes.",
    stack: ["SvelteKit", "Streaming UI", "Server actions", "Zod"],
    accent: "#ffcb77",
    metrics: ["2.3s first token", "Typed eval schema", "No exposed secrets"],
    liveUrl: "https://example.com/forge-ai",
    githubUrl: "https://github.com/example/forge-ai",
    imageAlt: "AI workbench with split panels and evaluation traces"
  }
];
const skills = [
  "Svelte 5 runes",
  "SvelteKit routing",
  "Accessible motion",
  "Performance budgets",
  "Canvas systems",
  "Design systems",
  "SSR and static builds",
  "Progressive enhancement"
];
export {
  projects as p,
  skills as s
};
