export type Project = {
  slug: string;
  title: string;
  category: 'Experience' | 'Systems' | 'Architecture';
  description: string;
  longDescription: string;
  stack: string[];
  accent: string;
  metrics: string[];
  liveUrl: string;
  githubUrl: string;
  imageAlt: string;
  imageSrc: string;
};

export const projects: Project[] = [
  {
    slug: 'Invoice',
    title: 'Invoice-management system',
    category: 'Experience',
    description:
      'A real-time invoice management system with dynamic dashboards and collaborative features.',
    longDescription:
      'Invoice is a comprehensive solution for businesses to create, manage, and track invoices with real-time updates, customizable dashboards, and seamless collaboration tools.',
    stack: ['React', 'Javascript', 'local storage', 'Tailwind CSS'],
    accent: '#73f7b2',
    metrics: ['42% faster triage', '96 Lighthouse perf', '18kb route payload'],
    liveUrl: 'https://invoice-management-app-3517.vercel.app/',
    githubUrl: 'https://github.com/Georgina617/Invoice-Management-App.git',
    imageAlt: 'Invoice management dashboard with charts and invoice list',
    imageSrc: '/projects/invoice.png',
  },
  {
    slug: 'E2E Messaging App',
    title: 'E2E Messaging App',
    category: 'Systems',
    description:
      'A secure messaging app with end-to-end encryption and decrypted messages.',
    longDescription:
      'E2E Messaging App is a secure communication platform that ensures privacy with end-to-end encryption, allowing users to send and receive messages that are decrypted only on their devices.',
    stack: ['Next.js', 'IndexedDB', 'Web Workers', 'Web Crypto API'],
    accent: '#8fb7ff',
    metrics: ['Sub-50ms search', 'Offline-ready', 'AA contrast'],
    liveUrl: 'https://e2-e-messaging-app.vercel.app/',
    githubUrl: 'https://github.com/Georgina617/E2E-messaging-App.git',
    imageAlt:
      'Secure messaging interface with end-to-end encryption indicators',
    imageSrc: '/projects/e2e-messaging.png',
  },
  {
    slug: 'Habit Tracker',
    title: 'Habit Tracker',
    category: 'Architecture',
    description:
      'A habit tracking app with a modular architecture and real-time progress visualization.',
    longDescription:
      'Habit Tracker is designed to help users build and maintain habits through a modular architecture that supports real-time progress visualization, customizable habit templates, and insightful analytics.',
    stack: ['Next.js', 'IndexedDB', 'Service Workers', 'Typescript'],
    accent: '#ffcb77',
    metrics: [
      'Modular architecture',
      'Real-time updates',
      'Customizable templates',
    ],
    liveUrl: 'https://habit-tracker-pwa-mauve.vercel.app/',
    githubUrl: 'https://github.com/Georgina617/Habit-tracker-pwa.git',
    imageAlt: 'Habit tracking interface with progress visualization',
    imageSrc: '/projects/habit-tracker.png',
  },
];

export const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Svelte',
  'Tailwind CSS',
  'IndexedDB',
  'Web Workers',
  'Web Crypto API',
];
