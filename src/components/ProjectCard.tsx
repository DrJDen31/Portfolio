import { Link } from "react-router-dom";
import { projectTypeLabels, type Project } from "../content/projects";
import ProjectStatusBadge, { ProjectTypeBadge } from "./ProjectStatusBadge";
import TagList from "./TagList";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <article className={compact ? "project-card project-card-compact" : "project-card"}>
      <Link to={project.route} className="project-card-image" aria-label={`Read ${project.title}`}>
        <img src={project.image} alt="" loading="lazy" />
      </Link>
      <div className="project-card-body">
        <div className="project-card-meta">
          <ProjectStatusBadge status={project.status} />
          <ProjectTypeBadge type={project.type} />
          <span>{project.category}</span>
          <span>{project.dates}</span>
        </div>
        <h3>
          <Link to={project.route}>{project.title}</Link>
        </h3>
        <p>{compact ? project.summary : project.outcome}</p>
        <TagList tags={project.tags} />
        <Link to={project.route} className="text-link">
          Open {projectTypeLabels[project.type]}
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;
