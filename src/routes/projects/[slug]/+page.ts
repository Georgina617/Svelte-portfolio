import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects';

export const entries = () => projects.map((project) => ({ slug: project.slug }));

export const load = ({ params }) => {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) error(404, 'Project not found');
  return { project };
};
