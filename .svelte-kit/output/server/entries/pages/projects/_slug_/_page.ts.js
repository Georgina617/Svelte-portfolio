import { error } from "@sveltejs/kit";
import { p as projects } from "../../../../chunks/projects.js";
const entries = () => projects.map((project) => ({ slug: project.slug }));
const load = ({ params }) => {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) error(404, "Project not found");
  return { project };
};
export {
  entries,
  load
};
