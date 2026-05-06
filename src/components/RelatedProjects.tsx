import { Link } from "react-router-dom";
import { projects } from "../content/projects";

type RelatedProjectsProps = {
  currentSlug: string;
  limit?: number;
};

function RelatedProjects({ currentSlug, limit = 3 }: RelatedProjectsProps) {
  const currentProject = projects.find((project) => project.slug === currentSlug);

  if (!currentProject) {
    return null;
  }

  const relatedProjects = projects
    .filter(
      (project) =>
        project.slug !== currentSlug &&
        (project.category === currentProject.category ||
          project.tags.some((tag) => currentProject.tags.includes(tag))),
    )
    .slice(0, limit);

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <section className="related-projects" aria-label="Related projects">
      <h3>Related Projects</h3>
      <div>
        {relatedProjects.map((project) => (
          <Link key={project.slug} to={project.route}>
            {project.title}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RelatedProjects;
